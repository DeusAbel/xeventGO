/* GET 'home' page */

module.exports.homelist = function (req, res) {
    res.render('index', { title: 'Home' });
};

/* GET 'location info' page */

module.exports.locationInfo = function (req, res) {
    res.render('index', { title: 'Location Info' });
};

/* GET 'review' page */

module.exports.homelist = function (req, res) {
    res.render('index', { title: 'Add review' });
};