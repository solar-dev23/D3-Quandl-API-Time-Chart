'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * post Schema
 */
var postSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    subject: {
        type: String,
        enum: ['finance', 'social science', 'sports'],
        trim: true
    },
    models: [{type: Schema.ObjectId, ref: 'Models'}],
    datasets: [{type: Schema.ObjectId, ref: 'Datasets'}],
    attachments: {
        type: Array,
        default: [],
        trim: false
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    users: [{type: Schema.ObjectId, ref: 'User'}],
    access: {
        type: String,
        enum: ['public', 'paid', 'private'],
        default: 'public'
    },
    cost: {
      type: Number,
      default: 0,
      trim: false
    }
});

mongoose.model('post', postSchema);
