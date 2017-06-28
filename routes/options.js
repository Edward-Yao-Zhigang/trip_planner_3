var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/api/hotels', function(req, res, next) {
    Hotel.findAll({})
        .then(hotels => {
            res.json(hotels);
        })
        .catch(next);
});
router.get('/api/restaurants', function(req, res, next) {
    Restaurant.findAll({})
        .then(restaurants => {
            res.json(restaurants);
        })
        .catch(next);
});
router.get('/api/activities', function(req, res, next) {
    Activity.findAll({})
        .then(activities => {
            res.json(activities);
        })
        .catch(next);
});



module.exports = router;