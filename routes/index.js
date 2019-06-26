var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/danh-sach-thiet-bi', function(req, res, next) {
  res.render('list-equipment', { title: 'Danh sách thiết bị' });
});




module.exports = router;
