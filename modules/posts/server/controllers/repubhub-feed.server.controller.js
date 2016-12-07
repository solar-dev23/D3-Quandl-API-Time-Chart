'use strict';

var path = require('path'),
    config = require(path.resolve('./config/config')),
    feed = require('rss-to-json'),
    request = require('request'),
    cheerio = require('cheerio');


exports.getNewsFeed = function (req, res) {
    feed.load(config.repubhubRssUrl, function(err, rss){
        if (err){
            res.status(err.status).send(err);
        }
        res.json(rss);
    });
};

exports.getNewsArticle = function (req, res) {
    request(req.body.url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            res.send($('#pagewidth').html());
        }
    });
};

