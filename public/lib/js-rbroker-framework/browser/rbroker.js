/*!
 * `rbroker` JavaScript Client Library v7.4.0
 * http://deployr.revolutionanalytics.com/documents/dev/rbroker-jsdoc
 *
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 * Released under the Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Includes:
 *   - superagent: https://github.com/visionmedia/superagent
 *   - ws: https://github.com/einaros/ws
 *   - D.js: http://malko.github.io/D.js
 *   - yui-lang.js: https://github.com/yui/yui3 (DeployR port)
 *
 * superagent
 *
 * Copyright (c) 2014-2015 TJ Holowaychuk <tj@vision-media.ca>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ws
 *
 * Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * D
 *
 * Copyright (C) 2013 Jonathan Gotti <jgotti at jgotti dot net>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * selfish
 *
 * Copyright 2011 Irakli Gozalishvili. All rights reserved
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * yui-lang
 *
 * The lang component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, 
 * with or without modification, are permitted provided that the 
 * following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. Redistributions
 * in binary form must reproduce the above copyright notice, this list of
 * conditions and  the following disclaimer in the documentation and/or 
 * other materials provided with the distribution.
 * 
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors 
 * may be used to endorse or promote products derived from this software 
 * without specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT, 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Date: 2015-07-23
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.rbroker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var deployr              = require('deployr'),
    DiscreteTask         = require('./lib/task/discreate-task'),
    PooledTask           = require('./lib/task/pooled-task'),
    BackgroundTask       = require('./lib/task/background-task'),
    DiscreteTaskBroker   = require('./lib/engine/discrete-task-broker'),
    PooledTaskBroker     = require('./lib/engine/pooled-task-broker'),
    BackgroundTaskBroker = require('./lib/engine/background-task-broker');    

// -- expose `deployr` into the global namespace for browser convenience --
if (typeof window !== 'undefined' && !window.deployr) {
    window.deployr = deployr;
}

/**
 * The `rbroker` global namespace object. This is the public interface for the
 * DeployR `RBroker`. It is used as a factory to simplify the creation of new
 * instances of:
 *
 * - DiscreteTaskBroker
 * - PooledTaskBroker
 * - BackgroundTaskBroker
 * - DiscreteTask
 * - PooledTask
 * - BackgroundTask
 *
 * @module rbroker
 * @for rbroker
 */
module.exports = {
    /**
     * Expose `deployr` via the `rbroker` for convenience.     
     *
     * @property deployr
     * @static
     * @api public
     */     
    deployr: deployr,

   /**
    * Defines the factory for creating a DeployR-specific encoded R object to be 
    * sent as input parameters to an R script.
    *
    * Example:
    * ```
    *    var rinput = rbroker.RInput.logical('logical_name', true);
    *    var rinput = rbroker.RInput.numeric('numeric_name', 10.5);
    *    var rinput = rboker.RInput.integer('integer_name', 5);
    *    var rinput = rboker.RInput.character('character_name', 'Hello');
    *    // ect...
    * ```
    * @property RInput
    * @static
    * @api public
    */
    RInput: deployr.RInput,

    /**
     * Create an instance of an `DiscreteTaskBroker` to manage the execution of
     * a `DiscreteTask`.
     *
     * @method discreteTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `DiscreteTaskBroker`.
     * @api public
     */
    discreteTaskBroker: function(config) {
        return DiscreteTaskBroker.new(config);
    },

    /**
     * Create an instance of an `PooledTaskBroker` to manage the execution of
     * a `PooledTask`.
     *
     * @method pooledTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `PooledTaskBroker`.
     * @api public
     */
    pooledTaskBroker: function(config) {
        return PooledTaskBroker.new(config);
    },

    /**
     * Create an instance of an `BackgroundTaskBroker` to manage the execution of
     * a `BackgroundTask`.
     *
     * @method backgroundTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `BackgroundTaskBroker`.
     * @api public
     */
    backgroundTaskBroker: function(config) {
        return BackgroundTaskBroker.new(config);
    },

    /**
     * Create an instance of a `DiscreteTask` for an analytics Web service based
     * on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rtask = rbroker.discreteTask({
     *       filename: 'regression',
     *       directory: 'demo',
     *       author: 'george',
     *       version: version
     *       // Additional Discrete Task Options...
     *    });
     *    ```
     *
     * 2. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.discreteTask( {
     *         externalsource: regressionURL
     *         // Additional Discrete Task Options...
     *    });
     *    ```
     *
     * @method discreteTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `DiscreteTask`.
     * @api public
     */
    discreteTask: function(config) {
        return DiscreteTask.new(config);
    },

    /**
     * Create an instance of a `PooledTask` for an analytics Web service based
     * on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rtask = rbroker.pooledTask({
     *       filename: 'regression',
     *       directory: 'demo',
     *       author: 'george',
     *       version: version
     *       // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * 2. Arbitrary block of R code
     *
     *    ```
     *    var rtask = rbroker.pooledTask({
     *         code: codeBlock
     *         // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.pooledTask( {
     *         externalsource: regressionURL
     *         // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * @method pooledTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `PooledTask`.
     * @api public
     */
    pooledTask: function(config) {
        return PooledTask.new(config);
    },

    /**
     *  Create an instance of a `BackgroundTask` for an analytics Web service
     * based on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rTask = rbroker.backgroundTask({
     *       name: 'Sample Task',
     *       descr: 'Sample description',
     *       rscriptname: 'regression',
     *       rscriptdirectory: 'demo',
     *       rscriptauthor: 'george',
     *       rscriptversion: version
     *       // Additional Background Task Options...
     *    });
     *    ```
     *
     * 2. Arbitrary block of R code
     *
     *    ```
     *    var rtask = rbroker.backgroundTask({
     *         name: 'Sample Task',
     *       descr: 'Sample description',
     *         code: codeBlock
     *         // Additional Background Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.backgroundTask( {
     *         name: 'Sample Task',
     *       descr: 'Sample description',
     *         externalsource: regressionURL
     *         // Additional Background Task Options...
     *    });
     *    ```
     *
     * @method backgroundTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of an `BackgroundTask`.
     * @api public
     */
    backgroundTask: function(config) {
        return BackgroundTask.new(config);
    }
};

},{"./lib/engine/background-task-broker":2,"./lib/engine/discrete-task-broker":3,"./lib/engine/pooled-task-broker":4,"./lib/task/background-task":8,"./lib/task/discreate-task":9,"./lib/task/pooled-task":10,"deployr":21}],2:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var merge                = require('merge'),    
    RBrokerEngine        = require('./rbroker-engine'),
    BackgroundTaskWorker = require('../worker/background-task-worker');

/**
 * The Background Task Runtime acquires DeployR grid resources per `RTask` 
 * based on the server-side management of asynchronous grid resources. 
 *
 * @module brackground-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({  
  /**
   * The Background Task Runtime acquires DeployR grid resources per `RTask` 
   * based on the server-side management of asynchronous grid resources. 
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
   */
  initialize: function (config) {
    /*
     * This limit is set simply to ensure the BackgroundTaskBroker does not 
     * swamp the server which too many concurrent HTTP requests when submitting 
     * RTask. The real queueing of RTask is handled by the server, this broker 
     * simply pushed the RTask into the server-managed queue.
     */
    var PARALLEL_TASK_LIMIT = 10;

    RBrokerEngine.initialize.call(this, merge(config, {
      maxConcurrentTaskLimit: PARALLEL_TASK_LIMIT
    }));    

    // Initialize the resourceTokenPool with Integer based resourceTokens.
    for(var i = 0; i < this.parallelTaskLimit; i++) {
      this.resourceTokenPool.offer(i);
    }
  
    this.ruser = this.validateEndpoint().io('/r/user/login')
      .data(config.credentials)
      .ctx(this)      
      .end(function(res) { this.emit('ready'); });
  }, 

  /**
   * Not supported. Support for `refresh` is only available on the 
   * `PooledTaskBroker` runtime.
   *
   * @method refresh
   * @override
   * @api public   
   */
  refresh: function (config) {
    throw new Error('BackgroundTaskBroker refresh not supported.');
  },

  /**
   * Release all client-side and server-side resources maintained by or on 
   * behalf of an instance of `RBroker`.
   *
   * @method shutdown
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public
   */ 
  shutdown: function () {
    this.flush();

    return this.ruser.release();    
  },  

  /**
   * @override
   * @api private
   */
  createWorker: function (task) {
    return BackgroundTaskWorker.new(task, this.ruser);
  }
});

},{"../worker/background-task-worker":13,"./rbroker-engine":5,"merge":41}],3:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var D                  = require('d.js'),
    RBrokerEngine      = require('./rbroker-engine'),
    DiscreteTaskWorker = require('../worker/discrete-task-worker');

/**
 * The Discrete Task Runtime acquires DeployR grid resources per `RTask` 
 * on-demand.
 *
 * @module discrete-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({
  /**
   * The Discrete Task Runtime acquires DeployR grid resources per `RTask` 
   * on-demand.
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
   */   
   initialize: function (config) {
      RBrokerEngine.initialize.call(this, config);

      // Initialize the resourceTokenPool with Integer based resourceTokens.
      for (var i = 0; i < this.parallelTaskLimit; i++) {
         this.resourceTokenPool.offer(i);
      }

      if (config.credentials) {
         this.ruser = this.validateEndpoint().io('/r/user/login')         
            .data(config.credentials)
            .ctx(this)            
            .end(function(res) { this.emit('ready'); });
      } else {
         this.validateEndpoint(function() {
            this.ruser = null;  
            this.emit('ready');
         });
      }
   },

  /**
   * Not supported. Support for `refresh` is only available on the 
   * `PooledTaskBroker` runtime.
   *
   * @method refresh
   * @override
   * @api public   
   */
   refresh: function (config) {
      throw new Error('DiscreteTaskBroker refresh not supported.');
   },

   /**
    * @Override
    */
   createWorker: function (task) {
      return DiscreteTaskWorker.new(task, this.ruser);
   },

  /**
   * Release all client-side and server-side resources maintained by or on 
   * behalf of an instance of `RBroker`.
   *
   * @method shutdown
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public
   */ 
   shutdown: function () {
      this.flush();

      return this.ruser ? this.ruser.release() : D.promisify(true);
   }   
});
},{"../worker/discrete-task-worker":14,"./rbroker-engine":5,"d.js":19}],4:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var deployr = require('deployr');

var D                = require('d.js'),
    merge            = require('merge'),
    RBrokerEngine    = require('./rbroker-engine'),
    PooledTaskWorker = require('../worker/pooled-task-worker');    

/**
 * The Pooled Task Runtime acquires a dedicated pool of DeployR grid resources 
 * at startup.
 *
 * @module pooled-task-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({  
  /**
   * The Pooled Task Runtime acquires a dedicated pool of DeployR grid resources 
   * at startup.
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
  */
  initialize: function (config) {
    RBrokerEngine.initialize.call(this, config);  

    if (!config.credentials) {
      throw new Error('Broker failed to initialize, user credentials required.');
    }

    var self     = this,
        poolSize = this.parallelTaskLimit,
        pool     = merge({ poolsize: poolSize }, config.pool || {});

    /*
     * Prevents authenticated HTTP session from timing out due to inactivity to 
     * ensure pool of RProject remain live and available to PooledTaskBroker.
     */
    this.httpKeepAlive = {
      id: null,
      PING_INTERVAL: 60000,

      start: function(ruser) {
        this.stop();
        this.id = setInterval(function() { 
          deployr.io('/r/user/about').share(ruser.getCookies()).end();
        }, this.PING_INTERVAL);
      },

      stop: function() {
        clearInterval(this.id);
      }
    };    

    /*
     * Initialize the resourceTokenPool with RProject.
     */
    function load(res) {
      var projects = res.get('projects');
      
      if (projects.length > 0) {
        // inform caller of any `Grid Notification` errors usch as:
        // 'Concurrent authenticated project limit (10) reached for user XYZ.'
        // These 'errors' are more like warnings than runtime throwable errors.
        var warn = res.get('error');        
        if (warn) { self.emit('warning', warn); }

        projects.forEach(function(project) {
          self.resourceTokenPool.offer(project.project);
        });

        self.parallelTaskLimit = self.resourceTokenPool.size();
        self.httpKeepAlive.start(self.ruser);                      
        self.emit('ready');
      } else { // No projects were created (projects.length == 0)
        self.emit('error', res.get('error'));
      }
    }
   
    //
    // Validate DeployR server `endpoint` and authenticate.
    //
    this.ruser = this.validateEndpoint().io('/r/user/login')
      .data(config.credentials)
      .ctx(this)
      .end(function() {
        // 
        // Build the project pool.
        //        
        if (config.releaseGridResources) {
          this.ruser.io('/r/user/release')
             .end()
             .io('/r/project/pool')
             .data(pool)
             .end(load);
        } else {
          this.ruser.io('/r/project/pool').data(pool).end(load);             
        }  
      });
  }, 

  /**
   * Refresh the configuration for `PooledTaskRBroker`.
   *
   * A refresh causes all workspace objects and directory files in the 
   * underlying R sessions within the pool to be cleared before new workspace 
   * objects and/or directory files are loaded per the new config options.
   *
   * Only an idle RBroker instance can be refreshed.
   *
   * @method refresh
   * @param {Object} Startup options for a `PooledTaskRBroker`.
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public   
   */
  refresh: function (config) {
    var calls = [], 
        data  = {},
        ruser = this.ruser;

    if(!this.isIdle()) {
      //var defer = when.defer();
      //defer.reject(new Error('RBroker is not idle,  refresh not permitted.'));
      //return defer.promise;
      return D.rejected(new Error('RBroker is not idle, refresh not permitted.'));
    }

    // assert only the proper parameters are on the call 
    config = config || {};
    data = {
      code: '# Refresh project on PooledTaskBroker.',
      preloadfilename: config.preloadfilename,
      preloaddirectory: config.preloaddirectory,
      preloadfileauthor: config.preloadfileauthor,
      preloadfileversion: config.preloadfileversion
    };    

    // exe will fulfill only once all the inputs have fulfilled     
    this.resourceTokenPool.q.forEach(function(project) {
      calls.push(
        deployr.io('/r/project/recycle')
        .share(ruser.getCookies())
        .delay()
        .data( { project: project })
        .end()
        .io('/r/project/execute/code')
        .share(ruser.getCookies())
        .delay()
        .data(merge(data, { project: project }))
        .end() );
    });

    // execute a series of sequentially chained tasks in sequence batches 
    // without overlap. Works in conjunction with .delay() + .end() or if no
    // .end() is used
    return deployr.pipeline(calls);      
  },

  /**
   * Release all client-side and server-side resources maintained by or on 
   * behalf of an instance of `RBroker`.
   *
   * @method shutdown
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public
   */   
  shutdown: function () {
    var projects = this.resourceTokenPool.q.slice();

    this.resourceTokenPool.q = [];
    this.httpKeepAlive.stop();
    this.flush();      

    return this.ruser.release(projects);
  },

  /**
   * @override
   * @api private
   */
  createWorker: function (task) {
    return PooledTaskWorker.new(task, this.ruser);
  }  
});

},{"../worker/pooled-task-worker":15,"./rbroker-engine":5,"d.js":19,"deployr":21,"merge":41}],5:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var deployr             = require('deployr'),
    merge               = require('merge'),
    Base                = require('selfish').Base,
    EventEmitter        = require('deployr/lib/emitter'),
    RTaskToken          = require('../rtask-token'),
    RTaskQueue          = require('../util/rtask-queue'),
    MAX_TASK_QUEUE_SIZE = 999;

/**
 * Represents a high-level programming model for building DeployR-enabled 
 * client applications. By using RBroker an application developer can focus 
 * entirely on integrating R Analytics, while offloading the complexity of 
 * managing client-side API task queues and server-side R session lifecycles.
 *
 * The basic programming model for working with RBroker is as follows:
 *
 * 1. Decide if the R Analytics tasks for your application should execute as:
 *    - Discrete tasks: authentication optional, grid resources allocated at 
 *      runtime, results returned immediately, no persistence. Good for 
 *      prototyping and public facing production deployments.
 *    - Pooled tasks: authentication required, grid resources pre-allocated, 
 *      results returned immediately, optional persistence to repository. Good 
 *      for enterprise production deployments, consistent runtime, 
 *      high-throughput environments.
 *    - Background tasks: authentication required, grid resources allocated at 
 *      runtime, results persisted for later retrieval. Good for periodic, 
 *      scheduled or batch processing.
 * 2. Use the factories defined in rbroker to create an appropriate instance of 
 *    `RBroke`r.
 * 3. Define the R Analytics tasks for your application as one or more `RTask`.
 * 4. Submit your `RTask` to `RBroker` for execution.
 * 5. Integrate the results of your `RTask` found within `.complete()`
 *
 * @module rbroker-engine
 * @for rbroker
 */
module.exports = Base.extend(EventEmitter, {

   /**
    * Represents a high-level programming model for building DeployR-enabled
    * client applications.
    *
    * @class 
    * @constructor
    * @param {Object} [options] Configuration options.    
    */
   initialize: function (config) {
      EventEmitter.initialize.call(this);

      var self               = this;
      this.config            = config;
      this.scope             = this.config.ctx || this; // EventEmitter context
      this.engineStarted     = false;
      this.parallelTaskLimit = this.config.maxConcurrentTaskLimit || 1;
      this.pendingLow        = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);
      this.pendingHigh       = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);
      this.resourceTokenPool = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);

      //
      // Configure `deployr` client with supplied runtime settings and catch 
      // all `io` internal errors.
      //      
      deployr.configure( { 
        host: config.host, 
        cors: config.cors,
        logging: config.logging,
        allowSelfSignedSSLCert: config.allowSelfSignedSSLCert,
        events: {
          error: function(api, res) {
            this.emit('error', res);
          }.bind(this)
        }
      });
      
      /**
       * Correlate the running task counter and other runtime statistics.
       *
       * @private
       */
      this.runtime = {
         runningTasks: 0,

         totals: { success: 0, failure: 0 },

         stats: function(res) {
            return {
               maxConcurrency: self.maxConcurrency(),
               totalTasksRun: this.totals.success + this.totals.failure,
               totalTasksRunToSuccess: this.totals.success,
               totalTasksRunToFailure: this.totals.failure,
               totalTimeTasksOnCode: res.result.timeOnCode,
               totalTimeTasksOnServer: res.result.timeOnServer,
               totalTimeTasksOnCall: res.result.timeOnCall,
               task: res.task
            };
         },

         calibrate: function(direction) {
            this.runningTasks = this.runningTasks + direction;

            if (this.runningTasks < 0) {
               this.runningTasks = 0;
            }

            return this.runningTasks;
         }
      };

      // -- emitted by subclasses indicating workers can begin work --
      this.on('ready', function() {
         this.engineStarted = true;

         // Flush the queues to force work.
         for (var i = 0; i < this.parallelTaskLimit; i++) {
            if (!this.isIdle()) {
               this.run();
            } else {
               break;
            }
         }
      });      
   },
   
   /**
    * Test the `/r/server/info` endpoint, expect HTTP 200 othwrise
    *
    * @param {Function} The optional callback
    * @api public    
    */
   validateEndpoint: function(cb) {
      return deployr.io('/r/server/info')
             .ctx(this)
             .timeout(1000 * 10) 
             .end(cb);
   },

   owner: function() {
     return this.ruser;
   },

   /**
    * Launch an `RTaskAppSimulator` simulation. The `RTask` defined by your 
    * simulation will be automatically executed by the current instance of 
    * `RBroker`.
    *
    * Make sure to register your `.complete()`, `.error()`, `.idle()`, and
    * `.progress()` listeners before starting your simulation in order to 
    * receive asynchronous callbacks in your application when `RTask` complete 
    * and/or to receive runtime summary statistics from `RBroker` as the 
    * simulation proceeds.
    *
    * @method simulateApp
    * @param {Object} The Application Simulator that implements the
    * `simulateApp(RBroker)` method.
    * @api public
    */
   simulateApp: function(appSimulator) {
      if (appSimulator) {
         if (typeof appSimulator.simulateApp === 'function') {
            appSimulator.simulateApp(this);
         } else {
            throw new Error('ReferenceError: "simulateApp" is not defined');
         }
      }
   },

   /**
    * Submit an `RTask` for execution under the control of `RBroker`. If 
    * priority is indicated, priority tasks are automatically moved to the front
    * of the queue, ahead of all standard tasks that are already pending 
    * execution by the broker.
    *
    * @method submit   
    * @param {RTask} The `RTask` associated with this submission.
    * @param {Boolean} (optional) Mark this task as having priority.
    * @return {RTaskToken} The handle to an `RTask` live on an `RBroker`.
    * @api public
    */
   submit: function(task, priority) {
      // `worker` is a defred object. It is either currently working or queued 
      // up with an appointment to work in the future once `run()` is called   
      var worker    = this.createWorker(task),
          taskToken = RTaskToken.new(worker);

      if (priority) {
         this.pendingHigh.offer(worker);
      } else {
         this.pendingLow.offer(worker);
      }

      // start the task work      
      this.run();

      return taskToken;
   },

   /**
    * Returns the task execution concurrency levels enforced for this instance 
    * of `RBroker`.
    *
    * @method maxConcurrency
    * @return {Number} The task execution concurrency levels.
    * @api public
    */
   maxConcurrency: function() {
      return this.parallelTaskLimit;
   },

   /**
    * Flushes all pending `RTask` from queues maintained by `RBroker`. Flushing 
    * `RTask` queues ensures that queued tasks will not be executed by 
    * `RBroker`.
    *
    * @method flush
    * @return {Object} Object literal containing `RBroker` status indicating 
    * the number of currently queued and executing `RTask`.
    * @api public
    */
   flush: function() {
      this.pendingHigh.clear();
      this.pendingLow.clear();

      return this.status();
   },
   
   /**
    * Indicates if current `RBroker` instance is still connected to the DeployR 
    * server. A connection may be lost for a number of reasons, for example, due 
    * to a droppeed network connection between client and server or if the 
    * DeployR server itself goes down.
    *
    * @method isConnected
    * @return {Promise} A promise with a `Boolean` value connection status.    
    * @api public
    */
   isConnected: function() {
      var test = this.ruser ? this.ruser.io('/r/user/about') :
                   deployr.io('/r/server/info')

      //
      // (authenticated | anonymous) checks
      // authenticated  - Test connection to authenticated HTTP session
      // anonymous - Test the that the server is up.
      // 
      return test
                .global(false) // supress global error events for this `io`
                .promise()
                .success(function() {
                  return true; 
                })
                .error(function() {                
                  return false;
                });
   },

   /**
    * Returns status indicating current `RTask` activity on `RBroker`.
    *
    *
    * @method status
    * @return {Object} Object literal containing `RBroker` status indicating the 
    * number of currently queued and executing `RTask`.
    * @api public
    */
   status: function() {
      // Pending tasks include all tasks on high and low priority queues.
      var pending  = this.pendingHigh.size() + this.pendingLow.size(),
         executing = this.parallelTaskLimit - this.runtime.runningTasks,
         idle      = this.isIdle();

      return {
         pending: pending,
         executing: executing,
         idle: idle,
         toString: function() {
            return '\nRBrokerStatus: [ pending = "' + pending + '" ] ' +
               '[ executing = "' + executing + '" ] ' +
               '[ idle = "' + idle + '" ]\n';
         }
      };
   },

   /**
    * Used to determine if an `RBroker` instance is idle which can be 
    * particularly useful ahead of calls to `shutdown()`. Another options is to
    * bind a listener to the `.isIdle()` method.
    * 
    * @method isIdle
    * @return {Boolean} If the `RBroker` instance is idle.
    * @api public
    */
   isIdle: function() {
      return (this.runtime.runningTasks === 0 &&
         this.pendingLow.isEmpty() && this.pendingHigh.isEmpty());
   },

   /**
    * An initialization lifecycle listener fired during construction. 
    *
    * @method error
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   ready: function(fn) {
      this.on('ready', fn);

      return this;
   },      

   /**
    * A failure listener for all tasks submitted on behalf of `this` `RBroker`.
    *
    * @method error
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   error: function(fn) {
      this.on('error', fn);

      return this;
   },

   /**
    * A notification listener indicating warnings about dubious runtime behavior
    * submitted on behalf of `this` `RBroker`.
    *
    * @method warning
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   warning: function(fn) {
      this.on('warning', fn);

      return this;
   },   

   /**
    * A completion listener for all tasks submitted on behalf of `this` 
    * `RBroker`.
    *
    * @method complete
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   complete: function(fn) {
      this.on('complete', fn);

      return this;
   },

   /**
    * A notification listener indicating that `this` `Rbroker` is still active 
    * and there are currently no `RTasks` running or in the wait queue.
    *
    * @method idle
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   idle: function(fn) {
      this.on('idle', fn);

      return this;
   },

   /**
    * A notification listener for `RBroker` runtime statistics of a `RTask`.
    *
    * @method progress
    * @param {Function} The callback function.
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   progress: function(fn) {
      this.on('progress', fn);

      return this;
   },

   /**
    * A notification listener for `RBroker` runtime statistics of a `RTask`.
    *
    * @method progress
    * @param {Function} The callback function.
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   start: function(fn) {
      this.on('start', fn);

      return this;
   },   

   /**
    * Do the task work.
    *
    * @api private
    */
   run: function() {
      var self = this, nextWorker, resourceToken;

      if (this.engineStarted &&
         !this.resourceTokenPool.isEmpty() &&
         (!this.pendingLow.isEmpty() || !this.pendingHigh.isEmpty())) {

         nextWorker = this.pendingHigh.take() || this.pendingLow.take();

         this.runtime.calibrate(+1);

         this.emit('start', nextWorker.task);
         
         nextWorker.work(this.resourceTokenPool.take()) // start working.... 
             .then(function(res) {
                 self.runtime.totals.success++;
                 self.emit('progress', self.runtime.stats(res));
                 self.emit('complete', res.task, res.result);

                 // -- individual RTask notifications --                 
                 this.resolve(res);
             }.bind(nextWorker), function(err) {
                 var res = {
                     task: this.task,
                     result: { // task error result
                         id: null,
                         type: this.task.type,
                         success: false,
                         timeOnCode: 0,
                         timeOnServer: 0,
                         timeOnCall: 0,
                         failure: err
                     }
                 };

                 self.runtime.totals.failure++;
                 self.emit('progress', self.runtime.stats(res));                  
                 self.emit('error', merge(err, { task: this.task }));
                 self.emit('complete', res.task, res.result);
                 
                 // -- individual RTask notifications --
                 this.reject(merge(err, { task: this.task }));
             }.bind(nextWorker))
             .ensure(function(v) { // finally
                 self.runtime.calibrate(-1);
                 self.resourceTokenPool.offer(this.resourceToken);
                 self.run();

                 // -- notify all tasks submitted have came to completion --           
                 if (self.isIdle()) { self.emit('idle'); }
             }.bind(nextWorker));
      }
   }
});
},{"../rtask-token":6,"../util/rtask-queue":12,"deployr":21,"deployr/lib/emitter":23,"merge":41,"selfish":42}],6:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Base = require('selfish').Base;

/**
 * Represents a handle to an `RTask` live on an `RBroker`.
 *
 * @module rtask-token
 * @for rbroker
 */
module.exports = Base.extend({

    /**
     * Represents a handle to an `RTask` live on an `RBroker`.
     *
     * @class 
     * @constructor
     * @param {RTask} The task worker.
     */
    initialize: function initialize(worker) {
        this.worker    = worker;
        this.cancelled = false;
    },

    /**    
     * Terminates `this` running task.
     *
     * @method cancel
     * @param {Boolean} Permission to interrupt task if it is running.
     * @return {RTaskToken} for chaining.
     * @api public
     */
    cancel: function(interrupt) {
        // RTask completed (resolved|rejected), can not be cancelled.
        this.cancelled = this.worker.terminate(interrupt);
        return this.cancelled;
    },

    /**    
     * Returns the `RTask` associated with this `RTaskToken`.
     *
     * @method getTask
     * @return {RTaskToken} for chaining.
     * @api public
     */
    getTask: function() {
        return this.worker.task;
    },

    /**    
     * Returns `true` if this task completed. Completion may be due to normal 
     * termination, an exception, or cancellation -- in all of these cases, 
     * this method will return `true`.
     *
     * @deprecated  
     * @method isDone
     * @return {Boolean} If `this` task is completed.
     * @api public
     */
    isDone: function() {
        return !this.isPending();
    },

    /**    
     * Returns `false` if this task completed. Completion may be due to normal 
     * termination, an exception, or cancellation -- in all of these cases, 
     * this method will return `true`.
     *
     * @method isPending
     * @return {Boolean} `true` if this task has not yet been completed.
     * @api public
     */
    isPending: function() {
        return this.worker.isPending();
    },

    /**    
     * Returns `true` if this task was cancelled before it completed normally.
     *
     * @method isCancelled
     * @return {Boolean} `true` if this task was cancelled before it completed.
     * @api public
     */
    isCancelled: function() {
        return this.cancelled;
    },

    /**
     * The `.promise()` method returns a dynamically generated Promise that is 
     * resolved once this task has completed.
     *   
     * @method promise
     * @return {Promise} A promise wrapping the resolution of either "resolve" 
     * or "reject" callback.
     * @api public
     */
    promise: function() {
        return this.worker.defer.promise;
    }
});
},{"selfish":42}],7:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base     = require('selfish').Base,
    Enum     = require('enum'),
    taskEnum = new Enum(['DISCRETE', 'POOLED', 'BACKGROUND'], 'RTaskType');

/**
 * Defines the currently supported set of `RTask`.
 *
 * @module rtask-type
 * @for rbroker
 */
module.exports = Base.extend({
    /**
     * Discrete task.
     */
    DISCRETE: taskEnum.DISCRETE,

    /**
     * Pooled task.
     */
    POOLED: taskEnum.POOLED,

    /**
     * Background task.
     */
    BACKGROUND: taskEnum.BACKGROUND
});
},{"enum":39,"selfish":42}],8:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.BACKGROUND);
    },

    toString: function() {
        return 'BackgroundTask: ' + RTask.toString.call(this);
    }
});
},{"../rtask-type":7,"./rtask":11,"selfish":42}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.DISCRETE);
    },

    toString: function() {
        return 'DiscreteTask: ' + RTask.toString.call(this);
    }
});

},{"../rtask-type":7,"./rtask":11,"selfish":42}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.POOLED);
    },        

    toString: function() {
        return 'PooledTask: ' + RTask.toString.call(this);
    }
});
},{"../rtask-type":7,"./rtask":11,"selfish":42}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base  = require('selfish').Base,
    merge = require('merge');

/**
 * Represents any R Analytics task for execution on an `RBroker`.
 *
 * @module rtask
 * @for rbroker
 */
module.exports = Base.extend({

    /**
     * Represents any R Analytics task for execution on an `RBroker`.
     *
     * @class
     * @constructs
     * @param {Object} props - The task properties object hash.
     */
    initialize: function initialize(props, type) {
        this.type = type;
        this.token = null;

        props = props || {};

        for (var index in props) {
            Object.defineProperty(this, index, {
                value: props[index],
                enumerable: true
            });
        }
    },

    /**
     * A clone of the `RTask` DeployR API properties as a flat object.
     *
     * @returns {Object} A clone of the `RTask` properties.
     */
    serialize: function() {
        var task = {};

        Object.keys(this).filter(function(key) { // blacklist   
                return (['type', 'token'].indexOf(key) === -1);
            })
            .forEach(function(key) {
                task[key] = this[key];
            }.bind(this));

        return merge(true, task);
    },

    toString: function() {
        var out  = '',
            keys = Object.keys(this);

        for (var o in keys) {
            out += ' [ ' + keys[o] + ' = "' + this[keys[o]] + '" ]';
        }

        return out;
    }
});
},{"merge":41,"selfish":42}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
var Base = require('selfish').Base;

var RTaskQueue = Base.extend({
   initialize: function (capacity) {
      this.capacity = capacity;
      this.q        = [];
   }, 

   /**
    * Inserts the specified element at the tail of this queue if it is possible 
    * to do so immediately without exceeding the queue's capacity, returning 
    * ```true``` upon success and ```false``` if this queue is full.
    */
   offer: function (rtask) {
      var accepting = this.size() < this.capacity;

      if (accepting) {        
        this.q.push(rtask);      
      }

      return accepting; // True if added False otherwise
   },

   /**
    * Retrieves and removes the head of this queue.
    */
   take: function () {
    return this.q.shift();
   },

   /**
    * Retrieves, but does not remove, the head of this queue, or returns `
    * ``null`` if this queue is empty.
    */
   peek: function () {
    return this.q[0];
   },

   /**
    * Returns the number of elements in this queue.
    */
   size: function () {
      return this.q.length;
   },

   /**
    * Returns ```true``` if this collection contains no elements.
    * This implementation returns size() === 0.
    */
   isEmpty: function () {
      return this.size() === 0;
   },

   clear: function () {
      this.q.length = 0;
   },

   iter: function (fn) {
      this.q.forEach(fn);
   }
});

