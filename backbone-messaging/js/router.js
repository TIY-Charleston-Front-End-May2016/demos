let UserModel = require('./models/user');
let NewUserView = require('./views/newuser');
let ShowUserView = require('./views/showuser');

// -- Why do we attach views, etc to `this`?
// 2. Reroute to homepage
module.exports = Backbone.Router.extend({
    initialize: function () {
        // Create a model
        let user = new UserModel();

        // Create a view
        this.newUser = new NewUserView({
            model: user,
            el: document.getElementById('user'),
        });

        // this.newUser.on('created', this.showUser, this);
        this.newUser.on('created', function (model) {
            console.log(`New kid on the block: ${model.get('name')}`);

            this.navigate('show/0', { trigger: true });   
        }, this);

        this.showUser = new ShowUserView({
            model: user,
            el: document.getElementById('info'),
        });
    },

    routes: {
        'new': 'newUser',
        'show/:who': 'showUser',
    },

    newUser: function () {
        console.log('new user route');
        this.newUser.el.classList.remove('hidden');

        this.showUser.el.classList.add('hidden');
    },

    showUser: function (who) {
        console.log('show user route for ' + who);
        this.showUser.el.classList.remove('hidden');

        this.newUser.el.classList.add('hidden');
    },
});