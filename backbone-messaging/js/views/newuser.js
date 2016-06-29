module.exports = Backbone.View.extend({
    initialize: function () {

    },

    events: {
        'click button': 'saveUser',
    },

    saveUser: function () {
        let name = document.getElementById('user-name').value;
        let hometown = document.getElementById('user-hometown').value;

        this.model.updateUser(name, hometown);
        // 'An event just happened'.
        this.trigger('created', this.model);
    },
});