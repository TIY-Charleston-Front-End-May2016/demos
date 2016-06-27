module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    initialize: function () {
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'
        'click #up': 'clickUp',
        'click #down': 'clickDown',
        'click #next': 'nextSong',
    },

    clickUp: function () {
        this.model.up();
    },

    clickDown: function () {
        this.model.down();
    },

    nextSong: function () {
        this.model.remix();
    },

    // How to update the DOM when things change
    render: function () {
        let volume = this.el.querySelector('#volume');
        volume.textContent = this.model.get('volumeLevel');

        let song = this.el.querySelector('#current-song');
        // song.textContent = this.model.currentSong();
        song.innerHTML = `The song is ${this.model.currentSong()}`;
    },
});