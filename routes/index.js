var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addreview);

/* other pages */
router.get('/about', ctrlOthers.about);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'xeventGO123456' });
});


module.exports = router;