module.exports = RTaskQueue;
},{"selfish":42}],13:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base          = require('selfish').Base,
    deployr       = require('deployr'),
    D             = require('d.js'),    
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

    initialize: function (task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
        this.job   = null;
    },

    work: function(resourceToken) {
        var self      = this,                        
            startTime = new Date().getTime(),
            data      = this.task.serialize(),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [];

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;        

        return deployr.io('/r/job/submit')
            .share(this.ruser.getCookies())
            .data(data)
            .global(false) // supress global error events for this `io`
            .rinputs(rinputs)
            .routputs(routputs)
            .promise()
            .then(function(res) {
                var about = res.get('job');

                self.job = about.job; // job-id     

                // resolve the promise which kicks-off the callback
                return {
                    task: self.task,
                    result: {
                        id: about.job,
                        type: RTaskType.BACKGROUND,
                        timeOnCode: 0,
                        timeOnServer: 0,
                        timeOnCall: (new Date().getTime() - startTime),
                        success: true,
                        failure: null
                    }
                };
            });
    },

    terminate: function(interrupt) {
        if (interrupt && this.job) {
          this.ruser.io('/r/job/cancel')
            .data({ job: this.job })
            .end();

            return true;
        } else {
            //
            // RTask still pending confirmation from RBroker if there is no
            // `resourceToken` hence can not be interrupted [or] the task is
            // being worked on and a forced `interrupt` was not given
            //
            return false;
        }
    }
});

},{"../rtask-type":7,"./rbroker-worker":16,"d.js":19,"deployr":21,"selfish":42}],14:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base          = require('selfish').Base,
    deployr       = require('deployr'),
    D             = require('d.js'),    
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

    initialize: function(task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
        this.io    = null; // `io` request for 'termination' if called
    },

    work: function(resourceToken) {
        var task      = this.task,
            startTime = new Date().getTime(),
            data      = this.task.serialize(),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [];

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;

        // save `io` request for 'termination' purposes
        this.io = deployr.io('/r/repository/script/execute')
            // make parallel http req. using the same session
            .share(this.ruser ? this.ruser.getCookies() : null)
            .data(data)
            .rinputs(rinputs)
            .routputs(routputs)            
            .global(false); // supress global error events for this `io`

        // send the script execution request and return a promise
        return this.io.promise()
            .then(function(res) {
                res = res.deployr.response;

                var timeOnServer     = res.execution.timeTotal,
                    id               = res.project.project,
                    generatedConsole = res.execution.console,
                    generatedPlots   = res.execution.results,
                    generatedFiles   = res.execution.artifacts,
                    generatedObjects = res.workspace.objects,
                    storedFiles      = res.repository.files;

                // resolve the promise which kicks-off the callback values
                return {
                    task: task,
                    result: {
                        id: id,
                        type: RTaskType.DISCRETE,
                        success: true,
                        timeOnCode: res.execution.timeCode,
                        timeOnServer: timeOnServer,
                        timeOnCall: (new Date().getTime() - startTime),
                        failure: null,
                        interrupted: false,
                        generatedConsole: generatedConsole,
                        generatedPlots: generatedPlots,
                        generatedFiles: generatedFiles,
                        generatedObjects: generatedObjects,
                        storedFiles: storedFiles
                    }
                };
            });
    },

    terminate: function(interrupt) {
        //
        // @NOTE:
        // There is no way to obtain DeployR reference, such as a projectId, for
        // an stateless execution in-progress, so aborting the current RTask 
        // operation is not possible. At best we can do here is free-up the 
        // client connection and abort.
        //        
        if (interrupt && this.io && this.isPending()) {
            this.io.abort();
            this.io.destroy();
            this.io = null;

            return true;
        } else {
            //
            // RTask still pending confirmation from RBroker if there is no
            // `resourceToken` hence can not be interrupted [or] the task is
            // being worked on and a forced `interrupt` was not given
            //
            return false;
        }
    }
});

},{"../rtask-type":7,"./rbroker-worker":16,"d.js":19,"deployr":21,"selfish":42}],15:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base          = require('selfish').Base,
    D             = require('d.js'),
    merge         = require('merge'),
    deployr       = require('deployr'),
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

    initialize: function (task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
    },

    work: function(resourceToken) {
        var task = this.task, 
            data = merge({
                project: resourceToken,
                phantom: true
            }, this.task.serialize()),
            api       = '/r/project/execute/' + (data.code ? 'code' : 'script'),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [],
            startTime = new Date().getTime();

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;

        return deployr.io(api)
            .share(this.ruser.getCookies())
            .data(data)
            .rinputs(rinputs)
            .routputs(routputs)
            .global(false) // supress global error events for this `io`            
            .promise()
            .then(function(res) {
                res = res.deployr.response;

                var generatedConsole = res.execution.console,
                    generatedPlots   = res.execution.results,
                    generatedFiles   = res.execution.artifacts,
                    generatedObjects = res.workspace.objects,
                    storedFiles      = res.repository.files;
              
                // resolve the promise which kicks-off the callback
                return {
                    task: task,
                    result: {
                        id: res.project.project,
                        type: RTaskType.POOLED,
                        success: true,
                        timeOnCode: res.execution.timeCode,
                        timeOnServer: res.execution.timeTotal,
                        timeOnCall: (new Date().getTime() - startTime),
                        failure: null,
                        interrupted: false,
                        generatedConsole: generatedConsole,
                        generatedPlots: generatedPlots,
                        generatedFiles: generatedFiles,
                        generatedObjects: generatedObjects,
                        storedFiles: storedFiles
                    }
                };
            })
    },

    terminate: function(interrupt) {
        // work has started and a forced interrupt given
        if (interrupt && this.resourceToken && this.isPending()) {
            this.ruser.io('/r/project/execute/interrupt')
                .data({ project: this.resourceToken })
                .end();  
            return true;          
        } else {
            //
            // RTask still pending confirmation from RBroker if there is no
            // `resourceToken` hence can not be interrupted [or] the task is
            // being worked on and a forced `interrupt` was not given
            //
            return false;
        }
    }

});

},{"../rtask-type":7,"./rbroker-worker":16,"d.js":19,"deployr":21,"merge":41,"selfish":42}],16:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('selfish').Base,
    D    = require('d.js');

module.exports = Base.extend({
    initialize: function initialize(task) {
        this.task  = task;
        this.defer = D();
    },

    work: function(resourceToken) { /* override */ },

    terminate: function(interrupt) { /* override */ },

    isPending: function() {
        return this.defer.promise.isPending();
    },

    resolve: function(result) {
        this.defer.resolve(result);
    },

    reject: function(err) {
        this.defer.reject(err);
    }
});

},{"d.js":19,"selfish":42}],17:[function(require,module,exports){

},{}],18:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],19:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.6.0
* @changelog
*           - 2013-12-07 - last promise 1.1 specs test passings (thx to wizardwerdna)
 *                       - reduce promises footprint by unscoping methods that could be
