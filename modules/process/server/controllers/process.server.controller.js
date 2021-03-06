'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
    mongoose = require('mongoose'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    Process = mongoose.model('Process');

/**
 * List processes
 */
exports.list = function (req, res) {
    Process.find({})
        .sort('-created')
        .populate('user', 'username')
        .exec(function (err, datasets) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }
            else {
                res.json(datasets);
            }
        });
};

/**
 * List by user id
 */
exports.listByUserId = function (req, res) {
    Process.find({
            user: req.user._id
        })
        .sort('-created')
        .exec(function (err, processes) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }
            else {
                res.json(processes);
            }
        });
};

/**
 * Create a process
 */
exports.create = function (req, res) {
    Process.findOne({ title : req.body.process.title, user : req.user._id }, function(err, foundprocess){
        if (err){
            return res.status(err.status).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        if (!foundprocess){
            req.body.process.user = req.user._id;
            new Process(req.body.process)
                .save(function (err, process) {
                    if (err) {
                        res.status(400).send({
                            message: errorHandler.getErrorMessage(err)
                        });
                    }
                    else {
                        res.json(process);
                    }
                });
        }
        else{
            res.status(409).json('Workflow with this title already exists, please enter a different title.');
        }
    });
};

/**
 * Get process by id
 */
exports.read = function (req, res) {
    Process.findOne({
            _id: req.params.processId
        })
        .populate('user', 'username')
        .exec(function (err, process) {
            if (err) {
                res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }
            else {
                res.json(process);
            }
        });
};

/**
 * Update a process by id
 */
exports.update = function (req, res) {
    Process.findOne({ title : req.body.process.title, user : req.user._id }, function(err, foundprocess) {
        if (err) {
            return res.status(err.status).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        if (!foundprocess || (foundprocess && foundprocess.id === req.body.process._id)) {
            Process.update({
                _id: req.params.processId
            }, req.body.process, function (err, _res) {
                if (err) {
                    res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                }
                else {
                    res.json(req.body.process);
                }
            });
        }
        else{
            res.status(409).json('Workflow with this title already exists, please enter a different title.');
        }
    });
};

/**
 * Delete a process by id
 */
exports.delete = function (req, res) {
    Process.remove({
        _id: req.params.processId
    }, function (err, process) {
        if (err) {
            res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        else {
            res.json(process);
        }
    });
};
