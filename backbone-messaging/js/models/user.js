module.exports = Backbone.Model.extend({
    url: 'http://localhost:8000/api/users',

    defaults: {
        name: '',
        hometown: '',
    },

    updateUser: function (name, hometown) {
        this.set('name', name);
        this.set('hometown', hometown);

        console.log('calling save()');

        this.save();
        // this.save(undefined, {
        //     success: function () {
        //         console.log(`User is ${self.get('id')}`)
        //     },
        //     error: function () {
        //         console.error('nopetrain');
        //     },
        // });
    }
});