*           - 2013-10-23 - make it workig across node-webkit contexts
*           - 2013-07-03 - bug correction in promixify method (thx to adrien gibrat )
*           - 2013-06-22 - bug correction in nodeCapsule method
*           - 2013-06-17 - remove unnecessary Array.indexOf method dependency
*           - 2013-04-18 - add try/catch block around nodeCapsuled methods
*           - 2013-04-13 - check promises/A+ conformity
*                        - make some minication optimisations
*           - 2013-03-26 - add resolved, fulfilled and rejected methods
*           - 2013-03-21 - browser/node compatible
*                        - new method nodeCapsule
*                        - simpler promixify with full api support
*           - 2013-01-25 - add rethrow method
*                        - nextTick optimisation -> add support for process.nextTick + MessageChannel where available
*           - 2012-12-28 - add apply method to promise
*           - 2012-12-20 - add alwaysAsync parameters and property for default setting
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return !!(status === 0); }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {function} fn
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(fn.apply(null)); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						if (! (i in args) ) { //@todo check this is still required as promises can't be resolve more than once
							args[i] = returnPromises ? promises[i] : v;
							(--c) || d.resolve(args);
						}
					}
					, function(e){
						if(! (i in args) ){
							if( ! returnPromises ){
								d.reject(e);
							} else {
								args[i] = promises[i];
								(--c) || d.resolve(args);
							}
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	typeof window !== undefStr && (window.D = defer);
	typeof module !== undefStr && module.exports && (module.exports = defer);

})();

}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kLmpzL2xpYi9ELmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIGF0dGVtcHQgb2YgYSBzaW1wbGUgZGVmZXIvcHJvbWlzZSBsaWJyYXJ5IGZvciBtb2JpbGUgZGV2ZWxvcG1lbnRcbiogQGF1dGhvciBKb25hdGhhbiBHb3R0aSA8IGpnb3R0aSBhdCBqZ290dGkgZG90IG5ldD5cbiogQHNpbmNlIDIwMTItMTBcbiogQHZlcnNpb24gMC42LjBcbiogQGNoYW5nZWxvZ1xuKiAgICAgICAgICAgLSAyMDEzLTEyLTA3IC0gbGFzdCBwcm9taXNlIDEuMSBzcGVjcyB0ZXN0IHBhc3NpbmdzICh0aHggdG8gd2l6YXJkd2VyZG5hKVxuICogICAgICAgICAgICAgICAgICAgICAgIC0gcmVkdWNlIHByb21pc2VzIGZvb3RwcmludCBieSB1bnNjb3BpbmcgbWV0aG9kcyB0aGF0IGNvdWxkIGJlXG4qICAgICAgICAgICAtIDIwMTMtMTAtMjMgLSBtYWtlIGl0IHdvcmtpZyBhY3Jvc3Mgbm9kZS13ZWJraXQgY29udGV4dHNcbiogICAgICAgICAgIC0gMjAxMy0wNy0wMyAtIGJ1ZyBjb3JyZWN0aW9uIGluIHByb21peGlmeSBtZXRob2QgKHRoeCB0byBhZHJpZW4gZ2licmF0IClcbiogICAgICAgICAgIC0gMjAxMy0wNi0yMiAtIGJ1ZyBjb3JyZWN0aW9uIGluIG5vZGVDYXBzdWxlIG1ldGhvZFxuKiAgICAgICAgICAgLSAyMDEzLTA2LTE3IC0gcmVtb3ZlIHVubmVjZXNzYXJ5IEFycmF5LmluZGV4T2YgbWV0aG9kIGRlcGVuZGVuY3lcbiogICAgICAgICAgIC0gMjAxMy0wNC0xOCAtIGFkZCB0cnkvY2F0Y2ggYmxvY2sgYXJvdW5kIG5vZGVDYXBzdWxlZCBtZXRob2RzXG4qICAgICAgICAgICAtIDIwMTMtMDQtMTMgLSBjaGVjayBwcm9taXNlcy9BKyBjb25mb3JtaXR5XG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBtYWtlIHNvbWUgbWluaWNhdGlvbiBvcHRpbWlzYXRpb25zXG4qICAgICAgICAgICAtIDIwMTMtMDMtMjYgLSBhZGQgcmVzb2x2ZWQsIGZ1bGZpbGxlZCBhbmQgcmVqZWN0ZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTIxIC0gYnJvd3Nlci9ub2RlIGNvbXBhdGlibGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIG5ldyBtZXRob2Qgbm9kZUNhcHN1bGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIHNpbXBsZXIgcHJvbWl4aWZ5IHdpdGggZnVsbCBhcGkgc3VwcG9ydFxuKiAgICAgICAgICAgLSAyMDEzLTAxLTI1IC0gYWRkIHJldGhyb3cgbWV0aG9kXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXh0VGljayBvcHRpbWlzYXRpb24gLT4gYWRkIHN1cHBvcnQgZm9yIHByb2Nlc3MubmV4dFRpY2sgKyBNZXNzYWdlQ2hhbm5lbCB3aGVyZSBhdmFpbGFibGVcbiogICAgICAgICAgIC0gMjAxMi0xMi0yOCAtIGFkZCBhcHBseSBtZXRob2QgdG8gcHJvbWlzZVxuKiAgICAgICAgICAgLSAyMDEyLTEyLTIwIC0gYWRkIGFsd2F5c0FzeW5jIHBhcmFtZXRlcnMgYW5kIHByb3BlcnR5IGZvciBkZWZhdWx0IHNldHRpbmdcbiovXG4oZnVuY3Rpb24odW5kZWYpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgbmV4dFRpY2tcblx0XHQsIGlzRnVuYyA9IGZ1bmN0aW9uKGYpeyByZXR1cm4gKCB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyApOyB9XG5cdFx0LCBpc0FycmF5ID0gZnVuY3Rpb24oYSl7IHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShhKSA6IChhIGluc3RhbmNlb2YgQXJyYXkpOyB9XG5cdFx0LCBpc09iak9yRnVuYyA9IGZ1bmN0aW9uKG8peyByZXR1cm4gISEobyAmJiAodHlwZW9mIG8pLm1hdGNoKC9mdW5jdGlvbnxvYmplY3QvKSk7IH1cblx0XHQsIGlzTm90VmFsID0gZnVuY3Rpb24odil7IHJldHVybiAodiA9PT0gZmFsc2UgfHwgdiA9PT0gdW5kZWYgfHwgdiA9PT0gbnVsbCk7IH1cblx0XHQsIHNsaWNlID0gZnVuY3Rpb24oYSwgb2Zmc2V0KXsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYSwgb2Zmc2V0KTsgfVxuXHRcdCwgdW5kZWZTdHIgPSAndW5kZWZpbmVkJ1xuXHRcdCwgdEVyciA9IHR5cGVvZiBUeXBlRXJyb3IgPT09IHVuZGVmU3RyID8gRXJyb3IgOiBUeXBlRXJyb3Jcblx0O1xuXHRpZiAoICh0eXBlb2YgcHJvY2VzcyAhPT0gdW5kZWZTdHIpICYmIHByb2Nlc3MubmV4dFRpY2sgKSB7XG5cdFx0bmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IHVuZGVmU3RyICkge1xuXHRcdHZhciBudGlja0NoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSwgcXVldWUgPSBbXTtcblx0XHRudGlja0NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oKXsgcXVldWUubGVuZ3RoICYmIChxdWV1ZS5zaGlmdCgpKSgpOyB9O1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2Ipe1xuXHRcdFx0cXVldWUucHVzaChjYik7XG5cdFx0XHRudGlja0NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXsgc2V0VGltZW91dChjYiwgMCk7IH07XG5cdH1cblx0ZnVuY3Rpb24gcmV0aHJvdyhlKXsgbmV4dFRpY2soZnVuY3Rpb24oKXsgdGhyb3cgZTt9KTsgfVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBkZWZlcnJlZFxuXHQgKiBAcHJvcGVydHkge3Byb21pc2V9IHByb21pc2Vcblx0ICogQG1ldGhvZCByZXNvbHZlXG5cdCAqIEBtZXRob2QgZnVsZmlsbFxuXHQgKiBAbWV0aG9kIHJlamVjdFxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmdWxmaWxsZWRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBwcm9taXNlIHJlc29sdmVkIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmYWlsZWRcblx0ICogQHBhcmFtIHsqfSByZWFzb24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZSBvciByZXRocm93IHRoZSByZWFzb25cblx0ICovXG5cblx0Ly8tLSBkZWZpbmluZyB1bmVuY2xvc2VkIHByb21pc2UgbWV0aG9kcyAtLS8vXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aG91dCBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9zdWNjZXNzKGZ1bGZpbGxlZCl7IHJldHVybiB0aGlzLnRoZW4oZnVsZmlsbGVkLCB1bmRlZik7IH1cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGggb25seSBhIGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vycm9yKGZhaWxlZCl7IHJldHVybiB0aGlzLnRoZW4odW5kZWYsIGZhaWxlZCk7IH1cblxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gYnV0IGZ1bGZpbGxlZCBjYWxsYmFjayB3aWxsIHJlY2VpdmUgbXVsdGlwbGUgcGFyYW1ldGVycyB3aGVuIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gQXJyYXlcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2FwcGx5KGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZC5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYSA6IFthXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGZ1bGZpbGxlZCk7XG5cdFx0XHR9XG5cdFx0XHQsIGZhaWxlZCB8fCB1bmRlZlxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogY2xlYW51cCBtZXRob2Qgd2hpY2ggd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQgcmVnYXJkbGVzcyBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gdGhlIHNhbWUgcHJvbWlzZSB1bnRvdWNoZWRcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZW5zdXJlKGNiKXtcblx0XHRmdW5jdGlvbiBfY2IoKXsgY2IoKTsgfVxuXHRcdHRoaXMudGhlbihfY2IsIF9jYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogdGFrZSBhIHNpbmdsZSBjYWxsYmFjayB3aGljaCB3YWl0IGZvciBhbiBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIuIG90aGVyIHJlc29sdXRpb24gdmFsdWVzIGFyZSBwYXNzZWQgYXMgd2l0aCB0aGUgYXBwbHkvc3ByZWFkIG1ldGhvZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlIHdpdGggZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIGlmIGFueSBhcyBpbiBub2RlIHN0eWxlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLiBSZXN0IG9mIHBhcmFtZXRlcnMgd2lsbCBiZSBhcHBsaWVkIGFzIHdpdGggdGhlIGFwcGx5IG1ldGhvZC5cblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfbm9kaWZ5KGNiKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoY2IpID8gY2IuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEuc3BsaWNlKDAsMCx1bmRlZmluZWQpICYmIGEgOiBbdW5kZWZpbmVkLGFdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogY2IpO1xuXHRcdFx0fVxuXHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0cmV0dXJuIGNiKGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZhaWxlZF0gd2l0aG91dCBwYXJhbWV0ZXIgd2lsbCBvbmx5IHJldGhyb3cgcHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgb2YgdGhlIHByb21pc2UgbGlicmFyeSBvbiBuZXh0IHRpY2tcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcGFzc2VkIGEgZmFpbGVkIG1ldGhvZCB0aGVuIHdpbGwgY2FsbCBmYWlsZWQgb24gcmVqZWN0aW9uIGFuZCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4gaWYgZmFpbGVkIGRpZG4ndFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9yZXRocm93KGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdHVuZGVmXG5cdFx0XHQsIGZhaWxlZCA/IGZ1bmN0aW9uKGUpeyBmYWlsZWQoZSk7IHRocm93IGU7IH0gOiByZXRocm93XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsd2F5c0FzeW5jXSBpZiBzZXQgZm9yY2UgdGhlIGFzeW5jIHJlc29sdXRpb24gZm9yIHRoaXMgcHJvbWlzZSBpbmRlcGVuZGFudGx5IG9mIHRoZSBELmFsd2F5c0FzeW5jIG9wdGlvblxuXHQqIEByZXR1cm5zIHtkZWZlcnJlZH0gZGVmZXJlZCBvYmplY3Qgd2l0aCBwcm9wZXJ0eSAncHJvbWlzZScgYW5kIG1ldGhvZHMgcmVqZWN0LGZ1bGZpbGwscmVzb2x2ZSAoZnVsZmlsbCBiZWluZyBhbiBhbGlhcyBmb3IgcmVzb2x2ZSlcblx0Ki9cblx0dmFyIGRlZmVyID0gZnVuY3Rpb24gKGFsd2F5c0FzeW5jKXtcblx0XHR2YXIgYWx3YXlzQXN5bmNGbiA9ICh1bmRlZiAhPT0gYWx3YXlzQXN5bmMgPyBhbHdheXNBc3luYyA6IGRlZmVyLmFsd2F5c0FzeW5jKSA/IG5leHRUaWNrIDogZnVuY3Rpb24oZm4pe2ZuKCk7fVxuXHRcdFx0LCBzdGF0dXMgPSAwIC8vIC0xIGZhaWxlZCB8IDEgZnVsZmlsbGVkXG5cdFx0XHQsIHBlbmRpbmdzID0gW11cblx0XHRcdCwgdmFsdWVcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGVkZWYgcHJvbWlzZVxuXHRcdFx0ICovXG5cdFx0XHQsIF9wcm9taXNlICA9IHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfGZ1bmN0aW9ufSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHBhcmFtIHtmYWlsZWR8ZnVuY3Rpb259IGZhaWxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdFx0XHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRcdFx0XHRwZW5kaW5ncy5wdXNoKFtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBpc05vdFZhbChmdWxmaWxsZWQpKXtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZShpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZCh2YWx1ZSkgOiAoZGVmZXIub25seUZ1bmNzID8gdmFsdWUgOiBmdWxmaWxsZWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzTm90VmFsKGZhaWxlZCkgfHwgKCghaXNGdW5jKGZhaWxlZCkpICYmIGRlZmVyLm9ubHlGdW5jcykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIGZhaWxlZCApIHtcblx0XHRcdFx0XHRcdFx0XHR0cnl7IGQucmVzb2x2ZShpc0Z1bmMoZmFpbGVkKSA/IGZhaWxlZChlcnIpIDogZmFpbGVkKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTt9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRzdGF0dXMgIT09IDAgJiYgYWx3YXlzQXN5bmNGbihleGVjQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LCBzdWNjZXNzOiBwcm9taXNlX3N1Y2Nlc3NcblxuXHRcdFx0XHQsIGVycm9yOiBwcm9taXNlX2Vycm9yXG5cdFx0XHRcdCwgb3RoZXJ3aXNlOiBwcm9taXNlX2Vycm9yXG5cblx0XHRcdFx0LCBhcHBseTogcHJvbWlzZV9hcHBseVxuXHRcdFx0XHQsIHNwcmVhZDogcHJvbWlzZV9hcHBseVxuXG5cdFx0XHRcdCwgZW5zdXJlOiBwcm9taXNlX2Vuc3VyZVxuXG5cdFx0XHRcdCwgbm9kaWZ5OiBwcm9taXNlX25vZGlmeVxuXG5cdFx0XHRcdCwgcmV0aHJvdzogcHJvbWlzZV9yZXRocm93XG5cblx0XHRcdFx0LCBpc1BlbmRpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAhIShzdGF0dXMgPT09IDApOyB9XG5cblx0XHRcdFx0LCBnZXRTdGF0dXM6IGZ1bmN0aW9uKCl7IHJldHVybiBzdGF0dXM7IH1cblx0XHRcdH1cblx0XHQ7XG5cdFx0X3Byb21pc2UudG9Tb3VyY2UgPSBfcHJvbWlzZS50b1N0cmluZyA9IF9wcm9taXNlLnZhbHVlT2YgPSBmdW5jdGlvbigpe3JldHVybiB2YWx1ZSA9PT0gdW5kZWYgPyB0aGlzIDogdmFsdWU7IH07XG5cblxuXHRcdGZ1bmN0aW9uIGV4ZWNDYWxsYmFja3MoKXtcblx0XHRcdGlmICggc3RhdHVzID09PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2JzID0gcGVuZGluZ3MsIGkgPSAwLCBsID0gY2JzLmxlbmd0aCwgY2JJbmRleCA9IH5zdGF0dXMgPyAwIDogMSwgY2I7XG5cdFx0XHRwZW5kaW5ncyA9IFtdO1xuXHRcdFx0Zm9yKCA7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0KGNiID0gY2JzW2ldW2NiSW5kZXhdKSAmJiBjYih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogZnVsZmlsbCBkZWZlcnJlZCB3aXRoIGdpdmVuIHZhbHVlXG5cdFx0ICogQHBhcmFtIHsqfSB2YWxcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZXNvbHZlKHZhbCl7XG5cdFx0XHR2YXIgZG9uZSA9IGZhbHNlO1xuXHRcdFx0ZnVuY3Rpb24gb25jZShmKXtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdGlmIChkb25lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICggc3RhdHVzICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB0aGVuID0gaXNPYmpPckZ1bmModmFsKSAmJiB2YWwudGhlbjtcblx0XHRcdFx0aWYgKCBpc0Z1bmModGhlbikgKSB7IC8vIG1hbmFnaW5nIGEgcHJvbWlzZVxuXHRcdFx0XHRcdGlmKCB2YWwgPT09IF9wcm9taXNlICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgdEVycihcIlByb21pc2UgY2FuJ3QgcmVzb2x2ZSBpdHNlbGZcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoZW4uY2FsbCh2YWwsIG9uY2UoX3Jlc29sdmUpLCBvbmNlKF9yZWplY3QpKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvbmNlKF9yZWplY3QpKGUpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGFsd2F5c0FzeW5jRm4oZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFsdWUgPSB2YWw7XG5cdFx0XHRcdHN0YXR1cyA9IDE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogcmVqZWN0IGRlZmVycmVkIHdpdGggZ2l2ZW4gcmVhc29uXG5cdFx0ICogQHBhcmFtIHsqfSBFcnJcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZWplY3QoRXJyKXtcblx0XHRcdHN0YXR1cyB8fCBhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRyeXsgdGhyb3coRXJyKTsgfWNhdGNoKGUpeyB2YWx1ZSA9IGU7IH1cblx0XHRcdFx0c3RhdHVzID0gLTE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiAvKipAdHlwZSBkZWZlcnJlZCAqLyB7XG5cdFx0XHRwcm9taXNlOl9wcm9taXNlXG5cdFx0XHQscmVzb2x2ZTpfcmVzb2x2ZVxuXHRcdFx0LGZ1bGZpbGw6X3Jlc29sdmUgLy8gYWxpYXNcblx0XHRcdCxyZWplY3Q6X3JlamVjdFxuXHRcdH07XG5cdH07XG5cblx0ZGVmZXIuZGVmZXJyZWQgPSBkZWZlci5kZWZlciA9IGRlZmVyO1xuXHRkZWZlci5uZXh0VGljayA9IG5leHRUaWNrO1xuXHRkZWZlci5hbHdheXNBc3luYyA9IHRydWU7IC8vIHNldHRpbmcgdGhpcyB3aWxsIGNoYW5nZSBkZWZhdWx0IGJlaGF2aW91ci4gdXNlIGl0IG9ubHkgaWYgbmVjZXNzYXJ5IGFzIGFzeW5jaHJvbmljaXR5IHdpbGwgZm9yY2Ugc29tZSBkZWxheSBiZXR3ZWVuIHlvdXIgcHJvbWlzZSByZXNvbHV0aW9ucyBhbmQgaXMgbm90IGFsd2F5cyB3aGF0IHlvdSB3YW50LlxuXHQvKipcblx0KiBzZXR0aW5nIG9ubHlGdW5jcyB0byBmYWxzZSB3aWxsIGJyZWFrIHByb21pc2VzL0ErIGNvbmZvcm1pdHkgYnkgYWxsb3dpbmcgeW91IHRvIHBhc3Mgbm9uIHVuZGVmaW5lZC9udWxsIHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGxiYWNrc1xuXHQqIGluc3RlYWQgb2YganVzdCBpZ25vcmluZyBhbnkgbm9uIGZ1bmN0aW9uIHBhcmFtZXRlcnMgdG8gdGhlbixzdWNjZXNzLGVycm9yLi4uIGl0IHdpbGwgYWNjZXB0IG5vbiBudWxsfHVuZGVmaW5lZCB2YWx1ZXMuXG5cdCogdGhpcyB3aWxsIGFsbG93IHlvdSBzaG9ydGN1dHMgbGlrZSBwcm9taXNlLnRoZW4oJ3ZhbCcsJ2hhbmRsZWQgZXJyb3InJylcblx0KiB0byBiZSBlcXVpdmFsZW50IG9mIHByb21pc2UudGhlbihmdW5jdGlvbigpeyByZXR1cm4gJ3ZhbCc7fSxmdW5jdGlvbigpeyByZXR1cm4gJ2hhbmRsZWQgZXJyb3InfSlcblx0Ki9cblx0ZGVmZXIub25seUZ1bmNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgZnVsZmlsbGVkIHByb21pc2Ugb2YgZ2l2ZW4gdmFsdWUgKGFsd2F5cyBhc3luYyByZXNvbHV0aW9uKVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZWQgPSBkZWZlci5mdWxmaWxsZWQgPSBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiBkZWZlcih0cnVlKS5yZXNvbHZlKHZhbHVlKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIHdpdGggZ2l2ZW4gcmVhc29uIG9mIHJlamVjdGlvbiAoYWx3YXlzIGFzeW5jIHJlamVjdGlvbilcblx0ICogQHBhcmFtIHsqfSByZWFzb25cblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5yZWplY3RlZCA9IGZ1bmN0aW9uKHJlYXNvbil7IHJldHVybiBkZWZlcih0cnVlKS5yZWplY3QocmVhc29uKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIHdpdGggbm8gcmVzb2x1dGlvbiB2YWx1ZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIGluIHRpbWUgbXMgKHVzaW5nIHNldFRpbWVvdXQpXG5cdCAqIEBwYXJhbSB7aW50fSBbdGltZV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIud2FpdCA9IGZ1bmN0aW9uKHRpbWUpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGQucmVzb2x2ZSwgdGltZSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGwgd2hpY2ggd2lsbCBiZSBmdWxmaWxsZWQgaW4gZGVsYXkgbXMgb3IgcmVqZWN0ZWQgaWYgZ2l2ZW4gZm4gdGhyb3cgYW4gZXJyb3Jcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cblx0ICogQHBhcmFtIHtpbnR9IFtkZWxheV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIuZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXkpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRyeXsgZC5yZXNvbHZlKGZuLmFwcGx5KG51bGwpKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTsgfSB9LCBkZWxheSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBpZiBnaXZlbiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIHJlc29sdmVkIHRvIGdpdmVuIHZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0gcHJvbWlzZSBhIHZhbHVlIG9yIGEgcHJvbWlzZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnByb21pc2lmeSA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHRcdGlmICggcHJvbWlzZSAmJiBpc0Z1bmMocHJvbWlzZS50aGVuKSApIHsgcmV0dXJuIHByb21pc2U7fVxuXHRcdHJldHVybiBkZWZlci5yZXNvbHZlZChwcm9taXNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBtdWx0aVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMsIHJldHVyblByb21pc2VzKXtcblx0XHR2YXIgcHJvbWlzZXMgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggcHJvbWlzZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkocHJvbWlzZXNbMF0pICkge1xuXHRcdFx0aWYoISBwcm9taXNlc1swXS5sZW5ndGggKXtcblx0XHRcdFx0cmV0dXJuIGRlZmVyLmZ1bGZpbGxlZChbXSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9taXNlcyA9IHByb21pc2VzWzBdO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IFtdXG5cdFx0XHQsIGQgPSBkZWZlcigpXG5cdFx0XHQsIGMgPSBwcm9taXNlcy5sZW5ndGhcblx0XHQ7XG5cdFx0aWYgKCAhYyApIHtcblx0XHRcdGQucmVzb2x2ZShhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHByb21pc2VzW2ldID0gZGVmZXIucHJvbWlzaWZ5KHByb21pc2VzW2ldKTtcblx0XHRcdFx0cHJvbWlzZXNbaV0udGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbih2KXtcblx0XHRcdFx0XHRcdGlmICghIChpIGluIGFyZ3MpICkgeyAvL0B0b2RvIGNoZWNrIHRoaXMgaXMgc3RpbGwgcmVxdWlyZWQgYXMgcHJvbWlzZXMgY2FuJ3QgYmUgcmVzb2x2ZSBtb3JlIHRoYW4gb25jZVxuXHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcmV0dXJuUHJvbWlzZXMgPyBwcm9taXNlc1tpXSA6IHY7XG5cdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdGlmKCEgKGkgaW4gYXJncykgKXtcblx0XHRcdFx0XHRcdFx0aWYoICEgcmV0dXJuUHJvbWlzZXMgKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdFx0XHRcdFx0KC0tYykgfHwgZC5yZXNvbHZlKGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsID0gYzsgaSA8IGw7IGkrKyApe1xuXHRcdFx0XHRyZXNvbHZlcihpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciBhbGwgZ2l2ZW4gcHJvbWlzZXMgLyB2YWx1ZXMuXG5cdCAqIHRoZSByZXR1cm5lZCBwcm9taXNlcyB3aWxsIGJlIGZ1bGZpbGxlZCB3aXRoIGEgbGlzdCBvZiByZXNvbHZlZCB2YWx1ZS5cblx0ICogaWYgYW55IGdpdmVuIHByb21pc2UgaXMgcmVqZWN0ZWQgdGhlbiBvbiB0aGUgZmlyc3QgcmVqZWN0aW9uIHRoZSByZXR1cm5lZCBwcm9taXNlZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWUgcmVhc29uXG5cdCAqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW3Byb21pc2VdIGNhbiBiZSBhIHNpbmdsZSBhcnJheSBvZiBwcm9taXNlL3ZhbHVlcyBhcyBmaXJzdCBwYXJhbWV0ZXIgb3IgYSBsaXN0IG9mIGRpcmVjdCBwYXJhbWV0ZXJzIHByb21pc2UvdmFsdWVcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIGEgbGlzdCBvZiBnaXZlbiBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cdGRlZmVyLmFsbCA9IGZ1bmN0aW9uKCl7IHJldHVybiBtdWx0aVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMsZmFsc2UpOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYW4gYWx3YXlzIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGFycmF5PHByb21pc2U+IGxpc3Qgb2YgcHJvbWlzZXMvdmFsdWVzIHJlZ2FyZGxlc3MgdGhleSByZXNvbHZlIGZ1bGZpbGxlZCBvciByZWplY3RlZFxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgKG5vbiBwcm9taXNlIHZhbHVlcyB3aWxsIGJlIHByb21pc2lmaWVkKVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gb2YgdGhlIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZXNcblx0ICovXG5cdGRlZmVyLnJlc29sdmVBbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLHRydWUpOyB9O1xuXG5cdC8qKlxuXHQgKiB0cmFuc2Zvcm0gYSB0eXBpY2FsIG5vZGVqcyBhc3luYyBtZXRob2QgYXdhaXRpbmcgYSBjYWxsYmFjayBhcyBsYXN0IHBhcmFtZXRlciwgcmVjZWl2aW5nIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICogd2lsbCByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIG5vcm1hbCBjYWxsYmFjayB2YWx1ZSBtaW51cyB0aGUgZmlyc3QgZXJyb3IgcGFyYW1ldGVyIG9uXG5cdCAqIGZ1bGZpbGwgYW5kIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IGVycm9yIGFzIHJlYXNvbiBpbiBjYXNlIG9mIGVycm9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3N1YmplY3RdIG9wdGlvbmFsIHN1YmplY3Qgb2YgdGhlIG1ldGhvZCB0byBlbmNhcHN1bGF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiB0aGUgZnVuY3Rpb24gdG8gZW5jYXBzdWxhdGUgaWYgdGhlIG5vcm1hbCBjYWxsYmFjayBzaG91bGQgcmVjZWl2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgcGFyYW1ldGVyIChtaW51cyB0aGUgZXJyb3IpXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBsaXN0IG9yIHBhcmFtZXRlcnMgYXMgZnVsZmlsbG1lbnQgdmFsdWUuIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZW50IHRvIHRoZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVzb2x1dGlvbiB2YWx1ZS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0ZGVmZXIubm9kZUNhcHN1bGUgPSBmdW5jdGlvbihzdWJqZWN0LCBmbil7XG5cdFx0aWYgKCAhZm4gKSB7XG5cdFx0XHRmbiA9IHN1YmplY3Q7XG5cdFx0XHRzdWJqZWN0ID0gdm9pZCgwKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IGRlZmVyKCksIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5wdXNoKGZ1bmN0aW9uKGVyciwgcmVzKXtcblx0XHRcdFx0ZXJyID8gZC5yZWplY3QoZXJyKSA6IGQucmVzb2x2ZShhcmd1bWVudHMubGVuZ3RoID4gMiA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiByZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGZuLmFwcGx5KHN1YmplY3QsIGFyZ3MpO1xuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0fTtcblx0fTtcblxuXHR0eXBlb2Ygd2luZG93ICE9PSB1bmRlZlN0ciAmJiAod2luZG93LkQgPSBkZWZlcik7XG5cdHR5cGVvZiBtb2R1bGUgIT09IHVuZGVmU3RyICYmIG1vZHVsZS5leHBvcnRzICYmIChtb2R1bGUuZXhwb3J0cyA9IGRlZmVyKTtcblxufSkoKTtcbiJdfQ==
},{"_process":18}],20:[function(require,module,exports){
module.exports={
    "/r/user/login": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/logout": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/autosave": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/release": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/pool": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/recycle": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/ping": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/saveas": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/close": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/import": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/export": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/code": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/script": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/console": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/history": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/flush": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/get": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/workspace/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/push": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/directory/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/attach": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/detach": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/submit": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/schedule": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/query": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/cancel": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/rename": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/render": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/shell/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/archive": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/file/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/diff": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/revert": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/server/info": {
        "method": "GET",
        "format": "json"
    }
}

},{}],21:[function(require,module,exports){
(function (process){
/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var win         = (typeof window !== 'undefined'),   
    request     = require('superagent'),
    D           = require('d.js'),
    fs          = require('fs'),
    apis        = require('./apis.json'), 
    EventStream = require('./lib/es'),
    utils       = require('./lib/utils'),
    Lang        = require('./lib/lang'),   
    Logger      = require('./lib/logger'),   
    Queue       = require('./lib/queue'),
    Emitter     = require('./lib/emitter'),
    encoder     = require('./lib/encoder'),
    Base        = require('./lib/selfish').Base,
    RInput      = require('./lib/rinput'),    
    RInputs     = require('./lib/rinputs'),
    merge       = utils.merge;

/*
 * Turn global logging off by default
 */
Logger.setLevel(Logger.OFF);

/*
 * Global options that persist through all DeployR requests.
 */
var globalOptions = { 
  cors: false,
  logging: false,
  sticky: false,
  cookies: null,
  host: '',
  allowSelfSignedSSLCert: false,
  maxRequests: null, // no socket pooling in http.Agent
  events:{},
  set: function(prop, value) { 
    if (prop !== 'set') { 
      if (prop === 'host' && value) {         
         // Be more forgiving on the entered DeployR 'endpoint':
         //   - http(s)://dhost:port
         //   - http(s)://dhost:port/deployr
         //   - dhost:port
         //   - dhost:port/deployr         
         value = value.replace(/\/*$|\/*deployr\/*$/, '');
         value = (new RegExp('^(http|https)://', 'i')).test(value) ? value : 
            'http://' + value;
      }

      this[prop] = value; 
    } 
  }
};

/*
 * The top-level DeployR API response entities.
 */
var TOPLEVEL_ENTITIES = [
  'user', 
  'project', 
  'workspace', 
  'execution', 
  'directory', 
  'repository', 
  'packages' 
];

/*
 * Notify global IO error events accessible by all subscribers across requests.
 */
function raiseGlobalErrors(api, res) {
  var code    = res.deployr ? res.deployr.response.errorCode : res.status,
      context = this;

  // -- global events if provided --
  if (globalOptions.events) {
    if (!res.deployr) {
      res = res.text;
    }

    context = globalOptions.events.ctx || context;

    // -- general global failure --
    if (globalOptions.events.error) {
      globalOptions.events.error.apply(context, [api, res]);
    }

    // -- HTTP or DeployR global errors --    
    if (globalOptions.events[code]) {
      globalOptions.events[code].apply(context, [api, res]);
    }
  }
}

/**
 * The `DeployR` request class is a utility that brokers HTTP requests through a 
 * simplified fluid interface to DeployR.
 *
 * @module deployr
 * @for deployr
 */
var DeployR = Base.extend(Emitter, RInputs, {

  /**
   * The `DeployR` Request class is a utility that brokers HTTP requests through 
   * a simplified fluid interface to DeployR.
   * 
   * @class 
   * @constructor
   * @param {String} api The DeployR API
   * @param {Object} link The object literal containing the previous request.
   * @api private
   */
  initialize: function initialize(api, link) {
     Emitter.initialize.call(this, {});
  
     var opts = globalOptions;

     if (!apis[api]) { throw new Error('Invalid API "' + api + '"'); }
    
     this.api        = merge({ 'call': api }, apis[api]);    
     this.link       = link || {};
     this.q          = this.link.queue || new Queue();
     this.deferred   = this.link.deferred || D();
     this.cookies    = this.link.cookies;
     this.logger     = Logger.get(api, Logger.OFF); // transaction-level logging
     this.params     = {};
     this.inputs     = []; // rinputs list 
     this.outputs    = []; // routput object list
     this.rstream    = false;
     this.delayed    = false;
     this.globalEvts = true; // suppress|raise global events fot this `io`     
     this.file       = null; 
     this.filter     = null; 

     // preset deployr's assigned response format for `this` api
     this.data({ format: this.api.format });

     // wrap superagent for the heavy lifting     
     this.req = 
        request[this.api.method.toLowerCase()](opts.host + '/deployr' + api);
     this.req.timeout(20 * 60 * 1000); // default timeout --> 20 minutes

     // All CORS deployr calls require sticky sessions
     if (win && globalOptions.cors) { this.req.withCredentials(); }

     // Node.js - access an SSL endpoint with self signed certs for testing|dev
     if (!win && globalOptions.allowSelfSignedSSLCert) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';        
     }
  },

  /**
   * Binds the scope context for the configured `.end()` and `.error()` event    
   * handler callbacks on this request.
   *
   * @method ctx
   * @param {Object} context The `this` object for the configured `.end()` and
   * `.error()` event handlers on this request.
   * @api public   
   */ 
  ctx: function (context) {
    this.scope = context || this;

    return this;
  },

  /**
   * Suppress or raise global events for this `io` request.
   *
   * @method global
   * @param {Boolean} raise `true` to raise global events, `false` to supress 
   * event firing globally.
   * @return {DeployR} for chaining.
   * @api public
   */  
  global: function(raise) {
    this.globalEvts = Lang.isBoolean(raise) ? raise : this.globalEvts;

    return this;
  },  

  /**
   * Retrieve details about user.
   *   
   * @method about
   * @return {Object} details about user otherwies `null`.
   * @api public   
   */
  about: function() {
    var response = this.req.res;

    return this.api['call'] === '/r/user/login' && response ? 
           response.body.get('user') : null;
  },  

  /**
   * Shares the cookies from a diffrent `.io()` agent to preserve session state
   * across `this` request and all requests chained to it.
   *
   * @method share
   * @return {DeployR} for chaining.
   * @api public   
   */  
  share: function (cookies) {
    if (globalOptions.sticky) {
      if (globalOptions.cookies) {
        this.cookies = globalOptions.cookies.slice(0); 
      } else {
        if (cookies) { 
          this.cookies = cookies.slice(0); 
          globalOptions.set('cookies', this.cookies);
        }
      }
    } else {
      this.cookies = (cookies ? cookies.slice(0) : this.cookies);
    }

    return this;
  },

  /**
   * Returns the HTTP cookie previously sent by the server with Set-Cookie.
   * This value can be passed to `.share(ruser.getCookies())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getCookies
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getCookies: function () {
    return this.cookies;
  }, 

  delay: function (ms) {
    // TODO: support delayed requests based on ms for now this is just a pause.
    this.delayed = !isNaN(parseFloat(ms)) && isFinite(ms) ? ms : true;

    return this;
  },   

  /**
   * Unwind the queue chain clearing requests that might have delays attached.
   *
   * @method drain
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  drain: function () {
    this.delayed = false;
    this.q.flush(); 

    return this.deferred.promise;
  },   

  /**
   * The `.promise()` method returns a dynamically generated Promise that is 
   * resolved once all DeployR `.io()` requests have ended.
   *   
   * @method promise
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public
   */     
  promise: function () {
    this.end();

    return this.deferred.promise;
  },

  /**
   * Abort the DeployR request.
   *
   * @method abort  
   * @return {DeployR} for chaining.
   * @api public
   */  
  abort: function () {
    this.req.abort();
    this.emit('abort');
    this.deferred.reject(this._handleError({ 
        status: 'abort',
        text: 'DeployR request aborted.'
    }));

    return this;
  },

 /**
  * Set timeout to `ms`.
  *
  * @method timeout  
  * @param {Number} ms
  * @return {DeployR} for chaining
  * @api public
  */  
  timeout: function (ms) {
    this.req.timeout(ms);

    return this;
  },

 /**
  * Turn logging on for the specific transaction.
  *
  * @method log
  * @return {DeployR} for chaining
  * @api public
  */ 
  log: function (level) {
    this.logger.setLevel(level || Logger.DEBUG);

    return this;
  },

  /**
   * Filters successful responses to contain only a top-level DeployR API 
   * response entities:
   * - 'user'
   * - 'project'
   * - 'workspace' 
   * - 'execution' 
   * - 'directory' 
   * - 'repository'
   * - 'packages' 
   *   
   * @method entity
   * @return {DeployR} for chaining
   * @api public
   */
  entity: function (entity) {
    this.filter = utils.inArray(TOPLEVEL_ENTITIES, entity);

    return this;
  },

  /**
   * Defines the request data being sent to a DeployR API. 
   *
   * @method data
   * @param {Object} data The object literal configuration hash. 
   * @return {DeployR} for chaining
   * @api public
   */
  data: function (data) {
    data = data || {};    

    // remove any inlined rinput(s) and attach them to the rinput(s) property
    if (data.rinput || data.rinputs) {
      this.rinput(data.rinput);
      this.rinputs(data.rinputs);
    } 

    // remove any `reserved` values that could have been passed by mistake
    var BLACKLIST = ['rinput', 'rinputs', '__cookies__'];
    BLACKLIST.forEach(function(param) { delete data[param]; });  

    this.params = merge(this.params, data);

    return this;
  },

  /**
   * Attaches a file to be uploaded. 
   *
   * @method attach
   * @param {File|Blob|path} file The file to be attached for an upload. For 
   * Browser environments the HTML5 File|Blob is used. For the Node.js 
   * environment, a file path is accepted.
   * @param {String} filename (optional) the name of the file to be uploaded. 
   * This name does not have to match the actual source filename.
   * @return {DeployR} for chaining
   * @api public
   */
  attach: function (file, filename) {
    if (this.api.upload) {
      this.file = file;

      // optional filename here for convenience
      if (filename) { this.data( { filename: filename } ); }
    }

    return this;
  },

  /**
   * Supported only in Node.js, this method works in conjunction with the 
   * attach method to indicate that the file should be read in as a readable 
   * stream during a file upload.
   *
   * @method stream
   * @param {Object} options (optional) the Readable Stream options hash.
   *  ```
   *    { flags: 'r',
   *      encoding: null,
   *      fd: null,
   *      mode: 0666,
   *      autoClose: true
   *    }
   * ```
   * @return {DeployR} for chaining
   * @api public
   */
  stream: function () {
    this.rstream = (!win && this.api.upload); //nodejs only

    return this;
  },
  
  /**
   * Acts as a finally statement allowing you to execute "cleanup" type tasks 
   * in a request chain. It arranges for cleanup to be called, with no 
   * arguments, when the DeployR request chain is either completely fulfilled 
   * or rejected.
   *
   * @method ensure
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */  
  ensure: function (fn) {
    this.deferred.promise.ensure(fn);

    return this.deferred.promise;
  },
      
  /**
   * The general failure callback. If called, all DeployR errors for this 
   * transaction will be returned here when raised.
   *
   * @method error
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */
  error: function (fn) {
    this.on('error', fn);

    return this;
  },

  /**
   * Stream the DeployR response into the pipe. It is important to note that if 
   * the `.pipe()` method is never called the request will not be sent.
   *
   * The `.pipe()` method should be be used as an alternative to `.end()` and 
   * never along side of it. `.pipe()` and `.end()` are an either-or.
   *
   * @method pipe
   * @param {Stream} stream A destination Stream.
   * @return {Stream} The passed in destination stream to be used for additional 
   * piping.
   * @api public
   */
  pipe: function (dest) {
    var q   = this.q,
        api = this.api;        

    q.add(function(responseChain, error, prevArgs) {    
      // brake the call chain on error      
      if (error) {        
        this.deferred.reject(error);      
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('pipe()', api, this.req);
      this.logger.info('pipe()', api, this.req);   

      var stream = this.req.pipe(dest);
      q.yield(true);
      stream.on('error', function () { });    
      stream.on('end', function() { });     
      stream.on('data', function() { });      
    }, this);
  
    if (q.size() <= 1) { q.flush(); }

    return dest;
  },

  /**
   * Indicates that the request is ready to be sent to DeployR. It is important 
   * to note that if the `.end()` method is never called the request will not be
   * sent.
   *
   * @method end
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining.
   * @api public
   */ 
  end: function (fn) {
    var self   = this,
        q      = this.q,
        api    = this.api,
        args   = null,
        entity = this.filter;

    q.add(function(responseChain, error, prevArgs) {
      // break the call chain on error      
      if (error) {        
        this.deferred.reject(error);        
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('io()', api, this.req);
      this.logger.info('io()', api, this.req);    

      this.req.end(function(res) {
        self.share(self.cookies || res.headers['set-cookie']);         

        // -- log cookies across requests --
        if (self.cookies) {
          Logger.info('cookies', api, self.cookies); 
          self.logger.info('cookies', api, self.cookies); 
        }

        error = self._handleError(res);
        var dres = (res.body && res.body.deployr ? res.body : res);             
      
        self.inputs = [];
        self.outputs = [];

        if (!error) {
           // -- Log global + transaction log --
           Logger.info('end()', api, dres, res);
           self.logger.info('end()', api, dres, res);

           // -- walk response for top-level entity response assignment --        
           if (entity) { dres = dres.deployr.response[entity] || dres; }

           dres.get = function(key) { 
              return utils.get(dres.deployr.response, key); 
           };

           dres.workspace = function(name) { 
              return utils.workspace(dres.deployr.response, name); 
           };

           // -- callback --
           if (fn) { args = fn.apply(self.scope, [dres, responseChain]);}

           // -- notify that the queue has been drained... --
           if (q.size() === 0) { 
             self._clear();
             self.deferred.resolve(responseChain || dres);
           }          

           // -- include cookies in next request in the queue --
           args = merge(args, { __cookies__: self.cookies });          
        }        

        q.yield(false);
        q.flush(dres, error, args); // pass result|error|args to next 
      });

      q.yield(true);
    }, this, this.delayed);
  
    if (!this.delayed && q.size() <= 1) { q.flush(); }

    return this;
  }, 

  /** 
   * Add an additional IO request to the exsisting sequential request chain.
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @return {DeployR} for chaining.
   * @api public
   */   
  io: function (api) {    
    return DeployR.new(api, { 
      cookies: this.cookies, 
      queue: this.q, 
      deferred: this.deferred
    });
  },

  /** 
   * Convenience function for adding an additional script execution to the 
   * exsisting sequential request chain.
   *
   * @method script
   * @param {Arguments} Arguments to define the fully qualified script for 
   * execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  script: function() {
     var args = utils.signature(arguments),
         opts = args.opts,
         api  = args.api,
         link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        };  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create', link)
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api, link).data(opts);
    }    
  },

  /** 
   * Convenience function for adding an additional repository-managed shell 
   * script execution to the exsisting sequential request chain.
   *
   * This call executes repository-managed shell scripts .sh, .csh, .bash, .bat 
   * on the DeployR server. Due to the special security concerns associated with 
   * excuting shell scripts on the DeployR server, only shell scripts owned by 
   * _ADMINISTRATOR_ users can be executed on this API call. Any attempt to 
   * execute a shell script stored in the repository that is not owned by an 
   * _ADMINISTRATOR_ user will be rejected.
   *
   * To execute a repository-managed shell script the caller must provide 
   * parameter values for _author_, _directory_, _filename_. This can be
   * achieved by providing a fully qualified shell script 
   * `/<author>/<directory>/<filename>`, for example:
   *
   *  ```
   *  .shell('/admin/external:public:admin/echo.sh', 'echo.sh args to pass.')
   *  ```
   *
   * @method shell
   * @param {String} filepath to define the fully qualified shell script for
   * execution. 
   * @param {String} args (optional) arguments to be passed into the shell 
   * script on execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  shell: function(path, args) {   
    var link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        },
        tokens = Lang.isString(path) ? path.split('\/') : [];

    // handle both: `/author/directory/filename` & `author/directory/filename`
    if (tokens.length > 3) { tokens = tokens.slice(1); }

    return DeployR.new('/r/repository/shell/execute', link).data({
      author: tokens[0],
      directory: tokens[1],
      filename: tokens[2],
      args: args
    });
  },

  /** 
   * Convenience function for executing a block of R code on the R session.

   * Example:
   *  ```
   *  .code('x<-5')
   *  // -- or --
   *  .code('x<-5', projectId)
   *  ```
   *   
   * @method code
   * @param {String} r - The block of R code to execute.
   * @param {String} project - (optional) if omitted a new project will first be 
   * created and used, otherwise it will execute on the R session identified by 
   * this `project`.
   * @return {DeployR} for chaining.   
   * @api public
   */
  code: function(r, project) {
     var link = {
             cookies: this.cookies,
             queue: this.q,
             deferred: this.deferred
         },
         api = '/r/project/execute/code';

     if (!project) {
         return DeployR.new('/r/project/create', link)
             .end(function(res) {
                 return { project: res.get('project').project };
             })
             .io(api)
             .data({ code: r });
     } else {
         return DeployR.new(api, link).data({ code: r, project: project });
     }
  },
  
  /** 
   * Release any residual project resources associated with the application 
   * instance whenever a client application terminates. This includes closing 
   * any supplied projects down and logging out.
   *
   * @method release
   * @param {String|Array} projects The project or list of projects to close.
   * @param {Boolean} auth (optional) to remain authenticated.
   * @return {DeployR} for chaining.   
   * @api public
   */
  release: function(projects, auth) {
     projects = Lang.isArray(projects) ? projects : [projects];

     var self     = this,
         deferred = D(),
         empty    = !projects || !projects[0],
         count    = 0,
         last     = !empty ? projects.length - 1 : count,
         cookies  = this.getCookies();           

    function logout(index) {
      if (index === last) {
        if (!auth) {
          DeployR.new('/r/user/logout')
          .share(cookies)
          .error(function() {          
            deferred.reject(false);
          })      
          .end(function() { 
            deferred.resolve(true);
          })
          .ensure(function() {
            self.destroy();
          });
        } else {
          deferred.resolve(true);
          self.destroy();
        }
      } 
    }

    if (!empty) {
      projects.forEach(function(project) {
        DeployR.new('/r/project/close')
        .data({ project: project })
        .share(cookies)
        .end()
        .ensure(function() {
          logout(count);
          count++;
        });
      });   
    } else {
      logout(count);
    }

    return deferred.promise;  
  },  

  /** 
   * A convenience alternative to multiple `.rinput()` calls. Defines a name 
   * list of R objects that will be returned as DeployR-encoded R objects on the 
   * response markup.
   *
   * Calling this method ~.routputs([ ... ])` is equivalent to invoking multiple 
   * `.routput(...)` calls.
   *
   * @method routputs
   * @param {Array} robjects A name list of R objects that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routputs: function (routputs) {
    if (routputs) { this.outputs = this.outputs.concat(routputs); }

    return this;
  },
  
  /** 
   * Defines the name of the R object that will be returned as a DeployR-encoded 
   * R object on the response markup.
   *
   * @method routput
   * @param {String} robject The name of the R object that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routput: function (routput) {
    if (routput) { this.routputs([routput]); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinputs
   * @param {Array} rinputs The `RInput` list of DeployR-specific encoded R 
   * object data for use on an API call.
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinputs: function (rinputs) {
    if (rinputs) { this.inputs = this.inputs.concat(rinputs); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinput
   * @param {RInput} rinput The DeployR-specific encoded R object data for use 
   * on an API call.   
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinput: function (rinput) {
    if (rinput) { this.inputs.push(rinput); }

    return this;
  },

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. Called internally when `.release()`
   * is called.
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {
    try {
      this.emit('destroy');
      this.offAll();
    
      for (var key in this) {
        if (this.hasOwnProperty(key)) { 
          this[key] = null; 
          delete this[key];
        }
      }
    } catch(err) {}
  },  

  // --------------------------------------------------------------------------
  // Private methods
  // --------------------------------------------------------------------------

  /**
   * @api private
   */
  _clear: function() {    
    this.params  = {};
    this.inputs  = [];
    this.outputs = [];
    this.rstream = false;
    this.delayed = false;
    this.api     = null;    
    this.file    = null;  
    this.filter  = null;
  }, 

  /**
   * @api private
   */
  _prepRequest: function (responseChain, args) {
    var req  = this.req,
        file = this.file;

    // set the request type    
    if (this.api.upload) {
       // If the env is the Browser there is no need to manually set the
       // Content-Type. The browser will automatically set the 
       // "multipart/form-data; boundary=..." value. If the env is Node we need
       // to set it manually.
       if (!win) { this.req.type('multipart/form-data'); }    
    } else {
      req.type('form');
    }    

    req.on('error', function(err) { 
      err = err || {  code: 'UNKNOWN CODE', text: 'UNKNOWN ERROR' };

      this._handleError({ 
        status: err.code || 'UNKNOWN CODE',
        text: err
      });
    }.bind(this));    

    this.share(args ? args.__cookies__ : null);

    // arguments returned from prev request's io().end(function() { return x; })
    if (args) { 
       this.data(args);
    } 

    if (this.inputs.length > 0) { 
      this.data({ inputs: encoder.encode(this.inputs) }); 
    }
  
    if (this.outputs.length > 0) { 
      this.data({ robjects: this.outputs.join() }); 
    }    

    if (this.cookies) {     
      this.cookies.forEach( function(c) { req.set('Cookie', c); });
    }

    if (this.api.upload) {    
      for(var p in this.params) {
       req.field(p, this.params[p] ? this.params[p] + '' : '');  
      } 
      req.attach('file', this.rstream ? fs.createReadStream(file) : file);
    } else {
      req[this.api.method === 'GET' ? 'query' : 'send'](this.params);
    } 
  },

  /**
   * @api private
   */
  _handleError: function (raw) {
    var stat  = raw.status,
        res   = (raw.body && raw.body.deployr ? raw.body : raw),
        error = ((stat !== 200) || res.deployr && !res.deployr.response.success);

    // -- Handle errors --
    if (error) {
      res = {
        get: function(key) { 
          return utils.get(this.deployr.response, key); 
        },
        deployr: {          
          response: {
            success: false,
            call: this.api['call'],
            errorCode: res.deployr ? res.deployr.response.errorCode : stat,
            error: res.deployr ? res.deployr.response.error : res.text
          }
        }
      };

      Logger.error('error()', this.api, res, raw);
      this.logger.error('error()', this.api, res, raw);

      // -- notify global errors first (if any) for this call --      
      if (this.globalEvts) {
        raiseGlobalErrors(this.api['call'], res);        
      }

      // -- tranaction level HTTP or DeployR errors come next --    
      this.emit('error', res);
      this.emit('deployr-io:' + res.deployr.response.errorCode, res);
      this.deferred.reject(res);
    }

    return error;
  }
});

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

// Include the `deprecated` jsDeployR for now.
if (win) {
  window.Revolution = window.Revolution || require('./lib/deprecated');
}

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/**
 * Expose for a cleaner client api into DeployR
 */
module.exports = {

  /**
   * Exposes the `DeployR` object for extending.
   *
   * ```var DeployR = require('deployr').DeployR;```
   *
   * @static
   * @api public
   * @return {DeployR} The `DeployR` object.
   */   
  DeployR: DeployR,

  /**
   * Exposes the supported DeployR APIs.
   *
   * @method apis
   * @param {Boolean} flat (optional) if `true` will return an array of just the 
   * API's endpoint properties, for example: 
   * ```
   * ['/r/user/login', '/r/user/logout', '/r/user/about', ...]
   * ```
   * @static
   * @api public
   * @return {Object|Array} The HTTP request to the DeployR server.      
   */  
  apis: function(flat) {
    return flat ? Object.keys(apis) : apis;
  },

  /**
   * Represents a static method for configuring all DeployR requests. Settings 
   * made here are applied globally across every request.
   *
   * @method configure
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @chainable
   * @api public
   */
  configure: function(options) {
    options = options || {};

    for (var i in options) { globalOptions.set(i, options[i]); }

    // assert global cookies are empty if global `sticky` jsessionid is off
    if (!globalOptions.sticky)  { globalOptions.set('cookies', null); }

    // turn global logging on|off (off by default)
    Logger.setLevel(globalOptions.logging ? Logger.DEBUG : Logger.OFF);

    return this;
  },

  /**
   * Factory for creating new IO requests to `DeployR`.
   *
   * Example:
   * ```   
   *    deployr.io('/r/user/about').end(callback);
   * ```
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.
   * @api public   
   */
  io: function(api) {  
    return DeployR.new(api);
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * @method auth
   * @param {String} username Specifies the username.
   * @param {String} password Specifies the password.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */   
  auth: function(un, pw) {
    var data = { username: un, password: pw };
    return DeployR.new('/r/user/login').data(data).end();    
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * Example:
   * ```
   *    deployr.script('/testuser/root/reduce.R')
   *    deployr.script({ filename: 'reduce.R', author: 'testuser',
   *                     directory: 'root'})
   *    deployr.script('reduce.R', 'testuser', 'root')
   *    deployr.script('/testuser/root/reduce.R', project)     
   * ```   
   *
   * @method script
   * @param {Arguments} arguments Arguments to define the fully qualified script 
   * for execution.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */     
  script: function() {
    var args = utils.signature(arguments),
        opts = args.opts,
        api  = args.api;  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create')
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api).data(opts);
    }
  },  

  /**
   * Run an series of chained DeployR requests in sequence and without overlap.       
   *
   * @method pipline
   * @param {Array} tasks Specifies the list of `Function` tasks.
   * @static
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  pipeline: function(chains) {      
    var deployr  = this,
        deferred = D(),
        q        = new Queue(),
        results  = [],
        errors   = [],
        NOOP     = null, // NOOP errors|results for [a] batch request chain
        orig     = {
          sticky: globalOptions.sticky,
          cookies: globalOptions.cookies
        };

    // make a copy
    chains = chains.slice(0);

    // turn sticky session for these request (hacky)
    deployr.configure( { sticky: true });

    function add() {
      q.add(function() { 
        chains.shift().drain()
        .then(function(chain) {
          results.push(chain);  
          errors.push(NOOP);           
          if (q.isEmpty()) { 
            deployr.configure(orig); // reset
            deferred.resolve({ results: results, errors: errors }); 
          }  

          q.take();
        }, function(err) {          
          results.push(NOOP); 
          errors.push(err);
          // rejections are only met when they [all] fail
          if (q.isEmpty() && results.length === 0) { 
            deployr.configure(orig); // reset
            deferred.reject(errors); 
          }  
          q.take();
        });       
      }, null, true);
    }

    // convert to a seq queue for better handling
    for(var i = 0; i < chains.length; i++) { add(); }

    // start: dequeue first item and run it
    q.take();

    return deferred.promise;
  },

  /**
   * The event stream API is unique within the DeployR API as it supports push 
   * notifications from the DeployR server to client applications. Notifications 
   * correspond to discrete events that occur within the DeployR server. There 
   * are four distinct event categories:
   * 
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events
   *
   * Example:
   * ```
   * deployr.es({ username: 'testuser', password: 'secret' })
   *    // -- connection choices for event types --
   *    .management()  //.session() | .all() | .project(id) | .job(id)
   *    .on('es:gridHeartbeat', function(data) {
   *        console.log('===================');
   *        console.log('es:gridHeartbeat');
   *        console.log('===================');          
   *     })
   *     .open();
   * ```
   * 
   * @method es
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @return {EventStream} a new `EventStream` for binding.
   * @api public   
   */  
  es: function(options) {    
    var stream = EventStream.new(globalOptions.host, options);

    if (options && options.username && options.password) {
      var ruser = this.auth(options.username, options.password);
      ruser.ensure(function() { 
        stream.share(ruser.getCookies());
        stream.flush(); 
      });
    }

    return stream;
  },

  /**
   * Defines the factory for creating a DeployR-specific encoded R object to be 
   * sent as input parameters to an R script.
   *
   * Example:
   * ```
   *    var rinput = deployr.RInput.logical('logical_name', true);
   *    var rinput = deployr.RInput.numeric('numeric_name', 10.5);
   *    var rinput = deployr.RInput.integer('integer_name', 5);
   *    var rinput = deployr.RInput.character('character_name', 'Hello');
   *    // ect...
   * ```
   * @property RInput
   * @static
   * @api public
   */
  RInput: {
    numeric: function (name, value) {
      return RInput.new(name, value).numeric();
    },

    integer: function (name, value) {
      return RInput.new(name, value).integer();
    },

    logical: function (name, value) {
      return RInput.new(name, value).logical();
    },

    character: function (name, value) {
      return RInput.new(name, value).character();
    },

    date: function (name, value) {
      return RInput.new(name, value).date();
    },

    posixct: function (name, value) {
      return RInput.new(name, value).posixct();
    },  

    numericVector: function(name, value) {
      return RInput.new(name, value).numericVector();
    }, 

    integerVector: function (name, value) {
      return RInput.new(name, value).integerVector();
    },

    logicalVector: function (name, value) { 
      return RInput.new(name, value).logicalVector();
    },

    characterVector: function (name, value) { 
      return RInput.new(name, value).characterVector();
    },  

    dateVector: function (name, value) { 
      return RInput.new(name, value).dateVector();
    },  

    posixctVector: function (name, value) { 
      return RInput.new(name, value).posixctVector();
    },

    list: function (name, value) {
      return RInput.new(name, value).list(); 
    },

    dataframe: function (name, value) { 
      return RInput.new(name, value).dataframe();
    },
  
    factor: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).factor();
    },

    ordered: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).ordered();
    },

    numericMatrix: function (name, value) { 
      return RInput.new(name, value).numericMatrix();
    },

    integerMatrix: function (name, value) { 
      return RInput.new(name, value).integerMatrix();
    },

    logicalMatrix: function (name, value) { 
      return RInput.new(name, value).logicalMatrix();
    },

    characterMatrix: function (name, value) {
      return RInput.new(name, value).characterMatrix();
    }
  }
};
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kZXBsb3lyL2RlcGxveXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE1IGJ5IFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIHdpbiAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSwgICBcbiAgICByZXF1ZXN0ICAgICA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxcbiAgICBEICAgICAgICAgICA9IHJlcXVpcmUoJ2QuanMnKSxcbiAgICBmcyAgICAgICAgICA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBpcyAgICAgICAgPSByZXF1aXJlKCcuL2FwaXMuanNvbicpLCBcbiAgICBFdmVudFN0cmVhbSA9IHJlcXVpcmUoJy4vbGliL2VzJyksXG4gICAgdXRpbHMgICAgICAgPSByZXF1aXJlKCcuL2xpYi91dGlscycpLFxuICAgIExhbmcgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbGFuZycpLCAgIFxuICAgIExvZ2dlciAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyksICAgXG4gICAgUXVldWUgICAgICAgPSByZXF1aXJlKCcuL2xpYi9xdWV1ZScpLFxuICAgIEVtaXR0ZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW1pdHRlcicpLFxuICAgIGVuY29kZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW5jb2RlcicpLFxuICAgIEJhc2UgICAgICAgID0gcmVxdWlyZSgnLi9saWIvc2VsZmlzaCcpLkJhc2UsXG4gICAgUklucHV0ICAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXQnKSwgICAgXG4gICAgUklucHV0cyAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXRzJyksXG4gICAgbWVyZ2UgICAgICAgPSB1dGlscy5tZXJnZTtcblxuLypcbiAqIFR1cm4gZ2xvYmFsIGxvZ2dpbmcgb2ZmIGJ5IGRlZmF1bHRcbiAqL1xuTG9nZ2VyLnNldExldmVsKExvZ2dlci5PRkYpO1xuXG4vKlxuICogR2xvYmFsIG9wdGlvbnMgdGhhdCBwZXJzaXN0IHRocm91Z2ggYWxsIERlcGxveVIgcmVxdWVzdHMuXG4gKi9cbnZhciBnbG9iYWxPcHRpb25zID0geyBcbiAgY29yczogZmFsc2UsXG4gIGxvZ2dpbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxuICBjb29raWVzOiBudWxsLFxuICBob3N0OiAnJyxcbiAgYWxsb3dTZWxmU2lnbmVkU1NMQ2VydDogZmFsc2UsXG4gIG1heFJlcXVlc3RzOiBudWxsLCAvLyBubyBzb2NrZXQgcG9vbGluZyBpbiBodHRwLkFnZW50XG4gIGV2ZW50czp7fSxcbiAgc2V0OiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkgeyBcbiAgICBpZiAocHJvcCAhPT0gJ3NldCcpIHsgXG4gICAgICBpZiAocHJvcCA9PT0gJ2hvc3QnICYmIHZhbHVlKSB7ICAgICAgICAgXG4gICAgICAgICAvLyBCZSBtb3JlIGZvcmdpdmluZyBvbiB0aGUgZW50ZXJlZCBEZXBsb3lSICdlbmRwb2ludCc6XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBodHRwKHMpOi8vZGhvc3Q6cG9ydC9kZXBsb3lyXG4gICAgICAgICAvLyAgIC0gZGhvc3Q6cG9ydFxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnQvZGVwbG95ciAgICAgICAgIFxuICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8qJHxcXC8qZGVwbG95clxcLyokLywgJycpO1xuICAgICAgICAgdmFsdWUgPSAobmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJykpLnRlc3QodmFsdWUpID8gdmFsdWUgOiBcbiAgICAgICAgICAgICdodHRwOi8vJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzW3Byb3BdID0gdmFsdWU7IFxuICAgIH0gXG4gIH1cbn07XG5cbi8qXG4gKiBUaGUgdG9wLWxldmVsIERlcGxveVIgQVBJIHJlc3BvbnNlIGVudGl0aWVzLlxuICovXG52YXIgVE9QTEVWRUxfRU5USVRJRVMgPSBbXG4gICd1c2VyJywgXG4gICdwcm9qZWN0JywgXG4gICd3b3Jrc3BhY2UnLCBcbiAgJ2V4ZWN1dGlvbicsIFxuICAnZGlyZWN0b3J5JywgXG4gICdyZXBvc2l0b3J5JywgXG4gICdwYWNrYWdlcycgXG5dO1xuXG4vKlxuICogTm90aWZ5IGdsb2JhbCBJTyBlcnJvciBldmVudHMgYWNjZXNzaWJsZSBieSBhbGwgc3Vic2NyaWJlcnMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiByYWlzZUdsb2JhbEVycm9ycyhhcGksIHJlcykge1xuICB2YXIgY29kZSAgICA9IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogcmVzLnN0YXR1cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuXG4gIC8vIC0tIGdsb2JhbCBldmVudHMgaWYgcHJvdmlkZWQgLS1cbiAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzKSB7XG4gICAgaWYgKCFyZXMuZGVwbG95cikge1xuICAgICAgcmVzID0gcmVzLnRleHQ7XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGdsb2JhbE9wdGlvbnMuZXZlbnRzLmN0eCB8fCBjb250ZXh0O1xuXG4gICAgLy8gLS0gZ2VuZXJhbCBnbG9iYWwgZmFpbHVyZSAtLVxuICAgIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvcikge1xuICAgICAgZ2xvYmFsT3B0aW9ucy5ldmVudHMuZXJyb3IuYXBwbHkoY29udGV4dCwgW2FwaSwgcmVzXSk7XG4gICAgfVxuXG4gICAgLy8gLS0gSFRUUCBvciBEZXBsb3lSIGdsb2JhbCBlcnJvcnMgLS0gICAgXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50c1tjb2RlXS5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYERlcGxveVJgIHJlcXVlc3QgY2xhc3MgaXMgYSB1dGlsaXR5IHRoYXQgYnJva2VycyBIVFRQIHJlcXVlc3RzIHRocm91Z2ggYSBcbiAqIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gKlxuICogQG1vZHVsZSBkZXBsb3lyXG4gKiBAZm9yIGRlcGxveXJcbiAqL1xudmFyIERlcGxveVIgPSBCYXNlLmV4dGVuZChFbWl0dGVyLCBSSW5wdXRzLCB7XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVwbG95UmAgUmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBcbiAgICogYSBzaW1wbGlmaWVkIGZsdWlkIGludGVyZmFjZSB0byBEZXBsb3lSLlxuICAgKiBcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgRGVwbG95UiBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpbmsgVGhlIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHByZXZpb3VzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShhcGksIGxpbmspIHtcbiAgICAgRW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcywge30pO1xuICBcbiAgICAgdmFyIG9wdHMgPSBnbG9iYWxPcHRpb25zO1xuXG4gICAgIGlmICghYXBpc1thcGldKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBUEkgXCInICsgYXBpICsgJ1wiJyk7IH1cbiAgICBcbiAgICAgdGhpcy5hcGkgICAgICAgID0gbWVyZ2UoeyAnY2FsbCc6IGFwaSB9LCBhcGlzW2FwaV0pOyAgICBcbiAgICAgdGhpcy5saW5rICAgICAgID0gbGluayB8fCB7fTtcbiAgICAgdGhpcy5xICAgICAgICAgID0gdGhpcy5saW5rLnF1ZXVlIHx8IG5ldyBRdWV1ZSgpO1xuICAgICB0aGlzLmRlZmVycmVkICAgPSB0aGlzLmxpbmsuZGVmZXJyZWQgfHwgRCgpO1xuICAgICB0aGlzLmNvb2tpZXMgICAgPSB0aGlzLmxpbmsuY29va2llcztcbiAgICAgdGhpcy5sb2dnZXIgICAgID0gTG9nZ2VyLmdldChhcGksIExvZ2dlci5PRkYpOyAvLyB0cmFuc2FjdGlvbi1sZXZlbCBsb2dnaW5nXG4gICAgIHRoaXMucGFyYW1zICAgICA9IHt9O1xuICAgICB0aGlzLmlucHV0cyAgICAgPSBbXTsgLy8gcmlucHV0cyBsaXN0IFxuICAgICB0aGlzLm91dHB1dHMgICAgPSBbXTsgLy8gcm91dHB1dCBvYmplY3QgbGlzdFxuICAgICB0aGlzLnJzdHJlYW0gICAgPSBmYWxzZTtcbiAgICAgdGhpcy5kZWxheWVkICAgID0gZmFsc2U7XG4gICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IHRydWU7IC8vIHN1cHByZXNzfHJhaXNlIGdsb2JhbCBldmVudHMgZm90IHRoaXMgYGlvYCAgICAgXG4gICAgIHRoaXMuZmlsZSAgICAgICA9IG51bGw7IFxuICAgICB0aGlzLmZpbHRlciAgICAgPSBudWxsOyBcblxuICAgICAvLyBwcmVzZXQgZGVwbG95cidzIGFzc2lnbmVkIHJlc3BvbnNlIGZvcm1hdCBmb3IgYHRoaXNgIGFwaVxuICAgICB0aGlzLmRhdGEoeyBmb3JtYXQ6IHRoaXMuYXBpLmZvcm1hdCB9KTtcblxuICAgICAvLyB3cmFwIHN1cGVyYWdlbnQgZm9yIHRoZSBoZWF2eSBsaWZ0aW5nICAgICBcbiAgICAgdGhpcy5yZXEgPSBcbiAgICAgICAgcmVxdWVzdFt0aGlzLmFwaS5tZXRob2QudG9Mb3dlckNhc2UoKV0ob3B0cy5ob3N0ICsgJy9kZXBsb3lyJyArIGFwaSk7XG4gICAgIHRoaXMucmVxLnRpbWVvdXQoMjAgKiA2MCAqIDEwMDApOyAvLyBkZWZhdWx0IHRpbWVvdXQgLS0+IDIwIG1pbnV0ZXNcblxuICAgICAvLyBBbGwgQ09SUyBkZXBsb3lyIGNhbGxzIHJlcXVpcmUgc3RpY2t5IHNlc3Npb25zXG4gICAgIGlmICh3aW4gJiYgZ2xvYmFsT3B0aW9ucy5jb3JzKSB7IHRoaXMucmVxLndpdGhDcmVkZW50aWFscygpOyB9XG5cbiAgICAgLy8gTm9kZS5qcyAtIGFjY2VzcyBhbiBTU0wgZW5kcG9pbnQgd2l0aCBzZWxmIHNpZ25lZCBjZXJ0cyBmb3IgdGVzdGluZ3xkZXZcbiAgICAgaWYgKCF3aW4gJiYgZ2xvYmFsT3B0aW9ucy5hbGxvd1NlbGZTaWduZWRTU0xDZXJ0KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCc7ICAgICAgICBcbiAgICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgc2NvcGUgY29udGV4dCBmb3IgdGhlIGNvbmZpZ3VyZWQgYC5lbmQoKWAgYW5kIGAuZXJyb3IoKWAgZXZlbnQgICAgXG4gICAqIGhhbmRsZXIgY2FsbGJhY2tzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjdHhcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgVGhlIGB0aGlzYCBvYmplY3QgZm9yIHRoZSBjb25maWd1cmVkIGAuZW5kKClgIGFuZFxuICAgKiBgLmVycm9yKClgIGV2ZW50IGhhbmRsZXJzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICBjdHg6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdGhpcy5zY29wZSA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwcmVzcyBvciByYWlzZSBnbG9iYWwgZXZlbnRzIGZvciB0aGlzIGBpb2AgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBnbG9iYWxcbiAgICogQHBhcmFtIHtCb29sZWFufSByYWlzZSBgdHJ1ZWAgdG8gcmFpc2UgZ2xvYmFsIGV2ZW50cywgYGZhbHNlYCB0byBzdXByZXNzIFxuICAgKiBldmVudCBmaXJpbmcgZ2xvYmFsbHkuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgZ2xvYmFsOiBmdW5jdGlvbihyYWlzZSkge1xuICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IExhbmcuaXNCb29sZWFuKHJhaXNlKSA/IHJhaXNlIDogdGhpcy5nbG9iYWxFdnRzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICAvKipcbiAgICogUmV0cmlldmUgZGV0YWlscyBhYm91dCB1c2VyLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGFib3V0XG4gICAqIEByZXR1cm4ge09iamVjdH0gZGV0YWlscyBhYm91dCB1c2VyIG90aGVyd2llcyBgbnVsbGAuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBhYm91dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gdGhpcy5yZXEucmVzO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpWydjYWxsJ10gPT09ICcvci91c2VyL2xvZ2luJyAmJiByZXNwb25zZSA/IFxuICAgICAgICAgICByZXNwb25zZS5ib2R5LmdldCgndXNlcicpIDogbnVsbDtcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdGhlIGNvb2tpZXMgZnJvbSBhIGRpZmZyZW50IGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZVxuICAgKiBhY3Jvc3MgYHRoaXNgIHJlcXVlc3QgYW5kIGFsbCByZXF1ZXN0cyBjaGFpbmVkIHRvIGl0LlxuICAgKlxuICAgKiBAbWV0aG9kIHNoYXJlXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgc2hhcmU6IGZ1bmN0aW9uIChjb29raWVzKSB7XG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuc3RpY2t5KSB7XG4gICAgICBpZiAoZ2xvYmFsT3B0aW9ucy5jb29raWVzKSB7XG4gICAgICAgIHRoaXMuY29va2llcyA9IGdsb2JhbE9wdGlvbnMuY29va2llcy5zbGljZSgwKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29va2llcykgeyBcbiAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzLnNsaWNlKDApOyBcbiAgICAgICAgICBnbG9iYWxPcHRpb25zLnNldCgnY29va2llcycsIHRoaXMuY29va2llcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb29raWVzID0gKGNvb2tpZXMgPyBjb29raWVzLnNsaWNlKDApIDogdGhpcy5jb29raWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBTZXQtQ29va2llLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q29va2llc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29raWVzO1xuICB9LCBcblxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgLy8gVE9ETzogc3VwcG9ydCBkZWxheWVkIHJlcXVlc3RzIGJhc2VkIG9uIG1zIGZvciBub3cgdGhpcyBpcyBqdXN0IGEgcGF1c2UuXG4gICAgdGhpcy5kZWxheWVkID0gIWlzTmFOKHBhcnNlRmxvYXQobXMpKSAmJiBpc0Zpbml0ZShtcykgPyBtcyA6IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgICBcblxuICAvKipcbiAgICogVW53aW5kIHRoZSBxdWV1ZSBjaGFpbiBjbGVhcmluZyByZXF1ZXN0cyB0aGF0IG1pZ2h0IGhhdmUgZGVsYXlzIGF0dGFjaGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGRyYWluXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGRyYWluOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5xLmZsdXNoKCk7IFxuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSwgICBcblxuICAvKipcbiAgICogVGhlIGAucHJvbWlzZSgpYCBtZXRob2QgcmV0dXJucyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBQcm9taXNlIHRoYXQgaXMgXG4gICAqIHJlc29sdmVkIG9uY2UgYWxsIERlcGxveVIgYC5pbygpYCByZXF1ZXN0cyBoYXZlIGVuZGVkLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIHByb21pc2VcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICAgIFxuICBwcm9taXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmQoKTtcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFib3J0IHRoZSBEZXBsb3lSIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgYWJvcnQgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXEuYWJvcnQoKTtcbiAgICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gICAgdGhpcy5kZWZlcnJlZC5yZWplY3QodGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiAnYWJvcnQnLFxuICAgICAgICB0ZXh0OiAnRGVwbG95UiByZXF1ZXN0IGFib3J0ZWQuJ1xuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAgKlxuICAqIEBtZXRob2QgdGltZW91dCAgXG4gICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gIFxuICB0aW1lb3V0OiBmdW5jdGlvbiAobXMpIHtcbiAgICB0aGlzLnJlcS50aW1lb3V0KG1zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogVHVybiBsb2dnaW5nIG9uIGZvciB0aGUgc3BlY2lmaWMgdHJhbnNhY3Rpb24uXG4gICpcbiAgKiBAbWV0aG9kIGxvZ1xuICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAqIEBhcGkgcHVibGljXG4gICovIFxuICBsb2c6IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgIHRoaXMubG9nZ2VyLnNldExldmVsKGxldmVsIHx8IExvZ2dlci5ERUJVRyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmlsdGVycyBzdWNjZXNzZnVsIHJlc3BvbnNlcyB0byBjb250YWluIG9ubHkgYSB0b3AtbGV2ZWwgRGVwbG95UiBBUEkgXG4gICAqIHJlc3BvbnNlIGVudGl0aWVzOlxuICAgKiAtICd1c2VyJ1xuICAgKiAtICdwcm9qZWN0J1xuICAgKiAtICd3b3Jrc3BhY2UnIFxuICAgKiAtICdleGVjdXRpb24nIFxuICAgKiAtICdkaXJlY3RvcnknIFxuICAgKiAtICdyZXBvc2l0b3J5J1xuICAgKiAtICdwYWNrYWdlcycgXG4gICAqICAgXG4gICAqIEBtZXRob2QgZW50aXR5XG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZW50aXR5OiBmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgdGhpcy5maWx0ZXIgPSB1dGlscy5pbkFycmF5KFRPUExFVkVMX0VOVElUSUVTLCBlbnRpdHkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHJlcXVlc3QgZGF0YSBiZWluZyBzZW50IHRvIGEgRGVwbG95UiBBUEkuIFxuICAgKlxuICAgKiBAbWV0aG9kIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTsgICAgXG5cbiAgICAvLyByZW1vdmUgYW55IGlubGluZWQgcmlucHV0KHMpIGFuZCBhdHRhY2ggdGhlbSB0byB0aGUgcmlucHV0KHMpIHByb3BlcnR5XG4gICAgaWYgKGRhdGEucmlucHV0IHx8IGRhdGEucmlucHV0cykge1xuICAgICAgdGhpcy5yaW5wdXQoZGF0YS5yaW5wdXQpO1xuICAgICAgdGhpcy5yaW5wdXRzKGRhdGEucmlucHV0cyk7XG4gICAgfSBcblxuICAgIC8vIHJlbW92ZSBhbnkgYHJlc2VydmVkYCB2YWx1ZXMgdGhhdCBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGJ5IG1pc3Rha2VcbiAgICB2YXIgQkxBQ0tMSVNUID0gWydyaW5wdXQnLCAncmlucHV0cycsICdfX2Nvb2tpZXNfXyddO1xuICAgIEJMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7IGRlbGV0ZSBkYXRhW3BhcmFtXTsgfSk7ICBcblxuICAgIHRoaXMucGFyYW1zID0gbWVyZ2UodGhpcy5wYXJhbXMsIGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqXG4gICAqIEBtZXRob2QgYXR0YWNoXG4gICAqIEBwYXJhbSB7RmlsZXxCbG9ifHBhdGh9IGZpbGUgVGhlIGZpbGUgdG8gYmUgYXR0YWNoZWQgZm9yIGFuIHVwbG9hZC4gRm9yIFxuICAgKiBCcm93c2VyIGVudmlyb25tZW50cyB0aGUgSFRNTDUgRmlsZXxCbG9iIGlzIHVzZWQuIEZvciB0aGUgTm9kZS5qcyBcbiAgICogZW52aXJvbm1lbnQsIGEgZmlsZSBwYXRoIGlzIGFjY2VwdGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgKG9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqIFRoaXMgbmFtZSBkb2VzIG5vdCBoYXZlIHRvIG1hdGNoIHRoZSBhY3R1YWwgc291cmNlIGZpbGVuYW1lLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGF0dGFjaDogZnVuY3Rpb24gKGZpbGUsIGZpbGVuYW1lKSB7XG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkge1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgICAgLy8gb3B0aW9uYWwgZmlsZW5hbWUgaGVyZSBmb3IgY29udmVuaWVuY2VcbiAgICAgIGlmIChmaWxlbmFtZSkgeyB0aGlzLmRhdGEoIHsgZmlsZW5hbWU6IGZpbGVuYW1lIH0gKTsgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgb25seSBpbiBOb2RlLmpzLCB0aGlzIG1ldGhvZCB3b3JrcyBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBcbiAgICogYXR0YWNoIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBmaWxlIHNob3VsZCBiZSByZWFkIGluIGFzIGEgcmVhZGFibGUgXG4gICAqIHN0cmVhbSBkdXJpbmcgYSBmaWxlIHVwbG9hZC5cbiAgICpcbiAgICogQG1ldGhvZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKSB0aGUgUmVhZGFibGUgU3RyZWFtIG9wdGlvbnMgaGFzaC5cbiAgICogIGBgYFxuICAgKiAgICB7IGZsYWdzOiAncicsXG4gICAqICAgICAgZW5jb2Rpbmc6IG51bGwsXG4gICAqICAgICAgZmQ6IG51bGwsXG4gICAqICAgICAgbW9kZTogMDY2NixcbiAgICogICAgICBhdXRvQ2xvc2U6IHRydWVcbiAgICogICAgfVxuICAgKiBgYGBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzdHJlYW06IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJzdHJlYW0gPSAoIXdpbiAmJiB0aGlzLmFwaS51cGxvYWQpOyAvL25vZGVqcyBvbmx5XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8qKlxuICAgKiBBY3RzIGFzIGEgZmluYWxseSBzdGF0ZW1lbnQgYWxsb3dpbmcgeW91IHRvIGV4ZWN1dGUgXCJjbGVhbnVwXCIgdHlwZSB0YXNrcyBcbiAgICogaW4gYSByZXF1ZXN0IGNoYWluLiBJdCBhcnJhbmdlcyBmb3IgY2xlYW51cCB0byBiZSBjYWxsZWQsIHdpdGggbm8gXG4gICAqIGFyZ3VtZW50cywgd2hlbiB0aGUgRGVwbG95UiByZXF1ZXN0IGNoYWluIGlzIGVpdGhlciBjb21wbGV0ZWx5IGZ1bGZpbGxlZCBcbiAgICogb3IgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5zdXJlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGVuc3VyZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5kZWZlcnJlZC5wcm9taXNlLmVuc3VyZShmbik7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuICAgICAgXG4gIC8qKlxuICAgKiBUaGUgZ2VuZXJhbCBmYWlsdXJlIGNhbGxiYWNrLiBJZiBjYWxsZWQsIGFsbCBEZXBsb3lSIGVycm9ycyBmb3IgdGhpcyBcbiAgICogdHJhbnNhY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBoZXJlIHdoZW4gcmFpc2VkLlxuICAgKlxuICAgKiBAbWV0aG9kIGVycm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5vbignZXJyb3InLCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3RyZWFtIHRoZSBEZXBsb3lSIHJlc3BvbnNlIGludG8gdGhlIHBpcGUuIEl0IGlzIGltcG9ydGFudCB0byBub3RlIHRoYXQgaWYgXG4gICAqIHRoZSBgLnBpcGUoKWAgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZSBzZW50LlxuICAgKlxuICAgKiBUaGUgYC5waXBlKClgIG1ldGhvZCBzaG91bGQgYmUgYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBgLmVuZCgpYCBhbmQgXG4gICAqIG5ldmVyIGFsb25nIHNpZGUgb2YgaXQuIGAucGlwZSgpYCBhbmQgYC5lbmQoKWAgYXJlIGFuIGVpdGhlci1vci5cbiAgICpcbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gQSBkZXN0aW5hdGlvbiBTdHJlYW0uXG4gICAqIEByZXR1cm4ge1N0cmVhbX0gVGhlIHBhc3NlZCBpbiBkZXN0aW5hdGlvbiBzdHJlYW0gdG8gYmUgdXNlZCBmb3IgYWRkaXRpb25hbCBcbiAgICogcGlwaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcGlwZTogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICB2YXIgcSAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgPSB0aGlzLmFwaTsgICAgICAgIFxuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7ICAgIFxuICAgICAgLy8gYnJha2UgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdwaXBlKCknLCBhcGksIHRoaXMucmVxKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpOyAgIFxuXG4gICAgICB2YXIgc3RyZWFtID0gdGhpcy5yZXEucGlwZShkZXN0KTtcbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkgeyB9KTsgICAgXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uKCkgeyB9KTsgICAgIFxuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgIFxuICAgIH0sIHRoaXMpO1xuICBcbiAgICBpZiAocS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBpcyByZWFkeSB0byBiZSBzZW50IHRvIERlcGxveVIuIEl0IGlzIGltcG9ydGFudCBcbiAgICogdG8gbm90ZSB0aGF0IGlmIHRoZSBgLmVuZCgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlXG4gICAqIHNlbnQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gXG4gIGVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHNlbGYgICA9IHRoaXMsXG4gICAgICAgIHEgICAgICA9IHRoaXMucSxcbiAgICAgICAgYXBpICAgID0gdGhpcy5hcGksXG4gICAgICAgIGFyZ3MgICA9IG51bGwsXG4gICAgICAgIGVudGl0eSA9IHRoaXMuZmlsdGVyO1xuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7XG4gICAgICAvLyBicmVhayB0aGUgY2FsbCBjaGFpbiBvbiBlcnJvciAgICAgIFxuICAgICAgaWYgKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyb3IpOyAgICAgICAgXG4gICAgICAgIHEuZmx1c2gocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKTsgLy8gZHJhaW4gdGhlIHF1ZXVlXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fcHJlcFJlcXVlc3QocmVzcG9uc2VDaGFpbiwgcHJldkFyZ3MpO1xuXG4gICAgICBMb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpOyAgICBcblxuICAgICAgdGhpcy5yZXEuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnNoYXJlKHNlbGYuY29va2llcyB8fCByZXMuaGVhZGVyc1snc2V0LWNvb2tpZSddKTsgICAgICAgICBcblxuICAgICAgICAvLyAtLSBsb2cgY29va2llcyBhY3Jvc3MgcmVxdWVzdHMgLS1cbiAgICAgICAgaWYgKHNlbGYuY29va2llcykge1xuICAgICAgICAgIExvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgICBzZWxmLmxvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gc2VsZi5faGFuZGxlRXJyb3IocmVzKTtcbiAgICAgICAgdmFyIGRyZXMgPSAocmVzLmJvZHkgJiYgcmVzLmJvZHkuZGVwbG95ciA/IHJlcy5ib2R5IDogcmVzKTsgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgc2VsZi5pbnB1dHMgPSBbXTtcbiAgICAgICAgc2VsZi5vdXRwdXRzID0gW107XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAvLyAtLSBMb2cgZ2xvYmFsICsgdHJhbnNhY3Rpb24gbG9nIC0tXG4gICAgICAgICAgIExvZ2dlci5pbmZvKCdlbmQoKScsIGFwaSwgZHJlcywgcmVzKTtcbiAgICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG5cbiAgICAgICAgICAgLy8gLS0gd2FsayByZXNwb25zZSBmb3IgdG9wLWxldmVsIGVudGl0eSByZXNwb25zZSBhc3NpZ25tZW50IC0tICAgICAgICBcbiAgICAgICAgICAgaWYgKGVudGl0eSkgeyBkcmVzID0gZHJlcy5kZXBsb3lyLnJlc3BvbnNlW2VudGl0eV0gfHwgZHJlczsgfVxuXG4gICAgICAgICAgIGRyZXMuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7IFxuICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KGRyZXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZHJlcy53b3Jrc3BhY2UgPSBmdW5jdGlvbihuYW1lKSB7IFxuICAgICAgICAgICAgICByZXR1cm4gdXRpbHMud29ya3NwYWNlKGRyZXMuZGVwbG95ci5yZXNwb25zZSwgbmFtZSk7IFxuICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIC8vIC0tIGNhbGxiYWNrIC0tXG4gICAgICAgICAgIGlmIChmbikgeyBhcmdzID0gZm4uYXBwbHkoc2VsZi5zY29wZSwgW2RyZXMsIHJlc3BvbnNlQ2hhaW5dKTt9XG5cbiAgICAgICAgICAgLy8gLS0gbm90aWZ5IHRoYXQgdGhlIHF1ZXVlIGhhcyBiZWVuIGRyYWluZWQuLi4gLS1cbiAgICAgICAgICAgaWYgKHEuc2l6ZSgpID09PSAwKSB7IFxuICAgICAgICAgICAgIHNlbGYuX2NsZWFyKCk7XG4gICAgICAgICAgICAgc2VsZi5kZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlQ2hhaW4gfHwgZHJlcyk7XG4gICAgICAgICAgIH0gICAgICAgICAgXG5cbiAgICAgICAgICAgLy8gLS0gaW5jbHVkZSBjb29raWVzIGluIG5leHQgcmVxdWVzdCBpbiB0aGUgcXVldWUgLS1cbiAgICAgICAgICAgYXJncyA9IG1lcmdlKGFyZ3MsIHsgX19jb29raWVzX186IHNlbGYuY29va2llcyB9KTsgICAgICAgICAgXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIHEueWllbGQoZmFsc2UpO1xuICAgICAgICBxLmZsdXNoKGRyZXMsIGVycm9yLCBhcmdzKTsgLy8gcGFzcyByZXN1bHR8ZXJyb3J8YXJncyB0byBuZXh0IFxuICAgICAgfSk7XG5cbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgfSwgdGhpcywgdGhpcy5kZWxheWVkKTtcbiAgXG4gICAgaWYgKCF0aGlzLmRlbGF5ZWQgJiYgcS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LCBcblxuICAvKiogXG4gICAqIEFkZCBhbiBhZGRpdGlvbmFsIElPIHJlcXVlc3QgdG8gdGhlIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIEBtZXRob2QgaW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBPbmUgb2YgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICAgXG4gIGlvOiBmdW5jdGlvbiAoYXBpKSB7ICAgIFxuICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIHsgXG4gICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsIFxuICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGFkZGluZyBhbiBhZGRpdGlvbmFsIHNjcmlwdCBleGVjdXRpb24gdG8gdGhlIFxuICAgKiBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gQXJndW1lbnRzIHRvIGRlZmluZSB0aGUgZnVsbHkgcXVhbGlmaWVkIHNjcmlwdCBmb3IgXG4gICAqIGV4ZWN1dGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc2NyaXB0OiBmdW5jdGlvbigpIHtcbiAgICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgICBhcGkgID0gYXJncy5hcGksXG4gICAgICAgICBsaW5rID0geyBcbiAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsIFxuICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsIFxuICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgIH07ICBcblxuICAgIC8vIGNvbnZlbmllbmNlIC0gaWYgdGhlIHByb2plY3QgaXMgYSBib29sZW4gYHRydWVgIHJhdGhlciB0aGFuIGEgcGlkLCBmaXJzdFxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCB0aGVuIHByZXBhcmUgdGhlIHByb2plY3QgYXBpIGNhbGwgdG8gZXhlY3V0ZVxuICAgIGlmIChhcmdzLmNyZWF0ZSkge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScsIGxpbmspXG4gICAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAgIC5kYXRhKG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCBsaW5rKS5kYXRhKG9wdHMpO1xuICAgIH0gICAgXG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGFuIGFkZGl0aW9uYWwgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIFxuICAgKiBzY3JpcHQgZXhlY3V0aW9uIHRvIHRoZSBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBUaGlzIGNhbGwgZXhlY3V0ZXMgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIHNjcmlwdHMgLnNoLCAuY3NoLCAuYmFzaCwgLmJhdCBcbiAgICogb24gdGhlIERlcGxveVIgc2VydmVyLiBEdWUgdG8gdGhlIHNwZWNpYWwgc2VjdXJpdHkgY29uY2VybnMgYXNzb2NpYXRlZCB3aXRoIFxuICAgKiBleGN1dGluZyBzaGVsbCBzY3JpcHRzIG9uIHRoZSBEZXBsb3lSIHNlcnZlciwgb25seSBzaGVsbCBzY3JpcHRzIG93bmVkIGJ5IFxuICAgKiBfQURNSU5JU1RSQVRPUl8gdXNlcnMgY2FuIGJlIGV4ZWN1dGVkIG9uIHRoaXMgQVBJIGNhbGwuIEFueSBhdHRlbXB0IHRvIFxuICAgKiBleGVjdXRlIGEgc2hlbGwgc2NyaXB0IHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSB0aGF0IGlzIG5vdCBvd25lZCBieSBhbiBcbiAgICogX0FETUlOSVNUUkFUT1JfIHVzZXIgd2lsbCBiZSByZWplY3RlZC5cbiAgICpcbiAgICogVG8gZXhlY3V0ZSBhIHJlcG9zaXRvcnktbWFuYWdlZCBzaGVsbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgXG4gICAqIHBhcmFtZXRlciB2YWx1ZXMgZm9yIF9hdXRob3JfLCBfZGlyZWN0b3J5XywgX2ZpbGVuYW1lXy4gVGhpcyBjYW4gYmVcbiAgICogYWNoaWV2ZWQgYnkgcHJvdmlkaW5nIGEgZnVsbHkgcXVhbGlmaWVkIHNoZWxsIHNjcmlwdCBcbiAgICogYC88YXV0aG9yPi88ZGlyZWN0b3J5Pi88ZmlsZW5hbWU+YCwgZm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICBgYGBcbiAgICogIC5zaGVsbCgnL2FkbWluL2V4dGVybmFsOnB1YmxpYzphZG1pbi9lY2hvLnNoJywgJ2VjaG8uc2ggYXJncyB0byBwYXNzLicpXG4gICAqICBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBzaGVsbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZXBhdGggdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2hlbGwgc2NyaXB0IGZvclxuICAgKiBleGVjdXRpb24uIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXJncyAob3B0aW9uYWwpIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgaW50byB0aGUgc2hlbGwgXG4gICAqIHNjcmlwdCBvbiBleGVjdXRpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHNoZWxsOiBmdW5jdGlvbihwYXRoLCBhcmdzKSB7ICAgXG4gICAgdmFyIGxpbmsgPSB7IFxuICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgfSxcbiAgICAgICAgdG9rZW5zID0gTGFuZy5pc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJ1xcLycpIDogW107XG5cbiAgICAvLyBoYW5kbGUgYm90aDogYC9hdXRob3IvZGlyZWN0b3J5L2ZpbGVuYW1lYCAmIGBhdXRob3IvZGlyZWN0b3J5L2ZpbGVuYW1lYFxuICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMykgeyB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoMSk7IH1cblxuICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcmVwb3NpdG9yeS9zaGVsbC9leGVjdXRlJywgbGluaykuZGF0YSh7XG4gICAgICBhdXRob3I6IHRva2Vuc1swXSxcbiAgICAgIGRpcmVjdG9yeTogdG9rZW5zWzFdLFxuICAgICAgZmlsZW5hbWU6IHRva2Vuc1syXSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KTtcbiAgfSxcblxuICAvKiogXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBleGVjdXRpbmcgYSBibG9jayBvZiBSIGNvZGUgb24gdGhlIFIgc2Vzc2lvbi5cblxuICAgKiBFeGFtcGxlOlxuICAgKiAgYGBgXG4gICAqICAuY29kZSgneDwtNScpXG4gICAqICAvLyAtLSBvciAtLVxuICAgKiAgLmNvZGUoJ3g8LTUnLCBwcm9qZWN0SWQpXG4gICAqICBgYGBcbiAgICogICBcbiAgICogQG1ldGhvZCBjb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByIC0gVGhlIGJsb2NrIG9mIFIgY29kZSB0byBleGVjdXRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdCAtIChvcHRpb25hbCkgaWYgb21pdHRlZCBhIG5ldyBwcm9qZWN0IHdpbGwgZmlyc3QgYmUgXG4gICAqIGNyZWF0ZWQgYW5kIHVzZWQsIG90aGVyd2lzZSBpdCB3aWxsIGV4ZWN1dGUgb24gdGhlIFIgc2Vzc2lvbiBpZGVudGlmaWVkIGJ5IFxuICAgKiB0aGlzIGBwcm9qZWN0YC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29kZTogZnVuY3Rpb24ociwgcHJvamVjdCkge1xuICAgICB2YXIgbGluayA9IHtcbiAgICAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsXG4gICAgICAgICAgICAgcXVldWU6IHRoaXMucSxcbiAgICAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICAgfSxcbiAgICAgICAgIGFwaSA9ICcvci9wcm9qZWN0L2V4ZWN1dGUvY29kZSc7XG5cbiAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJywgbGluaylcbiAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAuZGF0YSh7IGNvZGU6IHIgfSk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCBsaW5rKS5kYXRhKHsgY29kZTogciwgcHJvamVjdDogcHJvamVjdCB9KTtcbiAgICAgfVxuICB9LFxuICBcbiAgLyoqIFxuICAgKiBSZWxlYXNlIGFueSByZXNpZHVhbCBwcm9qZWN0IHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGFwcGxpY2F0aW9uIFxuICAgKiBpbnN0YW5jZSB3aGVuZXZlciBhIGNsaWVudCBhcHBsaWNhdGlvbiB0ZXJtaW5hdGVzLiBUaGlzIGluY2x1ZGVzIGNsb3NpbmcgXG4gICAqIGFueSBzdXBwbGllZCBwcm9qZWN0cyBkb3duIGFuZCBsb2dnaW5nIG91dC5cbiAgICpcbiAgICogQG1ldGhvZCByZWxlYXNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwcm9qZWN0cyBUaGUgcHJvamVjdCBvciBsaXN0IG9mIHByb2plY3RzIHRvIGNsb3NlLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGF1dGggKG9wdGlvbmFsKSB0byByZW1haW4gYXV0aGVudGljYXRlZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcmVsZWFzZTogZnVuY3Rpb24ocHJvamVjdHMsIGF1dGgpIHtcbiAgICAgcHJvamVjdHMgPSBMYW5nLmlzQXJyYXkocHJvamVjdHMpID8gcHJvamVjdHMgOiBbcHJvamVjdHNdO1xuXG4gICAgIHZhciBzZWxmICAgICA9IHRoaXMsXG4gICAgICAgICBkZWZlcnJlZCA9IEQoKSxcbiAgICAgICAgIGVtcHR5ICAgID0gIXByb2plY3RzIHx8ICFwcm9qZWN0c1swXSxcbiAgICAgICAgIGNvdW50ICAgID0gMCxcbiAgICAgICAgIGxhc3QgICAgID0gIWVtcHR5ID8gcHJvamVjdHMubGVuZ3RoIC0gMSA6IGNvdW50LFxuICAgICAgICAgY29va2llcyAgPSB0aGlzLmdldENvb2tpZXMoKTsgICAgICAgICAgIFxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxhc3QpIHtcbiAgICAgICAgaWYgKCFhdXRoKSB7XG4gICAgICAgICAgRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9nb3V0JylcbiAgICAgICAgICAuc2hhcmUoY29va2llcylcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oKSB7ICAgICAgICAgIFxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KSAgICAgIFxuICAgICAgICAgIC5lbmQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cblxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jbG9zZScpXG4gICAgICAgIC5kYXRhKHsgcHJvamVjdDogcHJvamVjdCB9KVxuICAgICAgICAuc2hhcmUoY29va2llcylcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG9nb3V0KGNvdW50KTtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dvdXQoY291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlOyAgXG4gIH0sICBcblxuICAvKiogXG4gICAqIEEgY29udmVuaWVuY2UgYWx0ZXJuYXRpdmUgdG8gbXVsdGlwbGUgYC5yaW5wdXQoKWAgY2FsbHMuIERlZmluZXMgYSBuYW1lIFxuICAgKiBsaXN0IG9mIFIgb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0cyBvbiB0aGUgXG4gICAqIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQ2FsbGluZyB0aGlzIG1ldGhvZCB+LnJvdXRwdXRzKFsgLi4uIF0pYCBpcyBlcXVpdmFsZW50IHRvIGludm9raW5nIG11bHRpcGxlIFxuICAgKiBgLnJvdXRwdXQoLi4uKWAgY2FsbHMuXG4gICAqXG4gICAqIEBtZXRob2Qgcm91dHB1dHNcbiAgICogQHBhcmFtIHtBcnJheX0gcm9iamVjdHMgQSBuYW1lIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dHM6IGZ1bmN0aW9uIChyb3V0cHV0cykge1xuICAgIGlmIChyb3V0cHV0cykgeyB0aGlzLm91dHB1dHMgPSB0aGlzLm91dHB1dHMuY29uY2F0KHJvdXRwdXRzKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIERlcGxveVItZW5jb2RlZCBcbiAgICogUiBvYmplY3Qgb24gdGhlIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2JqZWN0IFRoZSBuYW1lIG9mIHRoZSBSIG9iamVjdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJvdXRwdXQ6IGZ1bmN0aW9uIChyb3V0cHV0KSB7XG4gICAgaWYgKHJvdXRwdXQpIHsgdGhpcy5yb3V0cHV0cyhbcm91dHB1dF0pOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByaW5wdXRzIFRoZSBgUklucHV0YCBsaXN0IG9mIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIFxuICAgKiBvYmplY3QgZGF0YSBmb3IgdXNlIG9uIGFuIEFQSSBjYWxsLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXRzOiBmdW5jdGlvbiAocmlucHV0cykge1xuICAgIGlmIChyaW5wdXRzKSB7IHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuY29uY2F0KHJpbnB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0XG4gICAqIEBwYXJhbSB7UklucHV0fSByaW5wdXQgVGhlIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCBkYXRhIGZvciB1c2UgXG4gICAqIG9uIGFuIEFQSSBjYWxsLiAgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXQ6IGZ1bmN0aW9uIChyaW5wdXQpIHtcbiAgICBpZiAocmlucHV0KSB7IHRoaXMuaW5wdXRzLnB1c2gocmlucHV0KTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIG1ldGhvZC4gRmlyZXMgdGhlIGBkZXN0cm95YCBldmVudCwgcHJpb3IgdG8gaW52b2tpbmcgXG4gICAqIGRlc3RydWN0b3JzIGZvciB0aGUgY2xhc3MgaGllcmFyY2h5LiBDYWxsZWQgaW50ZXJuYWxseSB3aGVuIGAucmVsZWFzZSgpYFxuICAgKiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IFxuICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7IFxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge31cbiAgfSwgIFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9jbGVhcjogZnVuY3Rpb24oKSB7ICAgIFxuICAgIHRoaXMucGFyYW1zICA9IHt9O1xuICAgIHRoaXMuaW5wdXRzICA9IFtdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtdO1xuICAgIHRoaXMucnN0cmVhbSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMuYXBpICAgICA9IG51bGw7ICAgIFxuICAgIHRoaXMuZmlsZSAgICA9IG51bGw7ICBcbiAgICB0aGlzLmZpbHRlciAgPSBudWxsO1xuICB9LCBcblxuICAvKipcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBfcHJlcFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXNwb25zZUNoYWluLCBhcmdzKSB7XG4gICAgdmFyIHJlcSAgPSB0aGlzLnJlcSxcbiAgICAgICAgZmlsZSA9IHRoaXMuZmlsZTtcblxuICAgIC8vIHNldCB0aGUgcmVxdWVzdCB0eXBlICAgIFxuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHtcbiAgICAgICAvLyBJZiB0aGUgZW52IGlzIHRoZSBCcm93c2VyIHRoZXJlIGlzIG5vIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZVxuICAgICAgIC8vIENvbnRlbnQtVHlwZS4gVGhlIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHNldCB0aGUgXG4gICAgICAgLy8gXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0uLi5cIiB2YWx1ZS4gSWYgdGhlIGVudiBpcyBOb2RlIHdlIG5lZWRcbiAgICAgICAvLyB0byBzZXQgaXQgbWFudWFsbHkuXG4gICAgICAgaWYgKCF3aW4pIHsgdGhpcy5yZXEudHlwZSgnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpOyB9ICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXEudHlwZSgnZm9ybScpO1xuICAgIH0gICAgXG5cbiAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7IFxuICAgICAgZXJyID0gZXJyIHx8IHsgIGNvZGU6ICdVTktOT1dOIENPREUnLCB0ZXh0OiAnVU5LTk9XTiBFUlJPUicgfTtcblxuICAgICAgdGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiBlcnIuY29kZSB8fCAnVU5LTk9XTiBDT0RFJyxcbiAgICAgICAgdGV4dDogZXJyXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpOyAgICBcblxuICAgIHRoaXMuc2hhcmUoYXJncyA/IGFyZ3MuX19jb29raWVzX18gOiBudWxsKTtcblxuICAgIC8vIGFyZ3VtZW50cyByZXR1cm5lZCBmcm9tIHByZXYgcmVxdWVzdCdzIGlvKCkuZW5kKGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfSlcbiAgICBpZiAoYXJncykgeyBcbiAgICAgICB0aGlzLmRhdGEoYXJncyk7XG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlucHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgaW5wdXRzOiBlbmNvZGVyLmVuY29kZSh0aGlzLmlucHV0cykgfSk7IFxuICAgIH1cbiAgXG4gICAgaWYgKHRoaXMub3V0cHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgcm9iamVjdHM6IHRoaXMub3V0cHV0cy5qb2luKCkgfSk7IFxuICAgIH0gICAgXG5cbiAgICBpZiAodGhpcy5jb29raWVzKSB7ICAgICBcbiAgICAgIHRoaXMuY29va2llcy5mb3JFYWNoKCBmdW5jdGlvbihjKSB7IHJlcS5zZXQoJ0Nvb2tpZScsIGMpOyB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7ICAgIFxuICAgICAgZm9yKHZhciBwIGluIHRoaXMucGFyYW1zKSB7XG4gICAgICAgcmVxLmZpZWxkKHAsIHRoaXMucGFyYW1zW3BdID8gdGhpcy5wYXJhbXNbcF0gKyAnJyA6ICcnKTsgIFxuICAgICAgfSBcbiAgICAgIHJlcS5hdHRhY2goJ2ZpbGUnLCB0aGlzLnJzdHJlYW0gPyBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpIDogZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVt0aGlzLmFwaS5tZXRob2QgPT09ICdHRVQnID8gJ3F1ZXJ5JyA6ICdzZW5kJ10odGhpcy5wYXJhbXMpO1xuICAgIH0gXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHN0YXQgID0gcmF3LnN0YXR1cyxcbiAgICAgICAgcmVzICAgPSAocmF3LmJvZHkgJiYgcmF3LmJvZHkuZGVwbG95ciA/IHJhdy5ib2R5IDogcmF3KSxcbiAgICAgICAgZXJyb3IgPSAoKHN0YXQgIT09IDIwMCkgfHwgcmVzLmRlcGxveXIgJiYgIXJlcy5kZXBsb3lyLnJlc3BvbnNlLnN1Y2Nlc3MpO1xuXG4gICAgLy8gLS0gSGFuZGxlIGVycm9ycyAtLVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmVzID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KHRoaXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGxveXI6IHsgICAgICAgICAgXG4gICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbDogdGhpcy5hcGlbJ2NhbGwnXSxcbiAgICAgICAgICAgIGVycm9yQ29kZTogcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiBzdGF0LFxuICAgICAgICAgICAgZXJyb3I6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3IgOiByZXMudGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgTG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcblxuICAgICAgLy8gLS0gbm90aWZ5IGdsb2JhbCBlcnJvcnMgZmlyc3QgKGlmIGFueSkgZm9yIHRoaXMgY2FsbCAtLSAgICAgIFxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRXZ0cykge1xuICAgICAgICByYWlzZUdsb2JhbEVycm9ycyh0aGlzLmFwaVsnY2FsbCddLCByZXMpOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC8vIC0tIHRyYW5hY3Rpb24gbGV2ZWwgSFRUUCBvciBEZXBsb3lSIGVycm9ycyBjb21lIG5leHQgLS0gICAgXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcmVzKTtcbiAgICAgIHRoaXMuZW1pdCgnZGVwbG95ci1pbzonICsgcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlLCByZXMpO1xuICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QocmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEluY2x1ZGUgdGhlIGBkZXByZWNhdGVkYCBqc0RlcGxveVIgZm9yIG5vdy5cbmlmICh3aW4pIHtcbiAgd2luZG93LlJldm9sdXRpb24gPSB3aW5kb3cuUmV2b2x1dGlvbiB8fCByZXF1aXJlKCcuL2xpYi9kZXByZWNhdGVkJyk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBFeHBvc2UgZm9yIGEgY2xlYW5lciBjbGllbnQgYXBpIGludG8gRGVwbG95UlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogRXhwb3NlcyB0aGUgYERlcGxveVJgIG9iamVjdCBmb3IgZXh0ZW5kaW5nLlxuICAgKlxuICAgKiBgYGB2YXIgRGVwbG95UiA9IHJlcXVpcmUoJ2RlcGxveXInKS5EZXBsb3lSO2BgYFxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBgRGVwbG95UmAgb2JqZWN0LlxuICAgKi8gICBcbiAgRGVwbG95UjogRGVwbG95UixcblxuICAvKipcbiAgICogRXhwb3NlcyB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICpcbiAgICogQG1ldGhvZCBhcGlzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhdCAob3B0aW9uYWwpIGlmIGB0cnVlYCB3aWxsIHJldHVybiBhbiBhcnJheSBvZiBqdXN0IHRoZSBcbiAgICogQVBJJ3MgZW5kcG9pbnQgcHJvcGVydGllcywgZm9yIGV4YW1wbGU6IFxuICAgKiBgYGBcbiAgICogWycvci91c2VyL2xvZ2luJywgJy9yL3VzZXIvbG9nb3V0JywgJy9yL3VzZXIvYWJvdXQnLCAuLi5dXG4gICAqIGBgYFxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqIEByZXR1cm4ge09iamVjdHxBcnJheX0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgICAgXG4gICAqLyAgXG4gIGFwaXM6IGZ1bmN0aW9uKGZsYXQpIHtcbiAgICByZXR1cm4gZmxhdCA/IE9iamVjdC5rZXlzKGFwaXMpIDogYXBpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHN0YXRpYyBtZXRob2QgZm9yIGNvbmZpZ3VyaW5nIGFsbCBEZXBsb3lSIHJlcXVlc3RzLiBTZXR0aW5ncyBcbiAgICogbWFkZSBoZXJlIGFyZSBhcHBsaWVkIGdsb2JhbGx5IGFjcm9zcyBldmVyeSByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGNvbmZpZ3VyZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHN0YXRpY1xuICAgKiBAY2hhaW5hYmxlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25maWd1cmU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykgeyBnbG9iYWxPcHRpb25zLnNldChpLCBvcHRpb25zW2ldKTsgfVxuXG4gICAgLy8gYXNzZXJ0IGdsb2JhbCBjb29raWVzIGFyZSBlbXB0eSBpZiBnbG9iYWwgYHN0aWNreWAganNlc3Npb25pZCBpcyBvZmZcbiAgICBpZiAoIWdsb2JhbE9wdGlvbnMuc3RpY2t5KSAgeyBnbG9iYWxPcHRpb25zLnNldCgnY29va2llcycsIG51bGwpOyB9XG5cbiAgICAvLyB0dXJuIGdsb2JhbCBsb2dnaW5nIG9ufG9mZiAob2ZmIGJ5IGRlZmF1bHQpXG4gICAgTG9nZ2VyLnNldExldmVsKGdsb2JhbE9wdGlvbnMubG9nZ2luZyA/IExvZ2dlci5ERUJVRyA6IExvZ2dlci5PRkYpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBJTyByZXF1ZXN0cyB0byBgRGVwbG95UmAuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYCAgIFxuICAgKiAgICBkZXBsb3lyLmlvKCcvci91c2VyL2Fib3V0JykuZW5kKGNhbGxiYWNrKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBtZXRob2QgaW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBPbmUgb2YgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBpbzogZnVuY3Rpb24oYXBpKSB7ICBcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBAbWV0aG9kIGF1dGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJuYW1lIFNwZWNpZmllcyB0aGUgdXNlcm5hbWUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZCBTcGVjaWZpZXMgdGhlIHBhc3N3b3JkLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICBcbiAgYXV0aDogZnVuY3Rpb24odW4sIHB3KSB7XG4gICAgdmFyIGRhdGEgPSB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH07XG4gICAgcmV0dXJuIERlcGxveVIubmV3KCcvci91c2VyL2xvZ2luJykuZGF0YShkYXRhKS5lbmQoKTsgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHNpZ24gdGhlIHVzZXIgaW4gYnkgYXV0aGVudGljYXRpbmcgdGhlIGNyZWRlbnRpYWxzIFxuICAgKiB3aXRoIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCcvdGVzdHVzZXIvcm9vdC9yZWR1Y2UuUicpXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KHsgZmlsZW5hbWU6ICdyZWR1Y2UuUicsIGF1dGhvcjogJ3Rlc3R1c2VyJyxcbiAgICogICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6ICdyb290J30pXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCdyZWR1Y2UuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJywgcHJvamVjdCkgICAgIFxuICAgKiBgYGAgICBcbiAgICpcbiAgICogQG1ldGhvZCBzY3JpcHRcbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3VtZW50cyBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IFxuICAgKiBmb3IgZXhlY3V0aW9uLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICAgIFxuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuc2lnbmF0dXJlKGFyZ3VtZW50cyksXG4gICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgIGFwaSAgPSBhcmdzLmFwaTsgIFxuXG4gICAgLy8gY29udmVuaWVuY2UgLSBpZiB0aGUgcHJvamVjdCBpcyBhIGJvb2xlbiBgdHJ1ZWAgcmF0aGVyIHRoYW4gYSBwaWQsIGZpcnN0XG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHRoZW4gcHJlcGFyZSB0aGUgcHJvamVjdCBhcGkgY2FsbCB0byBleGVjdXRlXG4gICAgaWYgKGFyZ3MuY3JlYXRlKSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJylcbiAgICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgICAgLmRhdGEob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpLmRhdGEob3B0cyk7XG4gICAgfVxuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJ1biBhbiBzZXJpZXMgb2YgY2hhaW5lZCBEZXBsb3lSIHJlcXVlc3RzIGluIHNlcXVlbmNlIGFuZCB3aXRob3V0IG92ZXJsYXAuICAgICAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHBpcGxpbmVcbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3MgU3BlY2lmaWVzIHRoZSBsaXN0IG9mIGBGdW5jdGlvbmAgdGFza3MuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgcGlwZWxpbmU6IGZ1bmN0aW9uKGNoYWlucykgeyAgICAgIFxuICAgIHZhciBkZXBsb3lyICA9IHRoaXMsXG4gICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICBxICAgICAgICA9IG5ldyBRdWV1ZSgpLFxuICAgICAgICByZXN1bHRzICA9IFtdLFxuICAgICAgICBlcnJvcnMgICA9IFtdLFxuICAgICAgICBOT09QICAgICA9IG51bGwsIC8vIE5PT1AgZXJyb3JzfHJlc3VsdHMgZm9yIFthXSBiYXRjaCByZXF1ZXN0IGNoYWluXG4gICAgICAgIG9yaWcgICAgID0ge1xuICAgICAgICAgIHN0aWNreTogZ2xvYmFsT3B0aW9ucy5zdGlja3ksXG4gICAgICAgICAgY29va2llczogZ2xvYmFsT3B0aW9ucy5jb29raWVzXG4gICAgICAgIH07XG5cbiAgICAvLyBtYWtlIGEgY29weVxuICAgIGNoYWlucyA9IGNoYWlucy5zbGljZSgwKTtcblxuICAgIC8vIHR1cm4gc3RpY2t5IHNlc3Npb24gZm9yIHRoZXNlIHJlcXVlc3QgKGhhY2t5KVxuICAgIGRlcGxveXIuY29uZmlndXJlKCB7IHN0aWNreTogdHJ1ZSB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHEuYWRkKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgY2hhaW5zLnNoaWZ0KCkuZHJhaW4oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihjaGFpbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChjaGFpbik7ICBcbiAgICAgICAgICBlcnJvcnMucHVzaChOT09QKTsgICAgICAgICAgIFxuICAgICAgICAgIGlmIChxLmlzRW1wdHkoKSkgeyBcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKG9yaWcpOyAvLyByZXNldFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7IHJlc3VsdHM6IHJlc3VsdHMsIGVycm9yczogZXJyb3JzIH0pOyBcbiAgICAgICAgICB9ICBcblxuICAgICAgICAgIHEudGFrZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHsgICAgICAgICAgXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKE5PT1ApOyBcbiAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgIC8vIHJlamVjdGlvbnMgYXJlIG9ubHkgbWV0IHdoZW4gdGhleSBbYWxsXSBmYWlsXG4gICAgICAgICAgaWYgKHEuaXNFbXB0eSgpICYmIHJlc3VsdHMubGVuZ3RoID09PSAwKSB7IFxuICAgICAgICAgICAgZGVwbG95ci5jb25maWd1cmUob3JpZyk7IC8vIHJlc2V0XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3JzKTsgXG4gICAgICAgICAgfSAgXG4gICAgICAgICAgcS50YWtlKCk7XG4gICAgICAgIH0pOyAgICAgICBcbiAgICAgIH0sIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgdG8gYSBzZXEgcXVldWUgZm9yIGJldHRlciBoYW5kbGluZ1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGFpbnMubGVuZ3RoOyBpKyspIHsgYWRkKCk7IH1cblxuICAgIC8vIHN0YXJ0OiBkZXF1ZXVlIGZpcnN0IGl0ZW0gYW5kIHJ1biBpdFxuICAgIHEudGFrZSgpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBzdHJlYW0gQVBJIGlzIHVuaXF1ZSB3aXRoaW4gdGhlIERlcGxveVIgQVBJIGFzIGl0IHN1cHBvcnRzIHB1c2ggXG4gICAqIG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgRGVwbG95UiBzZXJ2ZXIgdG8gY2xpZW50IGFwcGxpY2F0aW9ucy4gTm90aWZpY2F0aW9ucyBcbiAgICogY29ycmVzcG9uZCB0byBkaXNjcmV0ZSBldmVudHMgdGhhdCBvY2N1ciB3aXRoaW4gdGhlIERlcGxveVIgc2VydmVyLiBUaGVyZSBcbiAgICogYXJlIGZvdXIgZGlzdGluY3QgZXZlbnQgY2F0ZWdvcmllczpcbiAgICogXG4gICAqIC0gU3RyZWFtIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBFeGVjdXRpb24gZXZlbnRzXG4gICAqIC0gSm9iIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBNYW5hZ2VtZW50IGV2ZW50c1xuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogZGVwbG95ci5lcyh7IHVzZXJuYW1lOiAndGVzdHVzZXInLCBwYXNzd29yZDogJ3NlY3JldCcgfSlcbiAgICogICAgLy8gLS0gY29ubmVjdGlvbiBjaG9pY2VzIGZvciBldmVudCB0eXBlcyAtLVxuICAgKiAgICAubWFuYWdlbWVudCgpICAvLy5zZXNzaW9uKCkgfCAuYWxsKCkgfCAucHJvamVjdChpZCkgfCAuam9iKGlkKVxuICAgKiAgICAub24oJ2VzOmdyaWRIZWFydGJlYXQnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJ2VzOmdyaWRIZWFydGJlYXQnKTtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09Jyk7ICAgICAgICAgIFxuICAgKiAgICAgfSlcbiAgICogICAgIC5vcGVuKCk7XG4gICAqIGBgYFxuICAgKiBcbiAgICogQG1ldGhvZCBlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gYSBuZXcgYEV2ZW50U3RyZWFtYCBmb3IgYmluZGluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgZXM6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgICAgXG4gICAgdmFyIHN0cmVhbSA9IEV2ZW50U3RyZWFtLm5ldyhnbG9iYWxPcHRpb25zLmhvc3QsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51c2VybmFtZSAmJiBvcHRpb25zLnBhc3N3b3JkKSB7XG4gICAgICB2YXIgcnVzZXIgPSB0aGlzLmF1dGgob3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBydXNlci5lbnN1cmUoZnVuY3Rpb24oKSB7IFxuICAgICAgICBzdHJlYW0uc2hhcmUocnVzZXIuZ2V0Q29va2llcygpKTtcbiAgICAgICAgc3RyZWFtLmZsdXNoKCk7IFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgZmFjdG9yeSBmb3IgY3JlYXRpbmcgYSBEZXBsb3lSLXNwZWNpZmljIGVuY29kZWQgUiBvYmplY3QgdG8gYmUgXG4gICAqIHNlbnQgYXMgaW5wdXQgcGFyYW1ldGVycyB0byBhbiBSIHNjcmlwdC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5sb2dpY2FsKCdsb2dpY2FsX25hbWUnLCB0cnVlKTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0Lm51bWVyaWMoJ251bWVyaWNfbmFtZScsIDEwLjUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQuaW50ZWdlcignaW50ZWdlcl9uYW1lJywgNSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5jaGFyYWN0ZXIoJ2NoYXJhY3Rlcl9uYW1lJywgJ0hlbGxvJyk7XG4gICAqICAgIC8vIGVjdC4uLlxuICAgKiBgYGBcbiAgICogQHByb3BlcnR5IFJJbnB1dFxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBSSW5wdXQ6IHtcbiAgICBudW1lcmljOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljKCk7XG4gICAgfSxcblxuICAgIGludGVnZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXIoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbCgpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlcigpO1xuICAgIH0sXG5cbiAgICBkYXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlKCk7XG4gICAgfSxcblxuICAgIHBvc2l4Y3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLnBvc2l4Y3QoKTtcbiAgICB9LCAgXG5cbiAgICBudW1lcmljVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNWZWN0b3IoKTtcbiAgICB9LCBcblxuICAgIGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyVmVjdG9yKCk7XG4gICAgfSwgIFxuXG4gICAgZGF0ZVZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGVWZWN0b3IoKTtcbiAgICB9LCAgXG5cbiAgICBwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdFZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBsaXN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5saXN0KCk7IFxuICAgIH0sXG5cbiAgICBkYXRhZnJhbWU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRhZnJhbWUoKTtcbiAgICB9LFxuICBcbiAgICBmYWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcbiAgICAgIHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5mYWN0b3IoKTtcbiAgICB9LFxuXG4gICAgb3JkZXJlZDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgdmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLm9yZGVyZWQoKTtcbiAgICB9LFxuXG4gICAgbnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgaW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJNYXRyaXgoKTtcbiAgICB9XG4gIH1cbn07Il19
},{"./apis.json":20,"./lib/deprecated":22,"./lib/emitter":23,"./lib/encoder":24,"./lib/es":25,"./lib/lang":26,"./lib/logger":27,"./lib/queue":29,"./lib/rinput":30,"./lib/rinputs":31,"./lib/selfish":33,"./lib/utils":34,"_process":18,"d.js":19,"fs":17,"superagent":35}],22:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    Base = require('./selfish').Base,
    RInput = require('./rinput');

var Deprecated,
    emitter,
    _config = {},
    TOPLEVEL_ENTITIES = [
        'user',
        'project',
        'workspace',
        'execution',
        'directory',
        'repository',
        'packages'
    ];

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

var SessionManager = {
    ENDPOINT_WHITELIST: {
        login: '/r/user/login',
        logout: '/r/user/logout',
        projectCreate: '/r/project/create',
        projectClose: '/r/project/close',
        projectAboutUpdate: '/r/project/about/update',
        projectSave: '/r/project/save',
        projectSaveAs: '/r/project/saveas',
        // --- private APIS ---
        clientProjectSave: '/r/client/project/save',
        clientProjectClose: '/r/client/project/close'
    },

    session: {},

    config: {},

    setUnloadConfig: function(config) {
        config = config || {};
        this.config = {
            disableautosave: config.disableautosave || true,
            dropworkspace: config.dropworkspace || true,
            dropdirectory: config.dropdirectory || true,
            drophistory: config.drophistory || true,
            flushhistory: config.flushhistory || true
        };
    },
    setSession: function(session) {
        this.session = session;
    },
    setProject: function(project) {
        this.session.project = project;
    },
    clearSession: function() {
        this.session = {};
    },
    clearProject: function() {
        this.session.project = null;
    },
    unloadHandler: function() {
        try {
            var project = this.session.project;
            if (project) {

                var data = this._config;
                data.project = project.id;
                data.projectcookie = project.cookie;

                deployr.io('/r/project/close')
                    .data(data)
                    .sync()
                    .end();
            }
        } catch (e) {
            throw new Error(e);
        }
    }
};

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function format(response, transEntity) {
    // -- transaction entity formats override global entity formats --  
    //var format = transEntity || _config.entity;
    var format = transEntity || globalConfig.entity;

    if (format) {
        var resObj = response.deployr.response,
            // -- top-level entities --
            entities = TOPLEVEL_ENTITIES;

        for (var index = 0; index < entities.length; index++) {
            var entity = entities[index];

            if (resObj[entity] && format[entity]) { // response entity hit
                // -- user-defined parse for top-level entity --                
                if (format[entity].parser) {
                    var formatScope = format[entity].scope || this;
                    resObj[entity] = format[entity].parser.call(formatScope, resObj[entity]);
                }
            }
        }
    }

    return response;
}

function changeEndpoint(response, endpoint, args) {

    var resObj = response.deployr.response,
        ENDPOINT = SessionManager.ENDPOINT_WHITELIST;

    switch (endpoint) {

        case ENDPOINT.login:

            SessionManager.setSession({
                httpcookie: resObj.httpcookie,
                user: resObj.user,
                limits: resObj.limits,
                project: null
            });
            break;

        case ENDPOINT.logout:
            SessionManager.clearSession();
            break;

        case ENDPOINT.projectClose:
        case ENDPOINT.clientProjectClose:
            SessionManager.clearProject();
            break;

        case ENDPOINT.projectCreate:
        case ENDPOINT.projectAboutUpdate:
        case ENDPOINT.projectSave:
        case ENDPOINT.projectSaveAs:
        case ENDPOINT.clientProjectSave:
            var project = resObj.project;
            SessionManager.setProject({
                id: project.project,
                cookie: project.cookie
            });
            break;

    } // end switch

    Deprecated.Event.fire('DeployR:endpointChange', {
        response: response,
        endpoint: endpoint,
        args: args
    });
}


function camelCase(input) {
    // convert format: '/r/user/login' --> 'userLogin'
    input = input.replace('\/r\/', '');
    return input.toLowerCase().replace(/\/(.)/g, function(match, segment) {
        return segment.toUpperCase();
    });
}

// turn the old deprecated inputs into new inputs
function normalizeInputs(inputs) {
    var rinputs = [];

    for (var i = 0; i < inputs.length; i++) {
        rinputs.push(inputs[i].normalize());
    }

    return rinputs;
}

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

/**
 * The Deprecated interface.
 */
var RData = Base.extend({
    initialize: function(type, rclass, rinput) {
        this.type = type;
        this.rclass = rclass;
        this.rinput = rinput;
    },

    getType: function() {
        return this.type;
    },

    getRClass: function() {
        return this.rclass;
    },

    getName: function() {
        return this.rinput.name;
    },

    getValue: function() {
        return this.rinput.value;
    },

    getLevels: function() {
        return this.rinput.levels;
    },

    getLabels: function() {
        return this.rinput.labels;
    },

    getOrdered: function() {
        return this.rinput.ordered;
    },

    normalize: function() {
        return this.rinput;
    }
});

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function Emitter(obj) {  
  
}

function debug(msg) {  
}

Emitter.prototype = {

  events: {},

  scope: null,

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event fired
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event was removed
   */
  removeAllListeners: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  removeListenerAt: function(name, index) {
    var array = this.events[name],
        rest = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @returns {Boolean} `true` if an event was removed
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.removeAllListeners(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.removeListenerAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }
};


emitter = new Emitter();

/**
 * Provides simple adapter methods which wrap the raw <code>Revolution.DeployR.io(...)</code>
 * remote DeployR API AJAX transactions. These methods are an opt-in feature to
 * complement the low level DeployR IO communication.
 *
 * @class Revolution.DeployR.PublicAdapter
 * @extensionfor Revolution.DeployR
 */

Deprecated = {
    version: require('../package').version,

    Event: {
        on: function(type, fn, scope) {
            emitter.on(type, fn, scope);
        },

        detach: function(type, fn, obj) {
            emitter.off(type, fn);            
        }
    },

    RDataFactory: {
        createNumeric: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).numeric());
        },

        createInteger: function(name, value) {
            return RData.new('primitive', 'integer', RInput.new(name, value).integer());
        },

        createBoolean: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).logical());
        },

        createString: function(name, value) {
            return RData.new('primitive', 'character', RInput.new(name, value).character());
        },

        createDate: function(name, value) {
            return RData.new('date', 'Date', RInput.new(name, value).date());
        },

        createPOSIXDate: function(name, value) {
            return RData.new('date', 'POSIXct', RInput.new(name, value).posixct());
        },

        createNumericVector: function(name, value) {
            return RData.new('vector', 'numeric', RInput.new(name, value).numericVector());
        },

        createIntegerVector: function(name, value) {
            return RData.new('vector', 'integer', RInput.new(name, value).integerVector());
        },

        createBooleanVector: function(name, value) {
            return RData.new('vector', 'logical', RInput.new(name, value).logicalVector());
        },

        createStringVector: function(name, value) {
            return RData.new('vector', 'character', RInput.new(name, value).characterVector());
        },

        createDateVector: function(name, value) {
            return RData.new('type', 'Date', RInput.new(name, value).dateVector());
        },

        createPOSIXDateVector: function(name, value) {
            return RData.new('vector', 'POSIXct', RInput.new(name, value).posixctVector());
        },

        createList: function(name, value) {
            return RData.new('list', 'list', RInput.new(name, value).list());
        },

        createDataframe: function(name, value) {
            return RData.new('dataframe', 'data.frame', RInput.new(name, value).dataframe());
        },

        createFactor: function(name, value, ordered, levels, labels) {
            var opts = {
                levels: levels,
                labels: labels
            };

            if (ordered) {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).ordered());
            } else {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).factor());
            }
        },

        createNumericMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).numericMatrix());
        },

        createIntegerMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).integerMatrix());
        },

        createBooleanMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).logicalMatrix());
        },

        createStringMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).characterMatrix());
        }
    }, // RDataFactory

    DeployR: {

        init: function(config) {
            config = config || {};

            // --- Assert JSDeploy compatability against the connected DeployR version ---
            if (config.compatibility) {
                //compatibilityCheck();
            }

            // --- Event registration ---
            if (config.events) {
                var events = config.events;

                // -- Manage cleanup on browser close (close project, logout, ect...)--
                if (events.unload) {
                    SessionManager.setUnloadConfig(events.unload);
                    Deprecated.Event.on('deployR:unload', SessionManager.unloadHandler, SessionManager);
                }

                // -- IO Global Events --
                if (events.globalIO) {
                    var scope = events.globalIO.scope || window,
                        lifecycle = events.globalIO.lifecycle,
                        statusCode = events.globalIO.statusCode;

                    if (lifecycle) {
                        for (var eventName in lifecycle) {
                            Deprecated.Event.on('deployR-io:' + eventName, lifecycle[eventName], scope);
                        }
                    }

                    if (statusCode) {
                        for (var eventName in statusCode) {
                            Deprecated.Event.on('deployR-io:' + eventName, statusCode[eventName], scope);
                        }
                    }
                }
            }

            // New API
            deployr.configure({
                host: config.deployrURI,
                cors: config.deployrURI ? true : false,
                logging: config.logging,
                sticky: true
            });
        },

        io: function(api, config, cb) {
            if (console) {
                console.warn('"' + camelCase(api) + '()" API is now deprecated.');
            }

            cb = cb || {};
            config = config || {};

            var transaction = config.transaction || {},
                transArgs = transaction['arguments'],
                statusCode = transaction.statusCode || {},
                scope = cb.scope || window,
                routputs = config.robjects,
                rinputs = config.inputs; // config.inputs = R.DeployR.parseInputs(config.inputs);

            // --- omit deprecated props ---
            if (config.transaction) {
                delete config.transaction;
            }
            if (config.method) {
                delete config.method;
            }
            if (config.on) {
                delete config.on;
            }
            if (config.format) {
                delete config.format;
            }
            if (config.inputs) {
                delete config.inputs;
            }
            if (config.robjects) {
                delete config.robjects;
            }

            // --- make the new request ---
            var io = deployr.io(api)
                .data(config || {})
                .error(function(response) {
                    // global-failure
                    emitter.emit('deployR-io:failure', [response, api, transArgs]);

                    // transaction-failure
                    if (cb.failure) {
                        cb.failure.apply(scope, [response, api, transArgs]);                        
                    }

                    // global-statusError
                    emitter.emit(('deployR-io:' + code), [response, api, transArgs]);
                });

            if (rinputs) {
                io.rinputs(normalizeInputs(rinputs));
            }
            if (routputs) {
                io.routputs(routputs);
            }
            if (transaction.sync) {
                io.sync();
            }
            if (transaction.timeout) {
                io.timeout(transaction.timeout);
            }

            // --- Error status code --- //
            if (statusCode) {

                for (var eventName in statusCode) {                    
                    io.on('deployr-io:' + eventName, function(response) {
                        var cb = statusCode;
                        var statusText = response.deployr.response.error;
                        var status = response.deployr.response.errorCode;
                        cb[status].apply(scope, [response, status, statusText, api, transArgs]);
                    });
                }                

                // @@@@TODO @@@@@@
            }

            // global-start
            emitter.emit('deployR-io:start');

            /// transaction-start
            if (cb.start) {
                cb.start.apply(scope, [api, transArgs]); 
            }

            io.end(function(response) {
                // global-complete
                emitter.emit('deployR-io:complete');

                // transaction-complete
                if (cb.complete) {
                    cb.complete.apply(scope, [response, api, transArgs]); 
                }

                // entity manipulation of the response
                if (transaction.entity) {
                    response = format(response, transaction.entity);
                }

                // global-success
                emitter.emit('deployR-io:success', [response, api]);

                // transaction-success
                if (cb.success) {
                    cb.success.apply(scope, [response, api, transArgs]);                    
                }

                // global-end
                emitter.emit('deployR-io:end', [response, api]);

                // transaction-end
                if (cb.end) {
                    cb.end.apply(scope, [response, api, transArgs]); 
                }                
            });

            return io;
        },

        /**
         * Flattens a given <code>Revolution.RData</code> type into a JSON
         * string representing the expected DeployR input format.
         *
         * @method parseInputs
         * @public
         * @param {Array} rdata An Array of RData Objects to be flattened.
         * @return {String} The flattend RData JSON string representing the
         * DeployR input format.
         */
        parseInputs: function(rdata) {
            return rdata;
        },

        /////////////////////////////////////
        // Project Workspace APIs
        //////////////////////////////////////

        /**
         * This call lists the objects in the workspace for the project indicated.
         *
         * @method projectWorkspaceList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>root</dt>
         *    <dd>(optional) specifies object graph root</dd>
         *
         *    <dt>clazz</dt>
         *    <dd>(optional) specifies R class based filter</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies R object name based filter</dd>
         *
         *    <dt>restrict</dt>
         *    <dd>
         *       (optional) if <code>true</code, limits returned objects to object
         *       types with supported RevoDeployR-encoding
         *    </dd>
         *
         *    <dt>pagesize</dt>
         *    <dd>
         *       (optional) specifies the page size for paging results in response
         *       markup
         *    </dd>
         *
         *    <dt>pageoffset</dt>
         *    <dd>
         *       (optional) specifies the page offset for paging results in response
         *       markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceList: function(config, callback) {
            return this.io('/r/project/workspace/list', config, callback);
        },

        /**
         * This call retrieves RevoDeployR-encoded objects from the workspace for the
         * specified project.
         *
         * @method projectWorkspaceGet
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of object names</dd>
         *
         *    <dt>root</dt>
         *    <dd>optional) specifies object graph root</dd>
         *
         *    <dt>start</dt>
         *    <dd>optional) specifies the offset into object data</dd>
         *
         *    <dt>length</dt>
         *    <dd>optional) specifies the segment of object data to retrieve</dd>
         *
         *      <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies a custom value for Infinity appearing in R
         *       object data returned on the call, otherwise Infinity is represented
         *       by 0x7ff0000000000000L
         *    </dd>
         *
         *      <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on the call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceGet: function(config, callback) {
            return this.io('/r/project/workspace/get', config, callback);
        },

        /**
         * This call uploads a binary object from file into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file</dd>
         *
         *    <dt>file</dt>
         *    <dd>file content</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/workspace/upload', config, callback);
        },

        /**
         * This call transfers a binary object from a URL into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file found on the URL</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceTransfer: function(config, callback) {
            return this.io('/r/project/workspace/transfer', config, callback);
        },

        /**
         * This call pushes a RevoDeployR-encoded object into the workspace for the
         * specified project.
         *
         * @method projectWorkspacePush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded object inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspacePush: function(config, callback) {            
            return this.io('/r/project/workspace/push', config, callback);
        },

        /**
         * This call saves the workspace to a file in the working directory for the
         * specified project.
         *
         * If the name parameter is specified on the call then only the named object
         * is saved as a binary object file to the working directory. Otherwise the
         * entire contents of the workspace are saved.
         *
         * @method projectWorkspaceSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies a named object for saving</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid
         *       overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceSave: function(config, callback) {            
            return this.io('/r/project/workspace/save', config, callback);
        },

        /**
         * This call stores the workspace as a binary object to the repository.
         *
         * If the name parameter is specified on the call, then only the named object
         * is stored as a binary object in the repository. Otherwise the entire
         * contents of the workspace are stored.
         *
         * @method projectWorkspaceStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *      <dt>name</dt>
         *      <dd>(optional) specifies a named object for storing</dd>
         *
         *      <dt>descr</dt>
         *      <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) comma-separated list of role names, which makes the file
         *       visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be shared, which
         *       makes the file visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be published, which
         *       makes the file visible to authenticated and anonymous users
         *    </dd>
         *
         *      <dt>newversion</dt>
         *      <dd>
         *       (optional) if <code>true</code>, the new file will be renamed to
         *       avoid overwriting
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceStore: function(config, callback) {
            return this.io('/r/project/workspace/store', config, callback);
        },

        /**
         * This call loads a binary object from a file in the repository into the
         * workspace for the specified project.
         *
         * @method projectWorkspaceLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>repo</dt>
         *    <dd>specifies the repository name</dd>
         *
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceLoad: function(config, callback) {
            return this.io('/r/project/workspace/load', config, callback);
        },

        /**
         * This call deletes an object from the workspace for the specified project.
         *
         * @method projectWorkspaceDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the object name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceDelete: function(config, callback) {            
            return this.io('/r/project/workspace/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Management APIs
        /////////////////////////////////////

        /**
         * This call creates a new project for the currently authenticated user.
         * If the projectname parameter is specified on the call, then the newly
         * created project will be a persistent project . If the projectname parameter
         * is omitted on the call, then the newly created project will be a temporary
         * project. The projectdescr parameter is ignored if the projectname parameter
         * is omitted.
         *
         * The blackbox parameter ensures that calls on the temporary project are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs , preloadfile , preloadobject and adopt parameters the
         * project can be pre-initialized with data in the workspace and/or working
         * directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectCreate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>projectname</dt>
         *    <dd>(optional) names a new persistent project</dd>
         *
         *    <dt>projectdescr</dt>
         *    <dd>(optional) describes a new persistent project</dd>
         *
         *    <dt>blackbox</dt>
         *    <dd>
         *       (optional) when enabled, a temporary project is limited to blackbox
         *       API controls
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>
         *       (optional) comma-separated list of repository object (.rData)
         *       filenames
         *    </dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadobjectname
         *    </dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-object-preloadobjectname
         *    </dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>
         *       (optional) identifies the project whose workspace is to be adopted
         *    </dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>
         *       (optional) identifies the project whose directory is to be adopted
         *    </dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>
         *       (optional) identifies the project whose package dependencies are to
         *       be adopted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectCreate: function(config, callback) {
            return this.io('/r/project/create', config, callback);            
        },

        /**
         * This call creates a pool of temporary projects for the currently
         * authenticated user. The caller can specify their preferred number of
         * projects to create using the poolsize parameter. RevoDeployR will attempt
         * to create up to poolsize number of projects. However, standard com
         * policy contraints apply to individual users and on the grid so there is no
         * guarantee that poolsize projects will be returned. If the number of
         * projects returned on this call is less than poolsize the caller can inspect
         * the error and errorCode properties in the response markup to determine
         * exactly why their pool size was limited.
         *
         * The blackbox parameter ensures that calls on each project in the pool are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs, preloadfile, preloadobject and adopt parameters each
         * project in the pool can be pre-initialized with data in the workspace
         * and/or working directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectPool
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>poolsize</dt>
         *    <dd>the preferred size of the pool of temporary projects</dd>
         *    <dt>blackbox</dd>
         *    <dd>(optional) when enabled, each temporary project in the pool is limited to blackbox API controls</dd>
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPool: function(config, callback) {
            return this.io('/r/project/pool', config, callback);
        },

        /**
         * This call recycles the R session associated with the project by deleting
         * all R objects from the workspace and all files from the working directory.
         *
         * Recycling a project is a convenient and efficient alternative to starting
         * over by closing an existing project and then creating a new project.
         *
         * @method projectRecycle
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *    <dt>preserveworkspace</dt>
         *    <dd>(optional) if true, the objects in the workspace are preserved on recycle</dd>
         *    <dt>preservedirectory</dt>
         *    <dd>(optional) if true, the files in the working directory are preserved on recycle</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectRecycle: function(config, callback) {
            return this.io('/r/project/recycle', config, callback);
        },

        /**
         * This call lists all projects owned by the currently authenticated user
         * and/or all projects shared by other users.
         *
         * Shared projects are available as read-only projects to the caller. The
         * shared or private nature of a project can be controlled using the
         * <code>/r/project/about/update</code> call
         * <a href="#method_projectAboutUpdate">projectAboutUpdate</a>.
         *
         * @method projectList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>sharedprojectsalso</dt>
         *    <dd>
         *       (optional) when true, the project response list contains the caller's
         *       projects plus projects shared by other users
         *    </dd>
         *
         *    <dt>sharedprojectsonly</dt>
         *    <dd>
         *       (optional) when true, the project response list contains only
         *       projects shared by other users and not the users's own projects
         *    </dd>
         *
         *    <dt>isordered</dt>
         *    <dd>
         *       (optional) when true, the project response list is ordered in a
         *       most-recently-modified first order. Otherwise the list is ordered
         *       chronologically by creation date
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectList: function(config, callback) {
            return this.io('/r/project/list', config, callback);
        },
        /**
         * This call pings the specified project to determine if the project is live
         * on the RevoDeployR grid.
         *
         * @method projectPing
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPing: function(config, callback) {
            return this.io('/r/project/ping', config, callback);
        },

        /**
         * This call retrieves a set of properties that describe the specified
         * project.
         *
         * @method projectAbout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAbout: function(config, callback) {
            return this.io('/r/project/about', config, callback);
        },

        /**
         * This call updates a set of properties that describe the specified project.
         *
         * @method projectAboutUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, specifies that the project is a
         *       shared project
         *    </dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>
         *       (optional) specifies a client-application specific project cookie
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAboutUpdate: function(config, callback) {
            return this.io('/r/project/about/update', config, callback);
        },

        /**
         * This call saves the persistent state of the project indicated.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving. The flushhistory parameter allows the caller to preserve
         * the project execution history itself while destroying all generated console
         * output and results associated with that history.
         *
         * @method projectSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on save</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on save</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on save</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on save</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSave: function(config, callback) {
            return this.io('/r/project/save', config, callback);
        },

        /**
         * This call saves the persistent state of the specified project to a new
         * persistent project.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving to the new project. The flushhistory parameter allows the
         * caller to preserve the project execution history itself for the new project
         * while dropping all generated console output and results associated with the
         * original history.
         *
         * @method projectSaveas
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the new project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the new project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the new project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the new project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific cookie for the new project</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the original project's workspace is dropped when saving to the new project</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped when saving to the new project</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped when saving to the new project</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed when saving to the new project</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSaveas: function(config, callback) {
            return this.io('/r/project/saveas', config, callback);
        },

        /**
         * This call closes the project indicated.
         *
         * Closing a live project releases all resources associated with the project
         * on the RevoDeployR grid. If the specified project is a persistent project
         * then the default autosave semantics will cause the project to be saved
         * automatically. The caller can override that default behavior using the
         * disableautosave parameter.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history, of the project
         * state when closing. The flushhistory parameter allows the caller to
         * preserve the project execution history itself while destroying all
         * generated console output and results associated with that history.
         *
         * @method projectClose
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>(optional) if true, the default autosave semantics for persistent projects are disabled</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on close</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on close</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on close</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on close</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectClose: function(config, callback) {
            return this.io('/r/project/close', config, callback);
        },

        /**
         * This call grants authorship of the specified project to other users.
         *
         * @method projectGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd>
         *       specifies a comma-separated list of usernames indicating the new
         *       owners
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectGrant: function(config, callback) {
            return this.io('/r/project/grant', config, callback);
        },

        /**
         * This call imports the specified project archive as a new persistent
         * project.
         *
         * @method projectImport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>specifies the name of the project archive file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description for the newly imported project
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectImport: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/import', config, callback);
        },
        /**
         * This call exports a compressed archive file for the specified project.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when generating the archive. The flushhistory parameter allows the
         * caller to preserve the project execution history itself while excluding all
         * generated console output and results associated with that history.
         *
         * @method projectExport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on export</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on export</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on export</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on export</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExport: function(config, callback) {
            return this.io('/r/project/export', config, callback);
        },

        /**
         * This call deletes the specified project.
         * Deleting a project is a permanent operation that cannot be undone or
         * recovered.
         *
         * @method projectDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDelete: function(config, callback) {
            return this.io('/r/project/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Execution APIs
        /////////////////////////////////////

        /**
         * This call executes a block of R code on the R session identified by the
         * project parameter.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         *  <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>code - indicates the code that has been executed</li>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method projectExecuteCode
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>code</dt>
         *    <dd>specifies the block of R code</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>robjects</dt>
         *      <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in
         *    repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>infinity</dt>
         *      <dd>(optional) specifies custom value for Infinity appearing in R object
         *    data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *      <dt>nan</dt>
         *      <dd>(optional) specifies custom value for NaN appearing in R object data
         *    returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *      <dt>encodeDataFramePrimitiveAsVector</dt>
         *      <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteCode: function(config, callback) {           
            return this.io('/r/project/execute/code', config, callback);
        },
        /**
         * This call executes executes repository-managed scripts or external scripts
         * on the R session identified by the project parameter.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         * <strong>
         *    Some of the key data indicated in the response markup on this call
         *    include:
         * </strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the console output resulting from the script
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects - indicates the list of R objects returned from the workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         *
         * @method projectExecuteScript
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dd>adoptpackages</dd>
         *    <dt>(optional) identifies project from which package dependencies are to be adopted</dt>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>(optional) specifies custom value for Infinity appearing in R object data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code></dd>
         *
         *    <dt>nan</dt>
         *    <dd>(optional) specifies custom value for NaN appearing in R object data returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteScript: function(config, callback) {            
            return this.io('/r/project/execute/script', config, callback);
        },

        /**
         * This call interrupts the current execution on specified project.
         *
         * @method projectExecuteInterrupt
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteInterrupt: function(config, callback) {
            return this.io('/r/project/execute/interrupt', config, callback);
        },

        /**
         * This call retrieves the R console output for the latest execution on
         * specified project.
         *
         * @method projectExecuteConsole
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteConsole: function(config, callback) {
            return this.io('/r/project/execute/console', config, callback);
        },

        /**
         * This call retrieves the execution history for the specified project.
         *
         * Some of the key data indicated for each history item in the response markup
         * on this call include:
         *
         * <ol>
         *  <li>code - indicates the code that has been executed</li>
         *  <li>console - indicates the console output resulting from the code execution</li>
         *  <li>resultsGenerated - indicates the number of generated results on the execution</li>
         *  <li>resultsAvailable - indicates the number of generated results still stored on the execution</li>
         *  <li>resourceUsage - indicates the current storage byte count for results on the execution</li>
         *  <li>execution - indicates the execution identifier, which can then be used on /r/project/execution/result calls to retrieve or manage results</li>
         *  <li>interrupted - indicates the interrupted status of execution</li>
         *  <li>error - on failure, indicates the reason for failure</li>
         *  <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method projectExecuteHistory
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filterdepth</dt>
         *    <dd>specifies the max number of executions to be returned in the history</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) specifies the comma-separated list of execution identifiers on which to filter history</dd>
         *
         *    <dt>filtertag</dt>
         *    <dd>(optional) specifies the execution tag on which to filter history</dd>
         *
         *    <dt>reversed</dt>
         *    <dd>
         *       (optional) if true, the execution history is returned in a
         *       reverse-chronological order
         *    </dt>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteHistory: function(config, callback) {
            return this.io('/r/project/execute/history', config, callback);
        },

        /**
         * This call flushes executions in the history on the specified project.
         * Flushing an execution deletes both the R console output and the generated
         * results associated with that execution but does not remove the execution
         * itself from the history. By omitting the execution parameter, the caller
         * can flush every execution in the history on the specified project.
         *
         * This flushing facility is provided to help users manage the levels of
         * resource usage associated with their persistent projects.
         *
         * @method projectExecuteFlush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) comma-separated list of execution identifiers</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteFlush: function(config, callback) {
            return this.io('/r/project/execute/flush', config, callback);
        },

        /**
         * This call lists the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can limit the
         * response to those results found on a specific execution or set of
         * executions.
         *
         * <blockquote>
         *    Important! The URLs indicated in the response markup on this call remain
         *    valid for as long as the results remain part of the project.
         * </blockquote>
         *
         * @method projectExecuteResultList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultList: function(config, callback) {
            return this.io('/r/project/execute/result/list', config, callback);
        },

        /**
         * This call downloads the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can download
         * only results on the specified executions. By specifying a value for the
         * filename parameter the caller can download a specific result on the
         * specified execution.
         *
         * @method projectExecuteResultDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies a result file name</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDownload: function(config, callback) {
            return this.io('/r/project/execute/result/download', config, callback);
        },

        /**
         * This call deletes the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can delete
         * only those results on the specified executions. By specifying a value for
         * the filename parameter the caller can delete a specific result on the
         * specified executions.
         *
         * @method projectExecuteResultDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *   <dt>project</dt>
         *   <dd>specifies the project identifier</dd>
         *
         *   <dt>execution</dt>
         *   <dd>
         *      (optional) specifies a comma-separated list of execution identifiers
         *   </dd>
         *
         *   <dt>filename</dt>
         *   <dd>(optional) specifies a result file name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDelete: function(config, callback) {
            return this.io('/r/project/execute/result/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Directory APIs
        /////////////////////////////////////

        /**
         * This call lists working directory files for the specified project.
         *
         * The filter parameter can be specified on the call to filter, the types of
         * files returned according to their category. The following filter values are
         * supported:
         *
         * <ol>
         *    <li>plot - files ending with a .png, .svg or .jpg extension</li>
         *    <li>script - files ending with a .R or .r extension</li>
         *    <li>R - files ending with a .rData or .rdata extension</li>
         *    <li>data - files ending with a .csv or .xls extension</li>
         *    <li>text - files ending with a .txt extension</li>
         * </ol>
         *
         * @method projectDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies the filter by category value</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryList: function(config, callback) {
            return this.io('/r/project/directory/list', config, callback);
        },

        /**
         * This call uploads a file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/directory/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL into the working directory for the
         * specified project.
         *
         * @method projectDirectoryTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryTransfer: function(config, callback) {
            return this.io('/r/project/directory/transfer', config, callback);
        },

        /**
         * This call writes a text file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content for the file</dd>
         *
         *    <dt>delimiter</dt>
         *    <dd>
         *       (optional) specifies a custom delimiter for text when writing
         *       multiple files, defaults to #,#
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryWrite: function(config, callback) {
            return this.io('/r/project/directory/write', config, callback);
        },

        /** 
         * This call updates a file name and/or description in the working directory
         * for the specified project.
         *
         * @method projectDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>rename</dt>
         *    <dd>(optional) specifies the new name for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifices the new description for the file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpdate: function(config, callback) {
            return this.io('/r/project/directory/update', config, callback);
        },

        /**
         * This call stores a file from the working directory to the repository.
         *
         * @method projectDirectoryStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies the file for storing</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *        (optional) comma-separated list of role names, which makes the file
         *        visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, the file will be shared , which makes the file
         *       visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, the file will be published , which makes the
         *       file visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryStore: function(config, callback) {
            return this.io('/r/project/directory/store', config, callback);
        },

        /**
         * This call loads a file from the repository into the working directory for
         * the specified project.
         *
         * @method projectDirectoryLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the author name</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryLoad: function(config, callback) {
            return this.io('/r/project/directory/load', config, callback);
        },

        /**
         * This call downloads the working directory contents for the specified
         * project.
         *
         * By specifying a single value for the filename parameter, the caller can
         * download a specific file. By specifying multiple values for the filename
         * parameter, the caller can download a zip archive of those files. By
         * omitting the filename parameter, then the caller can download a zip archive
         * with all of the files in the working directory.
         *
         * @method projectDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies comma-separated file names for download</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDownload: function(config, callback) {
            return this.io('/r/project/directory/download', config, callback);
        },

        /**
         * This call deletes files from the working directory for the specified
         * project.
         *
         * @method projectDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies a comma-separated list of file names for deletion</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDelete: function(config, callback) {
            return this.io('/r/project/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Package APIs
        /////////////////////////////////////

        /**
         * This call lists R package dependencies for the specified project.
         *
         * @method projectPackageList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>installed</dt>
         *    <dd>
         *       if true, response lists all packages installed in project environment
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageList: function(config, callback) {
            return this.io('/r/project/package/list', config, callback);
        },

        /**
         * This call attaches R package dependencies for the specified project.
         *
         * @method projectPackageAttach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to attach</dd>
         *
         *    <dt>repo</dt>
         *    <dd>(optional) specifies R repository location for named packages</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageAttach: function(config, callback) {
            return this.io('/r/project/package/attach', config, callback);
        },

        /**
         * This call detaches R package dependencies for the specified project.
         *
         * @method projectPackageDetach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to detach</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageDetach: function(config, callback) {
            return this.io('/r/project/package/detach', config, callback);
        },

        /////////////////////////////////////
        // User APIs
        /////////////////////////////////////

        /**
         * This call signs the user in by authenticating the credentials with the
         * RevoDeployR server.
         *
         * @method userLogin
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>username</dt>
         *    <dd>specifies the username</dd>
         *
         *    <dt>password</dt>
         *    <dd>specifies the password</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>
         *       (optional) when true, disables autosave semantics for persistent
         *       projects
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogin: function(config, callback) {
            return this.io('/r/user/login', config, callback);            
        },

        /**
         * This call signs out the currently authenticated user.
         *
         * @method userLogout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>usercookie</dt>
         *    <dd>
         *       (optional) when specified, value sets application-specific persistent
         *       user cookie, which is retrievable on response to
         *       <a href="#method_userLogin">userLogin</a> call.
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogout: function(config, callback) {
            return this.io('/r/user/logout', config, callback);            
        },

        /**
         * This call retrieves details about the currently authenticated user. The
         * details returned in the response markup on this call are exactly the same
         * details as those returned in the response markup on the
         * <a href="#method_userLogin">userLogin</a> call.
         *
         * @method userAbout
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAbout: function(callback) {            
            return this.io('/r/user/about', {}, callback);
        },

        /**
         * This call enables or disables the autosave semantics on persistent projects
         * for the duration of the current users HTTP session. By default, all live
         * persistent projects are autosaved under the following conditions:
         *
         * <ul>
         *    <li>
         *       When a user closes a project using the
         *       <a href="#method_projectClose">projectClose</a> call.
         *    </li>
         *    <li>
         *       When a user signs-out using the
         *       <a href="#method_userLogout">userLogout</a> call.
         *    </li>
         *    <li>
         *       When a user is automatically signed-out by the system after a
         *       prolonged period of inactivity.
         *    </li>
         * </ul>
         *
         * When the autosave feature is disabled a user must make an explicit call on
         * <a href="#method_projectSave">projectSave</a> in order to save a project.
         *
         * @method userAutosave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>enable</dt>
         *    <dd>(optional) toggles autosave semantics for persistent projects.</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAutosave: function(config, callback) {
            return this.io('/r/user/autosave', config, callback);
        },

        /////////////////////////////////////
        // Repository Script APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed scripts.
         *
         * This call is available to authenticated and anonymous users. However, if
         * the caller is an anonymous user then only published scripts will be
         * returned in the response markup.
         *
         * @method repositoryScriptList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptList: function(callback) {            
            return this.io('/r/repository/script/list', {}, callback);
        },
        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute a
         * chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL
         * or file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of
         * values on the externalsource parameter. Note, to execute an external script
         * the caller must have POWER_USER privileges so this feature is not available
         * to anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *       allow the caller to control how RevoDeployR-encoded R object data is
         *       encoded in the response markkup.
         *    </li>
         * </ol>
         *
         *  <strong>
         *     Some key data indicated in the response markup on this call:
         *  </strong>
         *
         *  <ol>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method repositoryScriptExecute
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>blackbox</dt>
         *      <dd>
         *       (optional) if true, the execution will occur on the HTTP blackbox
         *       project for the current HTTP session
         *    </dd>
         *
         *      <dt>recycle</dt>
         *      <dd>
         *       (optional) if true, recycles the R session associated with the HTTP
         *       blackbox project on the current HTTP session
         *    </dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by <code>null</code>
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptExecute: function(config, callback) {            
            return this.io('/r/repository/script/execute', config, callback);
        },


        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project and returns a simple HTML page that displays the results
         * generated on the execution.
         *
         * On a successful execution, the HTML page will display the following data
         * when available on the response:
         *
         * <ul>
         *    <li>R console output</li>
         *    <li>R workspace object data</li>
         *    <li>R generated plots</li>
         *    <li>Links to R working directory artifacts</li>
         *    <li>Links to Repository stored artifacts</li>
         * </ul>
         *
         * On a failed execution, the HTML page will display an error message
         * indicating the cause of the failure and when available, R console output.
         *
         * The API call makes it very simple to integrate outputs generated by
         * RevoDeployR-managed R scripts into any third-party application. It can also
         * be used as a very simple test and debugging aid for R script and
         * application developers.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename , author and optionally version . To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges so this feature is not available to
         * anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The csvinputs parameter allows the caller to pass R object primitive
         *       values as comma-separated name/value pairs. These inputs are turned
         *       into R objects in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller to specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller to specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *      The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *      allow the caller to control how RevoDeployR-encoded R object data is
         *      encoded in the response markkup.
         *    </li>
         * </ol>
         *
         * <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the R console output resulting from the execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method repositoryScriptRender
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed script
         *       filenames
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) comma-separated list of authors, one author per filename
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) comma-separated list of versions, one version per filename
         *    </dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>
         *       (optional) comma-separated list of URLs or file paths to external
         *       scripts
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>blackbox</dt>
         *      <dd>(optional) if true, the execution will occur on the HTTP blackbox project for the current HTTP session</dd>
         *
         *      <dt>recycle</dt>
         *      <dd>(optional) if true, recycles the R session associated with the HTTP blackbox project on the current HTTP session</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       0x7ff0000000000000L
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if true, data.frame primitives are encoded vectors in R
         *       object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptRender: function(config, callback) {
            return this.io('/r/repository/script/render', config, callback);
        },

        /**
         * This call interrupts the current execution on the HTTP Blackbox project
         * associated with the current HTTP session.
         *
         * @method repositoryScriptInterrupt
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptInterrupt: function(callback) {            
            return this.io('/r/repository/script/interrupt', config, callback);
        },

        /////////////////////////////////////
        // Repository File APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed files.
         *
         * @method repositoryFiletList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         *
         *    <dt>categoryFilter</dt>
         *    <dd>
         *       (optional) when specified list of files in response markup is limited
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileList: function(config, callback) {            
            return this.io('/r/repository/file/list', config, callback);
        },
        /**
         * This call uploads a file from the user's computer to the repository.
         *
         * @method repositoryFileUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/file/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL to the repository.
         *
         * @method repositoryFileTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies a url of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileTransfer: function(config, callback) {
            return this.io('/r/repository/file/transfer', config, callback);
        },

        /**
         * This call writes a text file to the repository.
         *
         * @method repositoryFileWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded
         *       file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>share</dt>
         *    <dd>
         *       (optional) if true, ile is shared and visible to authenticated users
         *    </dd>
         *
         *    <dt>publish</dt>
         *    <dd>
         *       (optional) if true, the file will be published which makes the file
         *       visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the repository will create new version rather
         *       than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>
         *       (optional) specifies the inputs property on a repository-managed
         *       script
         *    </dd>
         *
         *    <dt>outputs</dt>
         *    <dd>
         *       (optional) specifies the outputs property on a repository-managed
         *       script
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileWrite: function(config, callback) {
            return this.io('/r/repository/file/write', config, callback);
        },

        /**
         * This call updates the properties on a repository-managed file.
         *
         * @method repositoryFileUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpdate: function(config, callback) {
            return this.io('/r/repository/file/update', config, callback);
        },

        /**
         * This call reverts the current working copy of a file to a specific version
         * found in the files version history.
         *
         * @method repositoryFileRevert
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>version</dt>
         *    <dd>specifies the repository file version to revert into the current working copy</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileRevert: function(config, callback) {
            return this.io('/r/repository/file/revert', config, callback);
        },

        /**
         * This call generates a diff between the current working copy of a file and
         * a specific version found in the files version history.
         *
         * @method repositoryFileDiff
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       specifies the repository file version to diff against the current
         *       working copy
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDiff: function(config, callback) {
            return this.io('/r/repository/file/diff', config, callback);
        },

        /**
         * This call grants ownership rights on a file to one or more authenticated
         * users.
         *
         * Note, unlike most repository APIs that require both filename and author
         * parameters, there is no explicit author parameter on this call. The author
         * is understood to be the caller.
         *
         * @method repositoryFileGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the name of the repository file</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd> specifies a comma-separated list of grantee usernames</dd>
         *
         *    <dt>revokeauthor</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of revokee usernames
         *    </dd>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileGrant: function(config, callback) {
            return this.io('/r/repository/file/grant', config, callback);
        },

        /**
         * This call downloads a repository-managed file.
         *
         * @method repositoryFileDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *      <dt>author</dt>
         *      <dd>specifies the repository author</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDownload: function(config, callback) {
            return this.io('/r/repository/file/download', config, callback);
        },

        /**
         * This call deletes a file from the repository.
         *
         * @method repositoryFileDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDelete: function(config, callback) {
            return this.io('/r/repository/file/delete', config, callback);
        },

        /**
         * This call fetches the latest meta-data on a file in the repository.
         *
         * @method repositoryFileFetch
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) specifies the repository file author
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileFetch: function(config, callback) {
            return this.io('/r/repository/file/fetch', config, callback);
        },

        /**
         * This call copies one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileCopy: function(config, callback) {            
            return this.io('/r/repository/file/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileMove: function(config, callback) {            
            return this.io('/r/repository/file/move', config, callback);
        },

        /////////////////////////////////////
        // Repository Directory APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed directories.
         * By default, a list of the caller's user directories ( root and custom ) are
         * returned in the response markup.
         *
         * If the userfiles parameter is specified, the files in all of the caller's
         * user directories are listed in the response markup. Note, depending on the
         * number of files owned by the caller, when this parameter is enabled the
         * response markup returned on this call can be a verbose.
         *
         * If the directory parameter is specified then only the files in the
         * directory indicated are returned in the response markup.
         *
         * Additional parameters are provided to return files in the caller's archived
         * directories and/or files in the Restricted , Shared and Public system
         * directories.
         *
         * Note: The metadata property in the response markup on this call is provided
         * as a convenience for client application developers. It provides a complete
         * list fo the user directories available to the current caller.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>userfiles</dt>
         *    <dd>
         *       (optional) if specified, files in all user directories are listed in
         *       the response markup
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>archived</dt>
         *    <dd>
         *       (optional) if true, files found in archived directories are included
         *       in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, files that are restricted but visible or shared
         *       by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, files that are published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryList: function(config, callback) {            
            return this.io('/r/repository/directory/list', config, callback);
        },

        /**
         * This call creates a repository-managed custom directory.
         *
         * If the name of the new custom directory is already in use by the caller the
         * response markup will indicate an appropriate error.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCreate: function(config, callback) {            
            return this.io('/r/repository/directory/create', config, callback);
        },

        /**
         * This call renames an existing repository-managed user directory
         * ( custom or archived ). When renaming a user directory, all files in the
         * source directory are automatically moved to the destination directory. If
         * the destination directory already exists the call will be rejected and the
         * response markup will indicate an appropriate error.
         *
         * You can use this call to convert an archived directory back into a custom
         * directory, essentially unarchiving the archived directory.
         *
         * Note: You can not rename the root directory. To move files from the root
         * directory use the /r/repository/directory/move call.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryRename
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryRename: function(config, callback) {           
            return this.io('/r/repository/directory/rename', config, callback);
        },

        /** 
         * This call copies one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are copied. Otherwise, all files in the source directory are
         * copied.
         *
         * To ensure copying files does not accidentally overwrite any existing files
         * in the destination directory, all copied files are created as new versions
         * in the destination directory.
         *
         * @method repositoryDirectoryCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCopy: function(config, callback) {            
            return this.io('/r/repository/directory/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are moved. Otherwise, all files in the source directory are moved.
         *
         * To ensure moving files does not accidentally overwrite any existing files
         * in the destination directory, all moved files are created as new versions
         * in the destination directory.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryMove: function(config, callback) {            
            return this.io('/r/repository/directory/move', config, callback);
        },

        /**
         * This call updates repository-managed file access controls by directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are updated. Otherwise, all files in the source directory are
         * updated.
         *
         * @method repositoryDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpdate: function(config, callback) {
            return this.io('/r/repository/directory/update', config, callback);
        },

        /**
         * This call archives one or more repository-managed files from a source user
         * directory ( root or custom ) to an archive directory.
         *
         * If the value of the archive parameter indicates an existing archive
         * directory then the files in the source directory are added to the existing
         * archive. Otherwise, a new archive directory is automatically created on
         * behalf of the caller. Archived directories automatically have a .archive
         * postfix appended to their name if it is not supplied on the archive
         * parameter value.
         *
         * If all of the files in the source directory are successfully archived, the
         * source directory is automatically deleted from the repository. If the
         * source directory was root , an empty root directory is preserved. If any of
         * the files in the source directory are skipped or can not be archived (see
         * following note), those files and the source directory are preserved.
         *
         * <strong>Important:</strong>
         *
         * This call will only archive files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be archived to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryArchive
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryArchive: function(config, callback) {

            return this.io('/r/repository/directory/archive', config, callback);
        },

        /**
         * This call uploads a set of files in a zip archive into an existing
         * repository-managed user directory ( root , custom or archived ).
         *
         * @method repositoryDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>file</dt>
         *    <dd>
         *       ...zip archive file content...
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the repository will create new
         *       version rather than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpload: function(config, callback) {
            config = config || {};
            config.format = 'text';
            var ioConfig = {
                data: config,
                method: 'POST',
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/directory/upload', config, callback);
        },

        /**
         * This call downloads one or more repository-managed files from a directory
         * in the repository. The response type on this call is a zip archive file.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are downloaded. Otherwise, all files in the source directory are
         * downloaded.
         *
         * @method repositoryDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDownload: function(config, callback) {            
            return this.io('/r/repository/directory/download', config, callback);
        },

        /**
         * This call deletes a repository-managed user directory ( root , custom or
         * archived ).
         *
         * When deleting a user directory, all files in the directory are
         * automatically deleted along with the directory. If the target directory is
         * root, an empty root directory is preserved.
         *
         * @method repositoryDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDelete: function(config, callback) {
            return this.io('/r/repository/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Job APIs
        /////////////////////////////////////

        /**  
         * This call lists jobs for the currently authenticated user.
         *
         * The openonly parameter allows the caller to see only those jobs in an open
         * state. The set of job open states are shown here:
         *
         * <ul>
         *  <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *  <li>Queued : job is queued for running.</li>
         *  <li>Running : job is running.</li>
         * </ul>
         *
         * <blockquote>
         *    Important! Any open job can be cancelled using the
         *    <a href="#method_jobCancel">jobCancel</a> call.
         * </blockquote>
         *
         * @method jobList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>openonly</dt>
         *    <dd>
         *       (optional) if true, only jobs in an open-state are listed in the
         *       response markup
         *    </dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) If true, additional data properties describing each job
         *       are listed in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobList: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call submits a job for background execution on behalf of the user.
         *
         * To submit the execution of an arbitrary block of R code the caller must
         * provide a value on the code parameter.
         *
         *
         * To submit the execution of a single repository-managed script the caller
         * must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To submit the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         *
         * To submit the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * submit the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to submit the execution of an external script the caller must have
         * POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with execution
         * occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSubmit
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *      <dt>rscriptname</dt>
         *      <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *      <dt>rscriptauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *      <dt>rscriptversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *      <dt>externalsource</dt>
         *      <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *      <dt>inputs</dt>
         *      <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *      <dt>preloadfilename</dt>
         *      <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *      <dt>preloadfileauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *      <dt>preloadfileversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *      <dt>preloadobjectname</dt>
         *      <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *      <dt>preloadobjectauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *      <dt>preloadobjectversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *      <dt>adoptworkspace</dt>
         *      <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *      <dt>adoptdirectory</dt>
         *      <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *      <dt>adoptpackages</dt>
         *      <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *      <dt>tag</dt>
         *      <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *      <dt>echooff</dt>
         *      <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>storenoproject</dt>
         *      <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSubmit: function(config, callback) {            
            return this.io('/r/job/submit', config, callback);
        },

        /**
         * This call schedules a job for background execution on behalf of the user.
         *
         * The schedstart parameter identifies the start time for the job. This
         * parameter value is specified as UTC in milliseconds. The schedrepeat
         * parameter indicates the number of times the job is to be repeated, and if
         * omitted the job is executed just once. The schedinterval parameter
         * indicates the interval, measured in milliseconds, between repeat
         * executions.
         *
         * To schedule the execution of an arbitrary block of R code the caller
         * must provide a value on the code parameter.
         *
         * To schedule the execution of a single repository-managed script the
         * caller must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To schedule the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         * To schedule the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * schedule the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to schedule the execution of an external script the caller must
         * have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with
         * execution occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSchedule
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>schedstart</dt>
         *    <dd>(optional) specifies the start time for job</dd>
         *
         *    <dt>schedrepeat</dt>
         *    <dd>(optional) specifies the number of times job is to be repeated</dd>
         *
         *    <dt>schedinterval</dt>
         *    <dd>(optional) specifies the interval (ms) on which job is to be repeated</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *    <dt>rscriptname</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *    <dt>rscriptauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *    <dt>rscriptversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>
         *       (optional) if true console output is not saved on the project
         *       execution history for the job
         *    </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>storenoproject</dt>
         *    <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSchedule: function(config, callback) {           
            return this.io('/r/job/schedule', config, callback);
        },

        /**
         * This call queries the job status. The status property will indicate one of
         * the following values:
         *
         * Scheduled, Queued, Running, Completed, Cancelling, Cancelled, Interrupted,
         * Aborted, Failed.
         *
         * @method jobQuery
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) if true, only jobs in an extended-state are listed in the
         *       response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobQuery: function(config, callback) {
            return this.io('/r/job/query', config, callback);
        },

        /**
         * This call cancels the specified job.
         *
         * Only jobs in an open-state can be cancelled. The set of job open-states are
         * shown here:
         *
         * <ul>
         *    <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *    <li>Queued : job is queued for running.</li>
         *    <li>Running : job is running.</li>
         * </ul>
         * @method jobCancel
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobCancel: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call deletes the specified job.
         *
         * Only jobs in one of the completed-states can be deleted. The set of job
         * compelted-states are shown here:
         *
         * <ul>
         *    <li>Completed : job execution has run to successful completion.</li>
         *    <li>Interrupted : job execution has been interrupted.</li>
         *    <li>Cancelled : job has been cancelled.</li>
         *    <li>Aborted : job execution has been aborted.</li>
         *    <li>Failed : job execution has resulted in failure.</li>
         * </ul>
         *
         * Jobs in an open-state must first run to completion or be cancelled before
         * they are eligible for deletion.
         *
         * <blockquote>
         *    Important! Deleting jobs will not delete the projects that resulted from
         *    those jobs.
         * </blockquote>
         *
         * @method jobDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *  <dt>job</dt>
         *  <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobDelete: function(config, callback) {
            return this.io('/r/job/delete', config, callback);
        }
    } // DeployR

};

module.exports = Deprecated;
},{"../package":38,"./lang":26,"./rinput":30,"./selfish":33}],23:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base;

function debug(msg) { }

module.exports = Base.extend({

  initialize: function() {
    this.events = {};
    this.scope  = null;
  },

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   * @return {Emitter} `this` for chaining      
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining   
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining
   */
  offAll: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  /**
   * Removes a listener based on an index.
   *
   * @private
   * @param {String} name The name of the event
   * @param {Number} index The index of the event 
   */
  offAt: function(name, index) {
    var array = this.events[name],
        rest  = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @return {Emitter} `this` for chaining
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.offAll(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.offAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }

}); 
},{"./selfish":33}],24:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    RTypes = require('./rtypes'),
    R = RTypes.r,
    DeployR = RTypes.deployr;

