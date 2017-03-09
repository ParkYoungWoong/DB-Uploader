var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');

var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  contents: String
}, {
  collection: 'post'
});
var Post = mongoose.model('POST', Schema);

module.exports = function (app) {
    app.use('/submit', router);
};

router.post('/', function (req, res, next) {
  var value = req.body.contents;
  var save = new Post();

  save.contents = value;
  save.save(function (err) {
    if (err) {
      console.error(err);
      return;
    }

    res.send(value);
  });
});