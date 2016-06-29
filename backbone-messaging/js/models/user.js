module.exports = Backbone.Model.extend({
    defaults: {
        name: '',
        hometown: '',
    },

    updateUser: function (name, hometown) {
        this.set('name', name);
        this.set('hometown', hometown);
    }
});