function formatDates(dates, type) {
    var formats = [];

    for (var i = 0; i < dates.length; i++) {
        formats.push(formatDate(dates[i], type));
    }

    return formats;
}

function formatDate(date, type) {    
   var year   = date.getFullYear(),
       month  = (date.getMonth() + 1),
       day    = date.getDate(),    
       hour   = date.getHours(),
       min    = date.getMinutes(),
       sec    = date.getSeconds(),
       zone   = date.getTimezoneOffset(),
       format = '';

       month  = (month < 10 ? '0' + month : month);
       hour   = (hour < 10 ? '0' + hour : hour);
       min    = (min < 10 ? '0' + min : min);
       sec    = (sec < 10 ? '0' + sec : sec);       
       format = year + '-' + month + '-' + day;

    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }
   
    if (type === DeployR.RPOSIX_DATE || type === DeployR.RPOSIX_DATE_VECTOR) {
        var time  = hour + ':' + min + ':' + sec,
            a = -zone,
            b = "+";

        if (a < 0) {
            a = -a;
            b = "-";
        }

        zone = b + leftZeroFill((a / 60), 2) + '' + leftZeroFill(a % 60, 2);
        format += (' ' + time + ' ' + zone);
    }

    return format;
}

function encodeEmbeddedDataframe(obj, rdf) {
    var dfValue = obj.value;
    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];
        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);            
        }

    }
    return rdf;
};

