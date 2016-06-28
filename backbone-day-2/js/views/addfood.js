let FoodModel = require('../models/food');

module.exports = Backbone.View.extend({
    // DOM events
    events: {
        'click button': 'addFood',
    },

    addFood: function () {
        // create new food
        let food = new FoodModel({
            name: document.getElementById('food-name').value,
            price: document.getElementById('food-price').value,
        });

        // add to collection
        this.model.add(food);

        document.getElementById('food-name').value = '';
        document.getElementById('food-price').value = '';
    },
});