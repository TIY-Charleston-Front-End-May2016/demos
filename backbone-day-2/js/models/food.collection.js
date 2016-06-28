let FoodModel = require('./food');

module.exports = Backbone.Collection.extend({
    model: FoodModel,
});