function encodeDataframe(obj) {
    var rdf = {
            type: R.DATAFRAME,
            value: [],
            name: obj.name
        },
        dfValue = obj.value;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);
        }

    }
    return rdf;
};

function encodeList(obj) {
    var rlist = {
            type: R.LIST,
            value: [],
            name: obj.name
        },
        dfValue = obj.value,
        r;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        switch (dfObj.type) {
            case DeployR.RDATAFRAME:
                r = encodeDataframe(dfObj);
                break;

            case DeployR.RLIST:
                r = encodeList(dfObj);
                break;

            case DeployR.RNUMERIC_MATRIX:
            case DeployR.RINTEGER_MATRIX:
            case DeployR.RBOOLEAN_MATRIX:
            case DeployR.RSTRING_MATRIX:
                r = {
                    name: dfObj.name,
                    type: R.MATRIX,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE:
            case DeployR.RPOSIX_DATE:
                r = {
                    name: dfObj.name,
                    type: R.DATE,
                    format: dfObj.format,
                    value: formatDate(dfObj.value, dfObj.type)
                };
                break;

            case DeployR.RFACTOR:
            case DeployR.RORDERED:
                r = {
                    name: dfObj.name,
                    type: R.FACTOR,
                    ordered: dfObj.ordered,
                    labels: dfObj.labels,
                    levels: dfObj.levels,
                    value: dfObj.value
                };
                break;

            case DeployR.RSTRING:
            case DeployR.RBOOLEAN:
            case DeployR.RNUMERIC:
            case DeployR.RINTEGER:
                r = {
                    name: dfObj.name,
                    type: R.PRIMITIVE,
                    value: dfObj.value
                };
                break;

            case DeployR.RNUMERIC_VECTOR:
            case DeployR.RINTEGER_VECTOR:
            case DeployR.RBOOLEAN_VECTOR:
            case DeployR.RSTRING_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE_VECTOR:
            case DeployR.RPOSIX_DATE_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,                    
                    value: formatDates(dfObj.value, dfObj.type),
                    format: dfObj.format
                };
                break;

            default:
                throw new Error('No RDataType found for "' + dfObj.type + '"');
                break;
        }

        rlist.value.push(r);
    }
    return rlist;
};

