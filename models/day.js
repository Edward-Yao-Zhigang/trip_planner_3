var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
    number: Sequelize.INTEGER
}, {
    // defaultScope: {
    //     include: [Hotel]
    // },
    getterMethods: {
        type: function() {
            return 'day';
        }
    }
});


module.exports = Day;