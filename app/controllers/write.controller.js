var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/write', router);
};

router.get('/', function (req, res, next) {
  res.render('write', {
    title: '작성'
  });
});