module.exports = {

    /**
     * Flattens a given <code>Revolution.RData</code> type into a JSON string
     * representing the
     * expected DeployR input format.
     *
     * @method parseInputs
     * @public
     * @param {Array} rdata An Array of RData Objects to be flattened.
     * @return {String} The flattend RData JSON string representing the DeployR
     *                  input format.
     */
    encode: function(rdata) {
        var r = {};

        for (var index = 0; index < rdata.length; index++) {
            var obj = rdata[index];

            switch (obj.type) { // -- DeployR Type -- //

                case DeployR.RDATAFRAME:
                    r[obj.name] = encodeDataframe(obj);
                    break;

                case DeployR.RLIST:
                    r[obj.name] = encodeList(obj);
                    break;

                case DeployR.RNUMERIC_MATRIX:
                case DeployR.RINTEGER_MATRIX:
                case DeployR.RBOOLEAN_MATRIX:
                case DeployR.RSTRING_MATRIX:
                    r[obj.name] = {
                        type: R.MATRIX,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE:
                case DeployR.RPOSIX_DATE:
                    r[obj.name] = {
                        type: R.DATE,
                        format: obj.format,                        
                        value: formatDate(obj.value, obj.type)
                    };
                    break;

                case DeployR.RFACTOR:
                case DeployR.RORDERED:                
                    r[obj.name] = {
                        type: R.FACTOR,
                        ordered: obj.ordered,
                        labels: obj.labels,
                        levels: obj.levels,
                        value: obj.value
                    };
                    break;

                case DeployR.RSTRING:
                case DeployR.RBOOLEAN:
                case DeployR.RNUMERIC:
                case DeployR.RINTEGER:
                    r[obj.name] = {
                        type: R.PRIMITIVE,
                        value: obj.value
                    };
                    break;

                case DeployR.RNUMERIC_VECTOR:
                case DeployR.RINTEGER_VECTOR:
                case DeployR.RBOOLEAN_VECTOR:
                case DeployR.RSTRING_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE_VECTOR:
                case DeployR.RPOSIX_DATE_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,            
                        value: formatDates(obj.value, obj.type),
                        format: obj.format
                    };
                    break;

                default:
                    throw new Error('No RDataType found for "' + obj.type + '"');
                    break;
            }
        }

        return (JSON.stringify(r));
    }
};
},{"./lang":26,"./rtypes":32}],25:[function(require,module,exports){
 var optional = require('./optional'),
     WS       = optional('ws'),
     Queue    = require('./queue'),     
     Emitter  = require('./emitter'),
     Base     = require('./selfish').Base,
     merge    = require('./utils').merge;

/**
 * Initialize a new `EventStream` with the given set of `options`.
 *
 * @param {Object} options
 * @api private
 */
var EventStream = Base.extend(Emitter, {   

  initialize: function initialize(host, options) {
    Emitter.initialize.call(this, {});

    this.host        = host;
    this.options     = options || {};
    this.options.log = this.options.log || this.LOG.error;
    this.ws          = null;
    this.q           = new Queue();
    this.channel     = {};     
  },  

  LOG: { 
    info: 'info', 
    debug: 'debug', 
    error: 'error' 
  },
  
  open: function(options) {    
    var self   = this,
        uri    = (this.host || '') + '/deployr/r/event/stream?',
        params = [];

    options = options || {};
    options.headers = options.headers || {};
    options = this.options = merge(options, this.channel);    

    this.cookies = !this.cookies ? options.headers.Cookie : this.cookies;

    // -- append option parameters --
    if (options.project) {
      params.push('project=' + options.project);
    } else {
      if (options.job) {
        params.push('job=' + options.job);
      }
    }

    if (options.management) {
      params.push('managementEventOnly=true');
    } else {
      if (options.httponly) {
        params.push('httpEventOnly=true');
      } else {
        if (options.revoonly) {
          params.push('revoEventOnly=true');
        }
      }
    }

    uri += params.join('&').substr(0);
    uri = uri.replace(/^http/,'ws');

    this.q.yield(true);
    this.q.add(function() {

      var headers = this.cookies ? { 'Cookie': this.cookies } : {};
      this.emit('es:connecting', { uri: uri, headers: headers });

      var ws = new WS(uri, 'http', { headers: headers });

      ws.onopen = function (message) {
        self.emit('es:open', message);
      };

      var _message = '';
      ws.onmessage = function (message) {
        try {          
          if (message.data.split('!|!')[1]) {
            _message = _message + message.data.split('!|!')[1];
            message = JSON.parse(_message);
            _message = '';
            var type = message.deployr.response.event.type;
            self.emit('es:' + type.replace('Event', ''), message);
          }
        } catch (e) {} 
      };

      ws.onerror = function (err) { self.emit('es:error', err); };
      ws.onclose = function (message) { self.emit('es:disconnect', message); };

      this.ws = ws;
    }, this);

    if (options.force) { this.flush(); }

    return this;    
  },

  close: function() {
    if (this.ws) { this.ws.close(); }

    return this;
  },

  error: function(fn) {
    this.on('es:error', fn);

    return this;
  },  

  all: function() {
    this.channel = { revoonly: true };  // revoEventOnly=true

    return this;
  },

  session: function() {
    this.channel = { httponly: true }; //httpEventOnly=true

    return this;
  },

  project: function(project) {
    this.channel = { project: project }; // project=12345

    return this;
  },

  job: function(job) {
    this.channel = { job: job }; //job=12345

    return this;
  },

  management: function() {
    this.channel = { management: true }; //managementEventOnly=true

    return this;
  },

  flush: function() {
    this.q.yield(false);
    this.q.flush();
  },

  share: function(cookies) {
    this.cookies = cookies;
  }

});

module.exports = EventStream;

},{"./emitter":23,"./optional":28,"./queue":29,"./selfish":33,"./utils":34}],26:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 *
 * This component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer. Redistributions in binary 
 * form must reproduce the above copyright notice, this list of conditions and 
 * the following disclaimer in the documentation and/or other materials provided 
 * with the distribution.
 *
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors may be 
 * used to endorse or promote products derived from this software without 
 * specific prior written permission of Yahoo! Inc.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE  
 * POS SIBILITY OF SUCH DAMAGE.
 */

