var express = require('express');
var router = express.Router();
var asciidoctor = require('asciidoctor.js')();
var mongoose = require('mongoose');
require('../models/write.model');
var Blog = mongoose.model('Blog');

module.exports = function (app) {
  app.use('/submit', router);
};

router.post('/', function (req, res, next) {
  var blog = new Blog();
  var html = asciidoctor.convert(req.body.contents);

  blog.title = req.body.title;
  blog.contents = html;

  blog.save(function (err) {

    if (err) {
      console.error(err);
      return;
    }

    res.send(html);
  });
});