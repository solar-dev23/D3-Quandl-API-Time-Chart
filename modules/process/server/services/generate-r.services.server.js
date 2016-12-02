function RCodeGenerator(){
    'use strict';

    var deployr = require('deployr'),
        Promise = require('bluebird');

    this.code = 'require(deployrUtils)\n';
    this.outputVars = [];
    this.transformedDataset = false;

    this.setS3Configuration = function(s3accessKey, s3secretKey, s3bucket){
        this.code += '#sensitive\n';
        this.code += '# Function: setS3Configuration - Start\n';
        this.code += 'library("aws.s3")\n';

        this.code += 'accessKey <- "' + s3accessKey + '"\n';
        this.code += 'secretKey <- "' + s3secretKey + '"\n';
        this.code += 'bucketName <- "' + s3bucket + '"\n';

        this.code += 'Sys.setenv("AWS_ACCESS_KEY_ID" = accessKey,\n';
        this.code += '           "AWS_SECRET_ACCESS_KEY" = secretKey)\n';
        this.code += '# Function: setS3Configuration - End\n';
        this.code += '#sensitive\n';

        this.s3configured = true;

        return this;
    };

    this.loads3File = function(s3filekey, s3filevar){
        if (!this.s3configured){
            throw new Error('You need to call setS3Configuration before you can run this function. RCodeGenerator.loads3File()');
        }

        this.code += '#sensitive\n';
        this.code += '# Function: loads3File - Start\n';
        this.code += 'getcsv <- function(fileName) {\n';
        this.code += '    baseName <- tail(unlist(strsplit(fileName, "/")), n=1)\n';
        this.code += '    tmpFile <- paste("/tmp", baseName, sep="/")\n';
        this.code += '    savedFile <- save_object(fileName, file=tmpFile, bucket=bucketName)\n';
        this.code += '    return(savedFile)\n';
        this.code += '}\n';

        this.code += s3filevar + ' <- getcsv("' + s3filekey + '")\n';
        this.code += '# Function: loads3File - End\n';
        this.code += '#sensitive\n';

        return this;
    };

    this.loadCsvFile = function(inputFile, csvvar){
        this.code += '#sensitive\n';
        this.code += '# Function: loadCsvFile - Start\n';
        this.code += csvvar + ' <- read.csv(' + inputFile + ', stringsAsFactors=TRUE)\n';
        this.code += '# Function: loadCsvFile - End\n';
        this.code += '#sensitive\n';
        return this;
    };

    this.printLMFit = function(inputData, yColIndex, filename){
        if (!this.s3configured){
            throw new Error('You need to call setS3Configuration before you can run this function. RCodeGenerator.loads3File()');
        }

        this.code += '# Function: printLMFit - Start\n';

        this.code += 'print_lm <- function(fit, digits = 4) {\n';

        this.code += '  if (class(fit) != "lm") {\n';
        this.code += '        stop("First agrument should be of class lm!")\n';
        this.code += '  }\n';

        this.code += '  cf <- coef(fit)\n';

        this.code += '  yname <- as.character(attr(fit$terms, which = "variables"))[2]\n';

        this.code += '  intercept <- sprintf(sprintf("%%0.%df", digits), cf[1])\n';

        this.code += '  xpart <- paste(sprintf(sprintf(" %%s %%0.%df*%%s", digits),\n';
        this.code += '  ifelse(cf[-1] > 0, "+", "-"), abs(cf[-1]), names(cf)[-1]), collapse = "")\n';

        this.code += '  sprintf("%s = %s%s", yname, intercept, xpart)\n';
        this.code += '}\n';

        this.code += 'get_metrics <- function(fit, digits = 4) {\n';

        this.code += '  if (class(fit) != "lm") {\n';
        this.code += '    stop("First argument should be of class lm!")\n';
        this.code += '  }\n';

        this.code += '  smr <- summary(fit)\n';

        this.code += '  list(\n';
        this.code += '    r_squared = round(smr$r.squared, digits),\n';
        this.code += '    adj_r_squared = round(smr$adj.r.squared, digits),\n';
        this.code += '    f_statistics = as.numeric(round(smr$fstatistic[1], digits)),\n';
        this.code += '    p_value = as.numeric(pf(smr$fstatistic[1L], smr$fstatistic[2L], smr$fstatistic[3L], lower.tail = FALSE))[1]\n';
        this.code += '  )\n';
        this.code += '}\n';

        this.code += 'colnames(' + inputData + ')[' + yColIndex + ']<-"depvar"\n';
        this.code += 'lm.fit<- lm(depvar~.,data=' + inputData + ')\n';
        this.code += 'equation <- print_lm(lm.fit, digits = 2)\n';
        this.code += 'metrics <- get_metrics(lm.fit)\n';
        this.code += 'print(summary(lm.fit))\n';
        this.code += '#sensitive\n';
        this.code += 's3save(lm.fit, bucket="rdatamodels", object = "' + filename + '.rdata")\n';
        this.code += '#sensitive\n';

        this.code += '# Function: printLMFit - End\n';

        this.modelkey = filename + '.rdata';

        this.outputVars.push('equation');
        this.outputVars.push('metrics');
        return this;
    };

    this.renameColumns = function(datavar, columnnames){
        this.code += '# Function: renameColumns - Start\n';
        this.code += 'colnames(' + datavar + ') <- c(' + columnnames + ')\n';
        this.code += '# Function: renameColumns - End\n';
        return this;
    };

    this.dropColumns = function(datavar, columnnumbers){
        this.code += '# Function: dropColumns - Start\n';
        this.code += datavar + '[c(' + columnnumbers + ')] <- list(NULL)\n';
        this.code += '# Function: dropColumns - End\n';
        return this;
    };

    this.removeNA = function(datavar){
        this.code += '# Function: removeNA - Start\n';
        this.code += datavar + '<-na.omit(' + datavar + ')\n';
        this.code += '# Function: removeNA - End\n';
        return this;
    };

    this.logTransform = function(datavar){
        this.code += '# Function: logTransform - Start\n';
        this.code += 'df_log <- function(df, base = exp(1)) {\n';
        this.code += '  # Checks columns classes\n';
        this.code += '  is_numeric <- sapply(df, is.numeric)\n';
        this.code += '  # Applies transformation\n';
        this.code += '  df[, is_numeric] <- log(df[, is_numeric], base = base)\n';
        this.code += '}\n';
        this.code += datavar + ' <- df_log(' + datavar + ')\n';
        this.code += '# Function: logTransform - End\n';
        return this;
    };

    this.linearRegression = function(s3accessKey, s3secretKey, s3bucket, inputData, yColIndex, filename){
        this.printLMFit('dataset', yColIndex, filename);
        return this;
    };

    this.predict = function(modelkey){
        this.code += 's3load("' + modelkey + '", bucket = "rdatamodels")\n';
        this.code += 'predict(lm.fit, dataset, interval ="confidence")\n';
        return this;
    };

    this.mergeDataset = function(dataset1, keyindex1, dataset2, keyindex2){
        this.code += '# Function: mergeDataset - Start\n';
        //this.code += 'install.packages("data.table")\n';
        this.code += 'library("data.table")\n';

        this.code += 'merge_dt <- function(df1, col1, df2, col2) {\n';
        this.code += '  dt1 <- as.data.table(df1)\n';
        this.code += '  dt2 <- as.data.table(df2)\n';
        this.code += '  key1 <- colnames(dt1)[col1]\n';
        this.code += '  key2 <- colnames(dt2)[col2]\n';
        this.code += '  setkeyv(dt1, key1)\n';
        this.code += '  setkeyv(dt2, key2)\n';
        this.code += '  merge(dt1, dt2, by.x = key1, by.y = key2)\n';
        this.code += '}\n';

        this.code += dataset1 + '<- merge_dt(df1 = ' + dataset1 + ', col1 = ' + keyindex1 + ', df2 = ' + dataset2 + ', col2 = ' + keyindex2 + ')\n';
        this.code += '# Function: mergeDataset - End\n';
        return this;
    };

    this.saveCSVToS3File = function(savevar, filename, ext, s3bucket, filevar){
        if (!this.s3configured){
            throw new Error('You need to call setS3Configuration before you can run this function. RCodeGenerator.loads3File()');
        }

        this.code += '#sensitive\n';
        this.code += '# Function: saveCSVToS3File - Start\n';
        this.code += 'temp <- tempfile(pattern = "file", tmpdir = "", fileext = ".csv")\n';
        this.code += 'temp <- paste(".", temp, sep="")\n';
        this.code += 'write.csv(' + savevar + ', file = temp, row.names=FALSE)\n';
        this.code += 'filename <- paste("' + filename + '", "' + ext + '", sep=".")\n';
        this.code += filevar + ' <- put_object(temp, bucket="' + s3bucket + '", object = filename)\n';
        this.code += 'unlink(temp)\n';
        this.code += '# Function: saveCSVToS3File - End\n';
        this.code += '#sensitive\n';
        this.datasetkey = filename + '.csv';
        this.transformedDataset = true;
        return this;
    };

    this.execute = function(host, username, password){
        var self = this;

        console.log(this.code);

        return new Promise(function(resolve, reject){
            var project = null;
            deployr.configure({ host: host });

            var ruser = deployr.io('/r/user/login')
                .data({ username: username , password: password })
                .error(function(err) {
                    console.log(err);
                    return reject({
                        err : err,
                        extra : 'User Login'
                    });
                })
                .end()
                .io('/r/project/create')
                .error(function(err) {
                    console.log(err);
                    return reject({
                        err : err,
                        extra : 'Project Create'
                    });
                })
                .end(function(res) {
                    project = res.get('project').project;
                    return { project: project };
                })
                .io('/r/project/execute/code')
                .data({ code: self.code, echooff : true })
                .routputs(self.outputVars)
                .error(function(err) {
                    console.log(err);
                    return reject({
                        err : err,
                        extra : 'Execute Code'
                    });
                })
                .end(function(res) {
                    var exec = res.get('execution').execution;
                    console.log('AuthProjectExecuteCode: R code execution completed, ' +
                        'rProjectExecution=' + exec);
                    /*
                     * Retrieve script execution results.
                     */
                    var rconsole = res.get('console');
                    console.log(rconsole);
                    var plots = res.get('results');
                    console.log(plots);
                    var files = res.get('artifacts');
                    console.log(files);
                    var objects = res.workspace(); // --or-- res.get('workspace').objects;
                    console.log(objects);

                    // Remove senstive code
                    var cleancode = self.code.replace(/#sensitive([\s\S]*?)#sensitive/g, '');

                    return resolve({
                        success : true,
                        execution : exec,
                        console : rconsole,
                        plots : plots,
                        files : files,
                        objects : objects,
                        datasetkey : self.datasetkey,
                        modelkey : self.modelkey,
                        code: cleancode
                    });
                })
                .ensure(function() {
                    ruser.release([project]);
                });
        });

    };

    if (this instanceof RCodeGenerator) {
        return this.RCodeGenerator;
    } else {
        return new RCodeGenerator();
    }
}

module.exports = RCodeGenerator;