/**
 * Provides core language utilites and extensions used throughout DeployR.
 *
 * @class Lang
 * @static
 */
var L = {}, 
	TOSTRING = Object.prototype.toString, 
	TYPES = {	
		'undefined' : 'undefined',
		'number' : 'number',
		'boolean' : 'boolean',
		'string' : 'string',
		'[object Function]' : 'function',
		'[object RegExp]' : 'regexp',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object Error]' : 'error'
	}, unsafeNatives = false;

/**
 * Determines whether or not the provided item is null.
 * @method isNull
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is null.
 */
L.isNull = function(o) {
	return o === null;
};

/**
 * Determines whether or not the provided item is undefined.
 * @method isUndefined
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is undefined.
 */
L.isUndefined = function(o) {
	return typeof o === 'undefined';
};

/**
 * Determines whether or not the provided item is of type object
 * or function. Note that arrays are also objects, so
 * <code>Y.Lang.isObject([]) === true</code>.
 * @method isObject
 * @static
 * @param o The object to test.
 * @param failfn {boolean} fail if the input is a function.
 * @return {boolean} true if o is an object.
 * @see isPlainObject
 */
L.isObject = function(o, failfn) {
	var t = typeof o;
	return (o && (t === 'object' || (!failfn && (t === 'function' || L.isFunction(o))))) || false;
};
/**
 * Determines whether or not the provided item is an array.
 *
 * Returns `false` for array-like collections such as the function `arguments`
 * collection or `HTMLElement` collections.
 *
 * @method isArray
 * @param o The object to test.
 * @return {boolean} true if o is an array.
 * @static
 */
L.isArray = (!unsafeNatives && Array.isArray) ||
function(o) {
	return L.type(o) === 'array';
};

L.isFunction = function isFunctionA(o) {
	return (typeof(o) === "function");
};

/**
 * Determines whether or not the provided item is a boolean.
 * @method isBoolean
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a boolean.
 */
L.isBoolean = function(o) {
	return typeof o === 'boolean';
};

/**
 * Determines whether or not the supplied item is a date instance.
 * @method isDate
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a date.
 */
L.isDate = function(o) {
	return L.type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
};

/**
 * Determines whether or not the provided item is a legal number.
 * @method isNumber
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a number.
 */
L.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

/**
 * Determines whether or not the provided item is a string.
 * @method isString
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a string.
 */
L.isString = function(o) {
	return typeof o === 'string';
};

/**
 * Returns a string representing the type of the item passed in.
 *
 * @method type
 * @param o the item to test.
 * @return {string} the detected type.
 * @static
 */
L.type = function(o) {
	return TYPES[ typeof o] || TYPES[TOSTRING.call(o)] || ( o ? 'object' : 'null');
};

module.exports = L;
},{}],27:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
var Logger = {},
    loggerMap = {},
    globalLogger;

/**
 * Universal stdout|stderr printer
 */
function log(messages, context) {	
	if (!console) { return; }

	function sep(level) {
		var sep = '=========================================================' +
		          '=========================================================\n',
		    offset = 0;

		if (level === Logger.DEBUG || level === Logger.ERROR) offset = 8;
		else if (level === Logger.INFO || level === Logger.WARN) offset = 8;
		else offset = 7;

		return { start: sep.substring(offset), end: sep };
	}

	var hdlr,
	    args = Array.prototype.slice.call(messages, 0),
	    name = context.name,
	    error = context.level === Logger.ERROR,
  	    delim = sep(context.level);

  	if (context.level === Logger.WARN && console.warn) {
  		hdlr = 'warn';
  	} else if (context.level === Logger.ERROR && console.error) {
  		hdlr = 'error';
  	} else if (context.level === Logger.INFO && console.info) {
  		hdlr = 'info';
  	} else {
  		hdlr = 'log';
  	}

  	// -- custom format logging statement for deployr request/response/error --
  	args.unshift('[' + (error ? Logger.ERROR.name : name) + '] ' + delim.start);
  	args.push(delim.end);

  	console[hdlr](args[0], [args[1] + ' ---> ' + args[2]['call']]);

    for (var i = 2; i < args.length; i++) { console.log(args[i]); }  
}

/**
 * Logging category by id.
 */
function Category(id, level, fn) {
	this.id = id;
	this.context = level || Logger.DEBUG;
}

Category.prototype = {	
	log: function(level, msgArgs) {
		if (level.value >= this.context.value) {			
			log(msgArgs, { 
				level: level,
				name: this.context.name,
				value: this.context.value
			});		
		}
	},

	debug: function () {		
		this.log(Logger.DEBUG, arguments);
	},

	error: function () {
		this.log(Logger.ERROR, arguments);
	},

	info: function () {		
		this.log(Logger.INFO, arguments);
	},

	warn: function () {
		this.log(Logger.WARN, arguments);
	},

	setLevel: function(level) {
		if (level && 'value' in level) {
			this.context = level;
		}
	}
};

Logger.DEBUG = { value: 1, name: 'DEBUG' };
Logger.INFO  = { value: 2, name: 'INFO' };
Logger.WARN  = { value: 4, name: 'WARN' };
Logger.ERROR = { value: 8, name: 'ERROR' };
Logger.OFF   = { value: 99, name: 'OFF' };   		

Logger.setLevel = function(newLevel) {
	globalLogger.setLevel(newLevel);
};

Logger.debug = function () {
	globalLogger.debug.apply(globalLogger, arguments);
};

Logger.info = function () {
	globalLogger.info.apply(globalLogger, arguments);
};

Logger.warn = function () {
	globalLogger.warn.apply(globalLogger, arguments);
};

Logger.error = function () {
	globalLogger.error.apply(globalLogger, arguments);
};

Logger.get = function (id, level, fn) {	
	return (loggerMap[id] || (function() {
		loggerMap[id] = new Category(id, level, fn);
		return loggerMap[id];
	})());
};

// --- setup the global logger ---
globalLogger = Logger.get('global');

module.exports 	= Logger;

},{}],28:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
module.exports = function(module) {
  try {
    return require(module);
  } catch (e) {}
};
},{}],29:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

function Queue() {
  this.emptyCallback = null;
  this.callbacks = [];
  this.yielded = false;
  this.response = null;
  this.responseChain = [];  
}

Queue.prototype = {

  add: function(fn, ctx, defer) {
    // currently not waiting and there is no defer delay just make call
    if (!this.yielded && !defer) {      
      fn.apply(ctx || this, [this.response]);
    } else { // add to queue
      this.callbacks.push({ fn: fn, ctx: ctx });
    }
  },

  size: function() {
    return this.callbacks.length;
  },

  isEmpty: function() {
    return this.callbacks.length === 0;
  },

  empty: function(fn, ctx) {
    this.emptyCallback = { fn: fn, ctx: ctx };
  },

  yield: function(yield) {
    this.yielded = yield;
  },

  take: function(response, error, args) { 
    var cb;

    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }


    if (!this.yielded && this.callbacks[0]) {
      cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty   
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  },
  
  flush: function(response, error, args) {        
    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }

    // pop and call next inline
    while (this.callbacks[0]) {
      if (this.yielded) { break; }
      var cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  }
};

module.exports = Queue;
},{}],30:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes');

