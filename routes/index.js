'use strict';
var express = require('express');
var router = express.Router();

/* ========== GET ALL SHOWS ============= */
router.get('/shows', function(req, res, next) {
  res.send('send shows back');
});

module.exports = router;
