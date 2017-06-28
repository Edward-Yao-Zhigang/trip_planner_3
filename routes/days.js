var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/api/days', function(req, res, next) {
    Day.findAll({})
        .then(days => {
            // res.json(days);
            res.send("You GOT all the days");
        })
        .catch(next);
});

router.get('/api/days/:id', function(req, res, next) {
    Day.findById({
            where: {
                id: req.params.id
            }
        })
        .then(days => {
            res.json(days);
        })
        .catch(next);
});

// router.post('/api/days/:id/hotels', function(req, res, next) {
//     Day.create(req.body)
//         .then(createDay => {
//             res.json({
//                 day: createDay
//             })
//         })
//         .then(days => {
//             Hotel.findById({
//                 where: {

//                 }
//             })
//         })
//         .catch(next);
// });


router.post('/api/days/', function(req, res, next) {
    Day.create(req.body)
        .then(createDay => {
            res.json({
                day: createDay
            })
        })
        .catch(next);
});

router.put('/days/:id', function(req, res, next) {
    Day.findById(req.params.id)
        .then(function(found) {
            if (!found) {
                let err = new Error('Not found');
                err.status = 404;
                throw err;
            }
            return found.update(req.body);
        })
        .then(function(updateDay) {
            res.json({
                day: updateDay
            })
        })
        .catch(next);
});

router.delete('/days/:id', function(req, res, next) {
    Day.findById(req.params.id)
        .then(function(found) {
            if (!found) {
                let err = new Error('Not found');
                err.status = 404;
                throw err;
            }
            return found.destroy();
        })
        .catch(next);
})

module.exports = router;