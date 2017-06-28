'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */
var $optionsPanel = $('#options-panel');
var hotelOption = (function() {

    var $hotelSelect = $optionsPanel.find('#hotel-choices');

    $.ajax({
            method: 'GET',
            url: '/api/hotels'
        })
        .then(hotels => {
            hotels.forEach(hotel => {
                var $option = $('<option></option>')
                    .text(hotel.name)
                    .val(hotel.id);
                $hotelSelect.append($option);
            })

        })
        .catch(console.error);
});

var restaurantOption = (function() {
    var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
    $.ajax({
            method: 'GET',
            url: '/api/restaurants'
        })
        .then(restaurants => {
            restaurants.forEach(restaurant => {
                var $option = $('<option></option>')
                    .text(restaurant.name)
                    .val(restaurant.id);
                $restaurantSelect.append($option);
            })

        })
        .catch(console.error)
});

var activityOption = (function() {
    var $activitySelect = $optionsPanel.find('#activity-choices');
    $.ajax({
            method: 'GET',
            url: '/api/activities'
        })
        .then(activities => {
            activities.forEach(activity => {
                var $option = $('<option></option>')
                    .text(activity.name)
                    .val(activity.id);
                $activitySelect.append($option);
            })

        })
        .catch(console.error)
});


$(function() {

    // jQuery selects





    hotelOption();
    restaurantOption();
    activityOption();


    // what to do when the `+` button next to a `select` is clicked
    $optionsPanel.on('click', 'button[data-action="add"]', function() {
        var $select = $(this).siblings('select');
        var type = $select.data('type'); // from HTML data-type attribute
        var id = $select.find(':selected').val();
        // get associated attraction and add it to the current day in the trip
        var attraction = attractionsModule.getByTypeAndId(type, id);
        tripModule.addToCurrent(attraction);
    });

});