module.exports = Base.extend(RTypes, {
	initialize: function initialize(name, value, options) {  	
		this.name  = name;
		this.value = value;
		this.options = options || {};
	},

	numeric: function () {
		return this.assert({
			type: this.deployr.RNUMERIC,
			name: this.name, 
			value: this.value,
			toString: this.toString
		});
	},	

	integer: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logical: function () {
		return this.assert({ 
			type: this.deployr.RBOOLEAN, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	character: function () {
		return this.assert({ 
			type: this.deployr.RSTRING, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	date: function () {
		return this.assert({ 
			type: this.deployr.RDATE,
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},

	posixct: function () {
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},	
	
	numericVector: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_VECTOR,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	integerVector: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logicalVector: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	characterVector: function () { 
		return this.assert({ 
			type: this.deployr.RSTRING_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},  
	
	dateVector: function () { 
		return this.assert({ 
			type: this.deployr.RDATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},	
	
	posixctVector: function () { 
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},
	
	list: function () {
		return this.assert({ 
			type: this.deployr.RLIST, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	dataframe: function () { 
		return this.assert({ 
			type: this.deployr.RDATAFRAME, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	factor: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RFACTOR, 
			name: this.name, 
			value: this.value,
			ordered: false,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},

	ordered: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RORDERED, 
			name: this.name, 
			value: this.value,
			ordered: true,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},		

	numericMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	integerMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RINTEGER_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	logicalMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	characterMatrix: function () {
		return this.assert({ 
			type: this.deployr.RSTRING_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	toString: function() {
		var opts   = this.options || {},
		    levels = opts.levels ? '[ levels = ' + opts.levels + ']' : '',
		    labels = opts.labels ? '[ labels = ' + opts.labels + ']' : '';

		return '[ name = '  + this.name + ' ] ' +
		       '[ value = ' + this.value + ' ] ' +
		       '[ type = '  + this.type + ' ] ' +
		       levels + labels;		       
	}
});
},{"./rtypes":32,"./selfish":33}],31:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes'),
    Lang   = require('./lang'),
    RInput = require('./rinput'); 

function create(type, name, value, options) {
	var rinput;

	if (Lang.isObject(name)) {
		rinput = name;
		if (!rinput.type !== type) {
			throw new Error('IllegalArgumentError:' + 
				'Expecting "' + type + '" but found "' + rinput.type + '"');
		}
	} else {
	    rinput = RInput.new(name, value, options)[type]();
	} 

	return rinput;
}

module.exports = Base.extend(RTypes, {	
	numeric: function (name, value) {
		this.inputs.push(create(this.deployr.RNUMERIC, name, value));
		return this;
	},
	
	integer: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER, name, value));
		return this; 
	},
	
	logical: function (name, value) {
		this.inputs.push(create(this.deployr.RBOOLEAN, name, value));
		return this; 
	},
	
	character: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING, name, value));
		return this; 
	},
	
	date: function (name, value) {
		this.inputs.push(create(this.deployr.RDATE, name, value));
		return this; 
	},

	posixct: function (name, value) {
		this.inputs.push(create(this.deployr.RPOSIX_DATE, name, value));
		return this; 
	},	
	
	numericVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_VECTOR, name, value));
		return this; 
	},
	
	integerVector: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER_VECTOR, name, value));
		return this; 
	},
	
	logicalVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_VECTOR, name, value));
		return this; 
	},
	
	characterVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RSTRING_VECTOR, name, value));
		return this; 
	},  
	
	dateVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATE_VECTOR, name, value));
		return this; 
	},	
	
	posixctVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RPOSIX_DATE_VECTOR, name, value));
		return this; 
	},
	
	list: function (name, value) {
		this.inputs.push(create(this.deployr.RLIST, name, value));
		return this; 
	},
	
	dataframe: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATAFRAME, name, value));
		return this; 
	},	

	factor: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RFACTOR, name, value, opts));
		return this;
	},

	ordered: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RORDERED, name, value, opts));
		return this;
	},		

	numericMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_MATRIX, name, value));
		return this; 
	},

	integerMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RINTEGER_MATRIX, name, value));
		return this; 
	},

	logicalMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_MATRIX, name, value));
		return this; 
	},

	characterMatrix: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING_MATRIX, name, value));
		return this;
	}
});
},{"./lang":26,"./rinput":30,"./rtypes":32,"./selfish":33}],32:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base,
    Lang = require('./lang'),
    map  = {}; // deployr->To->R catalog

module.exports = Base.extend({
	r: {
		PRIMITIVE: 'primitive',
		DATAFRAME: 'dataframe',
		LIST: 'list',
		MATRIX: 'matrix',
		DATE: 'date',
		FACTOR: 'factor',
		VECTOR: 'vector'
	},

	deployr: {
		RBOOLEAN: 'logical',
		RNUMERIC: 'numeric',
		RINTEGER: 'integer',
		RSTRING: 'character',
		RDATE: 'date',
		RPOSIX_DATE: 'posixct',
		RBOOLEAN_VECTOR: 'logicalVector',
		RNUMERIC_VECTOR:'numericVector',
		RINTEGER_VECTOR: 'integerVector',	
		RSTRING_VECTOR: 'characterVector',
		RDATE_VECTOR: 'dateVector',
		RPOSIX_DATE_VECTOR: 'posixctVector',
		RLIST: 'list',
		RDATAFRAME: 'dataframe',
		RFACTOR: 'factor',
		RORDERED: 'ordered',		
		RBOOLEAN_MATRIX: 'logicalMatrix',
		RNUMERIC_MATRIX: 'numericMatrix',
		RINTEGER_MATRIX: 'integerMatrix',		
		RSTRING_MATRIX: 'characterMatrix'
	},

	isDate: function(type) {
		return (type === this.deployr.RDATE || 
		        type === this.deployr.RPOSIX_DATE || 
		        type === this.deployr.RDATE_VECTOR ||
		        type === this.deployr.RPOSIX_DATE_VECTOR ||
		        type === this.r.DATE);
	},

	deployrToR: function(type) {	
		var deployr = this.deployr,
		    r       = this.r;

		if (!map[type]) { // build catalog only once	
			map[deployr.RBOOLEAN]           = r.PRIMITIVE;
			map[deployr.RNUMERIC]           = r.PRIMITIVE;
			map[deployr.RINTEGER]           = r.PRIMITIVE;
			map[deployr.RSTRING]            = r.PRIMITIVE;
			map[deployr.RDATE]              = r.DATE;
			map[deployr.RPOSIX_DATE]        = r.DATE;
			map[deployr.RBOOLEAN_VECTOR]    = r.VECTOR;
			map[deployr.RNUMERIC_VECTOR]    = r.VECTOR;
			map[deployr.RINTEGER_VECTOR]    = r.VECTOR;
			map[deployr.RSTRING_VECTOR]     = r.VECTOR;
			map[deployr.RDATE_VECTOR]       = r.VECTOR;
			map[deployr.RPOSIX_DATE_VECTOR] = r.VECTOR;
			map[deployr.RLIST]              = r.LIST;
			map[deployr.RDATAFRAME]         = r.DATAFRAME;
			map[deployr.RFACTOR]            = r.FACTOR;
			map[deployr.RORDERED]           = r.FACTOR;
			map[deployr.RBOOLEAN_MATRIX]    = r.MATRIX;
			map[deployr.RNUMERIC_MATRIX]    = r.MATRIX;
			map[deployr.RINTEGER_MATRIX]    = r.MATRIX;
			map[deployr.RSTRING_MATRIX]     = r.MATRIX;
		}

		return map[type];		
	},

	/**
	 * Assert that the `rinput` value is the correct JavaScript Data Type.
	 */
	assert: function (rinput) {
		var deployr = this.deployr,
    		NOOP    = null,
		    values  = rinput.value,
		    fn;

		values = !Lang.isArray(values) ? [values] : values;

		for (var i = 0; i < values.length; i++) {
			var value = values[i];

			switch (rinput.type) {
				case deployr.RNUMERIC :
				case deployr.RNUMERIC_VECTOR :
				case deployr.RNUMERIC_VECTOR :
				fn = Lang.isNumber;
				// support string numbers
				var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RINTEGER :
			    case deployr.RINTEGER_VECTOR :
			    fn = Lang.isNumber;
			    // support string numbers
			    var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RBOOLEAN :
			    case deployr.RBOOLEAN_VECTOR :
			    fn = Lang.isBoolean;
			    break;
			    
			    case deployr.RSTRING :
			    case deployr.RSTRING_VECTOR :	
			    fn = Lang.isString;
			    break;

			    case deployr.RDATE :
			    case deployr.RPOSIX_DATE :
			    case deployr.RDATE_VECTOR :
			    case deployr.RPOSIX_DATE_VECTOR :
			    fn = Lang.isDate;
			    break;

			    case deployr.RFACTOR :
			    case deployr.RORDERED :			    
			    case deployr.RDATAFRAME :
			    case deployr.RINTEGER_MATRIX :
			    case deployr.RBOOLEAN_MATRIX :
			    case deployr.RSTRING_MATRIX :	    
			    fn = NOOP;
			    break
			}

			if (fn && !fn(value)) {
				throw new Error('RInputFormatError: ' + '"' + value + 
					'" is not a valid "' + rinput.type + '" type.');
			}
		}

		return rinput;
	}
});
},{"./lang":26,"./selfish":33}],33:[function(require,module,exports){
/*!
 * https://github.com/Gozala/selfish
 */

/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function($){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)(function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});
},{}],34:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Lang = require('./lang');

var get = exports.get = function(s, key) {
    function traverse(obj, fn, parent) {
        for (var i in obj) {
            var result = fn.apply(this, [i, obj[i], parent]);
            if (result) {
                return result;
            } else {
                if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {                
                   traverse(obj[i], fn, i);
               }
            }
        }
    }

    function getProperty(obj, property) {
        var acc = {};
        traverse(obj, function(key, value, parent) {
            if (key === property) {  
                acc = value;
                return acc;
            } else {
                return null;
            }
        });
        return acc;
    }

    function empty(obj) {
        for (var prop in obj) { if (obj.hasOwnProperty(prop)) return obj; }
        return !Lang.isObject(obj) ? obj : null;
    }

    return empty(getProperty(s, key));
};

var inArray = exports.inArray = function(haystack, needle, key) {
    var i, max = haystack.length;

    for (i = 0; i < max; i++) {
        if (key) {
            if (haystack[i][key] === needle) { return haystack[i]; }
        } else {
            if (haystack[i] === needle) { return haystack[i]; }
        }   
    }
    return null;
};

exports.merge = function(to, from) {        
    if (!to || typeof(to) !== 'object') { to = {}; }
    if (!from || typeof(from) !== 'object') { from = {}; }

    for (var k in from) { to[k] = from[k]; }

    return to;
};

exports.workspace = function(obj, name) {
    var ws = get(obj, 'workspace');
    return (ws ? name ? inArray(ws.objects, name, 'name') : ws.objects || ws.object: null);
};

exports.signature = function() {
    var args   = Array.prototype.slice.call(arguments['0'], 0),
        len    = args.length,
        create = false,
        opts   = {},
        api;

    if (len === 1 && Lang.isObject(args[0])) {
        opts = args[0];
        api  = opts.project ? '/r/project/execute/script' :
            '/r/repository/script/execute';
    } else if (len === 1 && Lang.isString(args[0])) {
        args = args[0].split('\/');
        api  = '/r/repository/script/execute'
        opts = {
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len === 2) {
        // ex: .script('/testuser/root/DeployR - Hello World.R', project)
        var project = args[1];
        api = project ? '/r/project/execute/script' : '/r/repository/script/execute';

        args = args[0].split('\/');
        opts = {
            project: project,
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len > 2) {
        // ex: .script('DeployR - Hello World.R', 'testuser', 'root')
        opts = {
            author: args[2],
            directory: args[1],
            filename: args[0]
        };
    }

    // indicate a new project should be created
    if (opts.project && Lang.isBoolean(opts.project)) {
      delete opts['project'];
      create = true;
    }

    return {
        api: api,
        opts: opts,
        create: create
    };
};
},{"./lang":26}],35:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

function getXHR() {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
}

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  this.text = this.req.method !='HEAD' 
     ? this.xhr.responseText 
     : null;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && str.length
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self); 
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    self.callback(err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  if (2 == fn.length) return fn(err, res);
  if (err) return this.emit('error', err);
  fn(res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;
    if (0 == xhr.status) {
      if (self.aborted) return self.timeoutError();
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  if (xhr.upload) {
    xhr.upload.onprogress = function(e){
      e.percent = e.loaded / e.total * 100;
      self.emit('progress', e);
    };
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":36,"reduce":37}],36:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],37:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],38:[function(require,module,exports){
module.exports={
  "name": "deployr",
  "version": "7.4.1",
  "description": "Simplified JavaScript client library for making requests to DeployR.",
  "keywords": [
    "deployr",
    "deployr.io",
    "ajax",
    "R",
    "api",
    "simple"
  ],
  "author": {
    "name": "DeployR - Revolution Analytics Inc."
  },
  "contributors": [
    {
      "name": "Sean Wells"
    }
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/deployr/js-client-library.git"
  },
  "homepage": "http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc",
  "scripts": {
    "start": "gulp start",
    "build": "gulp"
  },
  "devDependencies": {
    "browserify": "^9.0.3",
    "gulp": "^3.8.11",
    "gulp-connect": "^2.2.0",
    "gulp-header": "^1.2.2",
    "gulp-jshint": "^1.9.2",
    "gulp-livereload": "^3.8.0",
    "gulp-plumber": "^0.6.6",
    "gulp-uglifyjs": "^0.6.0",
    "gulp-util": "^3.0.4",
    "tape": "^3.5.0",
    "vinyl-source-stream": "^1.0.0"
  },
  "dependencies": {
    "d.js": "^0.6.0",
    "superagent": "^0.21.0",
    "ws": "^0.4.32"
  },
  "main": "deployr.js",
  "engines": {
    "node": ">= 0.10.0"
  },
  "license": "Apache 2.0 License",
  "bugs": {
    "url": "https://github.com/deployr/js-client-library/issues"
  },
  "directories": {
    "example": "examples",
    "test": "test"
  },
  "gitHead": "3c955e1898bedfaf562b0b751674c4ebf7d602f6",
  "_id": "deployr@7.4.1",
  "_shasum": "3cc53c6cea2366525e21898bb6005f42e979b4e3",
  "_from": "deployr@>=7.4.1 <8.0.0",
  "_npmVersion": "1.4.28",
  "_npmUser": {
    "name": "swells",
    "email": "sean.wells.sc@gmail.com"
  },
  "maintainers": [
    {
      "name": "swells",
      "email": "sean.wells.sc@gmail.com"
    }
  ],
  "dist": {
    "shasum": "3cc53c6cea2366525e21898bb6005f42e979b4e3",
    "tarball": "http://registry.npmjs.org/deployr/-/deployr-7.4.1.tgz"
  },
  "_resolved": "https://registry.npmjs.org/deployr/-/deployr-7.4.1.tgz",
  "readme": "ERROR: No README data found!"
}

},{}],39:[function(require,module,exports){
module.exports = require('./lib/enum');
},{"./lib/enum":40}],40:[function(require,module,exports){
(function (global){
(function (root, module, global, define) {

  "use strict";

  /**
   * Represents an Item of an Enum.
   * @param {String} key   The Enum key.
   * @param {Number} value The Enum value.
   */
  function EnumItem(key, value) {
    this.key = key;
    this.value = value;
  }

  EnumItem.prototype = {

    /*constructor reference so that, this.constructor===EnumItem//=>true */
    constructor: EnumItem,

    /**
     * Checks if the flagged EnumItem has the passing object.
     * @param  {EnumItem || String || Number} value The object to check with.
     * @return {Boolean}                            The check result.
     */
    has: function(value) {
      if (value instanceof EnumItem || (typeof(value) === 'object' && value.key !== undefined && value.value !== undefined)) {
        return (this.value & value.value) !== 0;
      } else if (typeof(value) === 'string') {
        return this.key.indexOf(value) >= 0;
      } else {
        return (this.value & value) !== 0;
      }
    },

    /**
     * Checks if the EnumItem is the same as the passing object.
     * @param  {EnumItem || String || Number} key The object to check with.
     * @return {Boolean}                          The check result.
     */
    is: function(key) {
      if (key instanceof EnumItem || (typeof(key) === 'object' && key.key !== undefined && key.value !== undefined)) {
        return this.key === key.key;
      } else if (typeof(key) === 'string') {
        return this.key === key;
      } else {
        return this.value === key;
      }
    },

    /**
     * Returns String representation of this EnumItem.
     * @return {String} String representation of this EnumItem.
     */
    toString: function() {
      return this.key;
    },

    /**
     * Returns JSON object representation of this EnumItem.
     * @return {String} JSON object representation of this EnumItem.
     */
    toJSON: function() {
      return this.key;
    },

    /**
     * Returns the value to compare with.
     * @return {String} The value to compare with.
     */
    valueOf: function() {
      return this.key;
    }

  };


  /**
   * Represents an Enum with enum items.
   * @param {Array || Object}  map     This are the enum items.
   * @param {String || Object} options This are options. [optional]
   */
  function Enum(map, options) {

    if (options && typeof(options) === 'string') {
      options = { name: options };
    }

    this._options = options || {};
    this._options.separator = this._options.separator || ' | ';

    this.enums = [];

    if (map.length) {
      var array = map;
      map = {};

      for (var i = 0; i < array.length; i++) {
        map[array[i]] = Math.pow(2, i);
      }
    }

    for (var member in map) {
      if ((this._options.name && member === 'name') || member === '_options' || member === 'get' || member === 'getKey' || member === 'getValue' || member === 'enums' || member === 'isFlaggable') {
        throw new Error('Enum key "' + member + '" is a reserved word!');
      }
      this[member] = new EnumItem(member, map[member]);
      this.enums.push(this[member]);
    }

    if (this._options.name) {
      this.name = this._options.name;
    }

    var self = this;

    function isFlaggable() {
      for (var i = 0, len = self.enums.length; i < len; i++) {
        var e = self.enums[i];

        if (!((e.value !== 0) && !(e.value & (e.value - 1)))) {
          return false;
        }
      }
      return true;
    }

    this.isFlaggable = isFlaggable();
    this.freezeEnums(); //this will make instances of Enum non-extensible
  }

  Enum.prototype = {

    /*constructor reference so that, this.constructor===Enum//=>true */
    constructor: Enum,

    /**
     * Returns the appropriate EnumItem key.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {String}                           The get result.
     */
    getKey: function(value) {
      var item = this.get(value);
      if (item) {
        return item.key;
      } else {
        return 'Undefined';
      }
    },

    /**
     * Returns the appropriate EnumItem value.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {Number}                           The get result.
     */
    getValue: function(key) {
      var item = this.get(key);
      if (item) {
        return item.value;
      } else {
        return null;
      }
    },

    /**
     * Returns the appropriate EnumItem.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {EnumItem}                         The get result.
     */
    get: function(key) {
      if (key === null || key === undefined) return null;

      if (key instanceof EnumItem || (typeof(key) === 'object' && key.key !== undefined && key.value !== undefined)) {
        var foundIndex = this.enums.indexOf(key);
        if (foundIndex >= 0) {
          return key;
        }
        if (!this.isFlaggable || (this.isFlaggable && key.key.indexOf(this._options.separator) < 0)) {
          return null;
        }
        return this.get(key.key);
      } else if (typeof(key) === 'string') {
        if (key.indexOf(this._options.separator) > 0) {
          var parts = key.split(this._options.separator);

          var value = 0;
          for(var i = 0; i < parts.length; i++) {
            var part = parts[i];

            value |= this[part].value;
          }

          return new EnumItem(key, value);
        } else {
          return this[key];
        }
      } else {
        for (var m in this) {
          if (this.hasOwnProperty(m)) {
            if (this[m].value === key) {
              return this[m];
            }
          }
        }

        var result = null;

        if (this.isFlaggable) {
          for (var n in this) {
            if (this.hasOwnProperty(n)) {
              if ((key & this[n].value) !== 0) {
                if (result) {
                  result += this._options.separator;
                } else {
                  result = '';
                }
                result += n;
              }
            }
          }
        }

        return this.get(result || null);
      }
    },

    /**
     * Define freezeEnums() as a property of the prototype.
     * make enumerable items nonconfigurable and deep freeze the properties. Throw Error on property setter.
     */
    freezeEnums: function() {
      function freezer(o) {
        var props = Object.getOwnPropertyNames(o);
        props.forEach( function(p){
          if (!Object.getOwnPropertyDescriptor(o, p).configurable) {
            return;
          }

          Object.defineProperties(o, p, {writable:false, configurable:false});
        })
        return o;
      }

      function getPropertyValue(value) {
        return value;
      }

      function deepFreezeEnums(o) {
        if (typeof o !== 'object' || o === null || Object.isFrozen(o) || Object.isSealed(o) ){
          return;
        }
        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            o.__defineGetter__(key, getPropertyValue.bind(null, o[key]));
            o.__defineSetter__(key, function throwPropertySetError(value){throw TypeError("Cannot redefine property; Enum Type is not extensible.")});
            deepFreezeEnums(o[key]);
          }
        }
        if (Object.freeze) {
          Object.freeze(o);
        } else {
          freezer(o);
        }
      }

      deepFreezeEnums(this);

      return this;
    },
  };


  if (module && module.exports) {
    module.exports = Enum;
  } else if (define) {
    define(function () {
      return Enum;
    });
  } else {
    root.Enum = Enum;
  }

  if (module && module.exports && global) {

    /**
     * Registers the Enum Type globally in node.js.
     * @param  {String} key Global variable. [optional]
     */
    Enum.register = function(key) {
      key = key || 'Enum';
      if (!global[key]) {
        global[key] = Enum;
      }
    };
  }

}(
  this,
  typeof(module) !== 'undefined' ? module : undefined,
  typeof(global) !== 'undefined' ? global : undefined,
  typeof(define) !== 'undefined' ? define : undefined
));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9lbnVtL2xpYi9lbnVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHJvb3QsIG1vZHVsZSwgZ2xvYmFsLCBkZWZpbmUpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBJdGVtIG9mIGFuIEVudW0uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICBUaGUgRW51bSBrZXkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgRW51bSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIEVudW1JdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBFbnVtSXRlbS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKmNvbnN0cnVjdG9yIHJlZmVyZW5jZSBzbyB0aGF0LCB0aGlzLmNvbnN0cnVjdG9yPT09RW51bUl0ZW0vLz0+dHJ1ZSAqL1xuICAgIGNvbnN0cnVjdG9yOiBFbnVtSXRlbSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgZmxhZ2dlZCBFbnVtSXRlbSBoYXMgdGhlIHBhc3Npbmcgb2JqZWN0LlxuICAgICAqIEBwYXJhbSAge0VudW1JdGVtIHx8IFN0cmluZyB8fCBOdW1iZXJ9IHZhbHVlIFRoZSBvYmplY3QgdG8gY2hlY2sgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2hlY2sgcmVzdWx0LlxuICAgICAqL1xuICAgIGhhczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVudW1JdGVtIHx8ICh0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5rZXkgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiB2YWx1ZS52YWx1ZSkgIT09IDA7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleS5pbmRleE9mKHZhbHVlKSA+PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgdmFsdWUpICE9PSAwO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIEVudW1JdGVtIGlzIHRoZSBzYW1lIGFzIHRoZSBwYXNzaW5nIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBjaGVjayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2hlY2sgcmVzdWx0LlxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBFbnVtSXRlbSB8fCAodHlwZW9mKGtleSkgPT09ICdvYmplY3QnICYmIGtleS5rZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkudmFsdWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5ID09PSBrZXkua2V5O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Yoa2V5KSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5ID09PSBrZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0ga2V5O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEVudW1JdGVtLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRW51bUl0ZW0uXG4gICAgICovXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMua2V5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEpTT04gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRW51bUl0ZW0uXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBKU09OIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEVudW1JdGVtLlxuICAgICAqL1xuICAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHRvIGNvbXBhcmUgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB2YWx1ZSB0byBjb21wYXJlIHdpdGguXG4gICAgICovXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfVxuXG4gIH07XG5cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBFbnVtIHdpdGggZW51bSBpdGVtcy5cbiAgICogQHBhcmFtIHtBcnJheSB8fCBPYmplY3R9ICBtYXAgICAgIFRoaXMgYXJlIHRoZSBlbnVtIGl0ZW1zLlxuICAgKiBAcGFyYW0ge1N0cmluZyB8fCBPYmplY3R9IG9wdGlvbnMgVGhpcyBhcmUgb3B0aW9ucy4gW29wdGlvbmFsXVxuICAgKi9cbiAgZnVuY3Rpb24gRW51bShtYXAsIG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZihvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSB7IG5hbWU6IG9wdGlvbnMgfTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl9vcHRpb25zLnNlcGFyYXRvciA9IHRoaXMuX29wdGlvbnMuc2VwYXJhdG9yIHx8ICcgfCAnO1xuXG4gICAgdGhpcy5lbnVtcyA9IFtdO1xuXG4gICAgaWYgKG1hcC5sZW5ndGgpIHtcbiAgICAgIHZhciBhcnJheSA9IG1hcDtcbiAgICAgIG1hcCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcFthcnJheVtpXV0gPSBNYXRoLnBvdygyLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtZW1iZXIgaW4gbWFwKSB7XG4gICAgICBpZiAoKHRoaXMuX29wdGlvbnMubmFtZSAmJiBtZW1iZXIgPT09ICduYW1lJykgfHwgbWVtYmVyID09PSAnX29wdGlvbnMnIHx8IG1lbWJlciA9PT0gJ2dldCcgfHwgbWVtYmVyID09PSAnZ2V0S2V5JyB8fCBtZW1iZXIgPT09ICdnZXRWYWx1ZScgfHwgbWVtYmVyID09PSAnZW51bXMnIHx8IG1lbWJlciA9PT0gJ2lzRmxhZ2dhYmxlJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudW0ga2V5IFwiJyArIG1lbWJlciArICdcIiBpcyBhIHJlc2VydmVkIHdvcmQhJyk7XG4gICAgICB9XG4gICAgICB0aGlzW21lbWJlcl0gPSBuZXcgRW51bUl0ZW0obWVtYmVyLCBtYXBbbWVtYmVyXSk7XG4gICAgICB0aGlzLmVudW1zLnB1c2godGhpc1ttZW1iZXJdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLl9vcHRpb25zLm5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gaXNGbGFnZ2FibGUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5lbnVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZSA9IHNlbGYuZW51bXNbaV07XG5cbiAgICAgICAgaWYgKCEoKGUudmFsdWUgIT09IDApICYmICEoZS52YWx1ZSAmIChlLnZhbHVlIC0gMSkpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0ZsYWdnYWJsZSA9IGlzRmxhZ2dhYmxlKCk7XG4gICAgdGhpcy5mcmVlemVFbnVtcygpOyAvL3RoaXMgd2lsbCBtYWtlIGluc3RhbmNlcyBvZiBFbnVtIG5vbi1leHRlbnNpYmxlXG4gIH1cblxuICBFbnVtLnByb3RvdHlwZSA9IHtcblxuICAgIC8qY29uc3RydWN0b3IgcmVmZXJlbmNlIHNvIHRoYXQsIHRoaXMuY29uc3RydWN0b3I9PT1FbnVtLy89PnRydWUgKi9cbiAgICBjb25zdHJ1Y3RvcjogRW51bSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIEVudW1JdGVtIGtleS5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBnZXQgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGdldCByZXN1bHQuXG4gICAgICovXG4gICAgZ2V0S2V5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldCh2YWx1ZSk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5rZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1VuZGVmaW5lZCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIEVudW1JdGVtIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge0VudW1JdGVtIHx8IFN0cmluZyB8fCBOdW1iZXJ9IGtleSBUaGUgb2JqZWN0IHRvIGdldCB3aXRoLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZ2V0IHJlc3VsdC5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBFbnVtSXRlbS5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBnZXQgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtFbnVtSXRlbX0gICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGdldCByZXN1bHQuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAoa2V5IGluc3RhbmNlb2YgRW51bUl0ZW0gfHwgKHR5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiBrZXkua2V5ICE9PSB1bmRlZmluZWQgJiYga2V5LnZhbHVlICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHZhciBmb3VuZEluZGV4ID0gdGhpcy5lbnVtcy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0ZsYWdnYWJsZSB8fCAodGhpcy5pc0ZsYWdnYWJsZSAmJiBrZXkua2V5LmluZGV4T2YodGhpcy5fb3B0aW9ucy5zZXBhcmF0b3IpIDwgMCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5LmtleSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZihrZXkpID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fb3B0aW9ucy5zZXBhcmF0b3IpID4gMCkge1xuICAgICAgICAgIHZhciBwYXJ0cyA9IGtleS5zcGxpdCh0aGlzLl9vcHRpb25zLnNlcGFyYXRvcik7XG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgdmFsdWUgfD0gdGhpc1twYXJ0XS52YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV3IEVudW1JdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIG0gaW4gdGhpcykge1xuICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KG0pKSB7XG4gICAgICAgICAgICBpZiAodGhpc1ttXS52YWx1ZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRmxhZ2dhYmxlKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShuKSkge1xuICAgICAgICAgICAgICBpZiAoKGtleSAmIHRoaXNbbl0udmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuX29wdGlvbnMuc2VwYXJhdG9yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IG47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVzdWx0IHx8IG51bGwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgZnJlZXplRW51bXMoKSBhcyBhIHByb3BlcnR5IG9mIHRoZSBwcm90b3R5cGUuXG4gICAgICogbWFrZSBlbnVtZXJhYmxlIGl0ZW1zIG5vbmNvbmZpZ3VyYWJsZSBhbmQgZGVlcCBmcmVlemUgdGhlIHByb3BlcnRpZXMuIFRocm93IEVycm9yIG9uIHByb3BlcnR5IHNldHRlci5cbiAgICAgKi9cbiAgICBmcmVlemVFbnVtczogZnVuY3Rpb24oKSB7XG4gICAgICBmdW5jdGlvbiBmcmVlemVyKG8pIHtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobyk7XG4gICAgICAgIHByb3BzLmZvckVhY2goIGZ1bmN0aW9uKHApe1xuICAgICAgICAgIGlmICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCBwKS5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvLCBwLCB7d3JpdGFibGU6ZmFsc2UsIGNvbmZpZ3VyYWJsZTpmYWxzZX0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRlZXBGcmVlemVFbnVtcyhvKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcgfHwgbyA9PT0gbnVsbCB8fCBPYmplY3QuaXNGcm96ZW4obykgfHwgT2JqZWN0LmlzU2VhbGVkKG8pICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgby5fX2RlZmluZUdldHRlcl9fKGtleSwgZ2V0UHJvcGVydHlWYWx1ZS5iaW5kKG51bGwsIG9ba2V5XSkpO1xuICAgICAgICAgICAgby5fX2RlZmluZVNldHRlcl9fKGtleSwgZnVuY3Rpb24gdGhyb3dQcm9wZXJ0eVNldEVycm9yKHZhbHVlKXt0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVkZWZpbmUgcHJvcGVydHk7IEVudW0gVHlwZSBpcyBub3QgZXh0ZW5zaWJsZS5cIil9KTtcbiAgICAgICAgICAgIGRlZXBGcmVlemVFbnVtcyhvW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgIE9iamVjdC5mcmVlemUobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJlZXplcihvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWVwRnJlZXplRW51bXModGhpcyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH07XG5cblxuICBpZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBFbnVtO1xuICB9IGVsc2UgaWYgKGRlZmluZSkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRW51bTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290LkVudW0gPSBFbnVtO1xuICB9XG5cbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyAmJiBnbG9iYWwpIHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgRW51bSBUeXBlIGdsb2JhbGx5IGluIG5vZGUuanMuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgR2xvYmFsIHZhcmlhYmxlLiBbb3B0aW9uYWxdXG4gICAgICovXG4gICAgRW51bS5yZWdpc3RlciA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAga2V5ID0ga2V5IHx8ICdFbnVtJztcbiAgICAgIGlmICghZ2xvYmFsW2tleV0pIHtcbiAgICAgICAgZ2xvYmFsW2tleV0gPSBFbnVtO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufShcbiAgdGhpcyxcbiAgdHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlIDogdW5kZWZpbmVkLFxuICB0eXBlb2YoZ2xvYmFsKSAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB1bmRlZmluZWQsXG4gIHR5cGVvZihkZWZpbmUpICE9PSAndW5kZWZpbmVkJyA/IGRlZmluZSA6IHVuZGVmaW5lZFxuKSk7XG4iXX0=
},{}],41:[function(require,module,exports){
/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
},{}],42:[function(require,module,exports){
/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function(_, $){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)('selfish', function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});

},{}]},{},[1])(1)
});