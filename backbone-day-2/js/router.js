// Nothing special about this name, I just like periods.
let FoodCollection = require('./models/food.collection');
// Two views
let AddFoodView = require('./views/addfood');
let ShoppingListView = require('./views/shoppinglist');

module.exports = Backbone.Router.extend({
    initialize: function () {
        let shoppingList = new FoodCollection();

        // let pudding = new FoodModel({
        //     name: 'Banana Pudding',
        //     price: 8.59,
        // });

        // shoppingList.add(pudding);

        // Keep it as a property on the object so we can change it later.
        this.addView = new AddFoodView({
            model: shoppingList,
            el: document.getElementById('shopping-add'),
        });

        this.listView = new ShoppingListView({
            model: shoppingList, // collection keyword?
            el: document.getElementById('shopping-list'),
        });

        // In case you want to use keyboard instead of buttons, just call
        // the same view functions (moveUp, moveDown, etc) here.
        document.addEventListener('keyup', function () {
            console.log('key pressed');
        });
    },

    routes: {
        // url : function
        'add': 'newFood',
        'list': 'listFoods',
        '': 'listFoods',
    },

    newFood: function () {
        console.log('making a new food');
        // make the add view show up
        this.addView.el.classList.remove('hidden');
        // make the list view hide
        this.listView.el.classList.add('hidden');
    },

    listFoods: function () {
        console.log('listing all the foods');
        // make the add view show up
        this.addView.el.classList.add('hidden');
        // make the list view hide
        this.listView.el.classList.remove('hidden');
    },
});