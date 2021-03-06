'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Company = mongoose.model('Company'),
  CompaniesService = require('../services/companies.server.services.js'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  quandlService = require(path.resolve('./modules/quandl/server/services/quandl.server.api')),
  _ = require('lodash'),
  config = require(path.resolve('./config/config'));

/**
 * Create a Company
 */
exports.create = function(req, res) {
  var company = new Company(req.body);
  company.user = req.user;

  company.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(company);
    }
  });
};

/**
 * Show the current Company
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var company = req.company ? req.company.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  company.isCurrentUserOwner = req.user && company.user && company.user._id.toString() === req.user._id.toString();

  res.jsonp(company);
};

/**
 * Update a Company
 */
exports.update = function(req, res) {
  var company = req.company;

  company = _.extend(company, req.body);

  company.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(company);
    }
  });
};

/**
 * Delete an Company
 */
exports.delete = function(req, res) {
  var company = req.company;

  company.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(company);
    }
  });
};

/**
 * List of Companies
 */
exports.list = function(req, res) {
  Company.find().sort('-created').populate('user', 'displayName').exec(function(err, companies) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(companies);
    }
  });
};

/**
 * Company middleware
 */
exports.companyByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Company is invalid'
    });
  }

  Company.findById(id).populate('user', 'displayName').exec(function (err, company) {
    if (err) {
      return next(err);
    } else if (!company) {
      return res.status(404).send({
        message: 'No Company with that identifier has been found'
      });
    }
    req.company = company;
    next();
  });
};

exports.search = function(req, res) {
  if (req.params.query && req.params.query.length > 0){
    Company.find({ name : { '$regex': req.params.query, '$options': 'i' }})
        .limit(25)
        .exec(function(err, companies) {
          if (err) {
            return res.status(err.status).send({
              message: errorHandler.getErrorMessage(err)
            });
          } else {
            res.json(companies);
          }
        });
  }
  else{
    res.status(400).json({ message : 'Please provide a query to search by.' });
  }
};

exports.searchStatements = function(req, res) {
  if (req.params.query && req.params.query.length > 0){
    mongoose.connection.db.collection('statements', function(err, collection){
      collection.find({ $or: [{ name: { '$regex': req.params.query, '$options': 'i' }}, { ticker : { '$regex': req.params.query, '$options': 'i' }}]})
          .toArray(function(err, companies) {
            if (err) {
              return res.status(err.status).send({
                message: errorHandler.getErrorMessage(err)
              });
            } else {
              res.json(companies);
            }
          });
    });
  }
  else{
    res.status(400).json({ message : 'Please provide a query to search by.' });
  }
};

exports.searchStatementsByTicker = function(req, res) {
  mongoose.connection.db.collection('statements', function(err, collection) {
    collection.findOne({ticker: req.params.ticker}, function (err, company) {
      if (err) {
        return res.status(err.status).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(company);
      }
    });
  });
};

function renderStatement(statement){
  var otherColumns = [];
  var output = '<table class="table" style="width:100%;"><tr>';
  Object.keys(statement).forEach(function (key, i) {
    output += '<th><pre>' + key + '</pre></th>';
    if (i > 0){
      otherColumns.push(key);
    }
  });
  output += '</tr>';

  console.log(statement);

  statement[Object.keys(statement)[0]].forEach(function(val, i){
    var total = false;
    if (val.indexOf('=') > -1){
      total = true;
    }

    var printValue = '<td><pre>' + val + '</pre></td>';
    if (total){
      printValue = '<td><pre style="font-weight: bold;text-decoration: underline;">' + val + '</pre></td>';
    }
    otherColumns.forEach(function(key, j){
      if (total){
        printValue += '<td><pre style="font-weight: bold;text-decoration: underline;">' + statement[key][i] + '</pre></td>';
      }
      else{
        printValue += '<td><pre>' + statement[key][i] + '</pre></td>';
      }
    });
    output += printValue + '</tr>';
  });
  output += '</table>';
  return output;
}

exports.getStatement = function(req, res) {
  CompaniesService.getFileFromS3('xbrltl', req.body.s3link)
      .then(function(data){
        res.send(renderStatement(data));
      })
      .catch(function(err){
        res.status(err.status).json(err);
      });
};

exports.findByCode = function(req, res) {
  Company.findOne({ code : req.params.id.toUpperCase() }, function(err, company){
    if (err){
      console.log(err);
      return res.status(err.status).json(err);
    }
    else{
      if (company){
        quandlService.getDataset(config.quandlApiKey, 'WIKI', req.params.id.toUpperCase())
            .then(function(info){
              res.json(info);
            })
            .catch(function(err){
              console.log(err);
              return res.status(err.status).json(err);
            });
      }
      else{
        return res.status(400).json({ message : 'Company not found.' });
      }
    }
  });
};


