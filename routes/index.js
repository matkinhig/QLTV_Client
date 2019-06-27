var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET list equipment page. */
router.get('/danh-sach-thiet-bi', function(req, res, next) {
  res.render('list-equipment', { title: 'Danh sách thiết bị' });
});

/* GET detail equipment page. */
router.get('/chi-tiet-thiet-bi', function(req, res, next) {
  res.render('detail-equipment', { title: 'Danh sách thiết bị' });
});




module.exports = router;
