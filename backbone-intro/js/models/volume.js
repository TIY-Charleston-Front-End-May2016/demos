let songs = [
    'My Heart Will Go On',
    'Power of Love',
    'Because You Loved Me',
    'All By Myself',
    'I\'m Alive',
    'It\'s All Coming Back to Me Now'
];

// Purpose: keep track of DATA related to volume controller
module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        volumeLevel: 0,
        songIndex: 0,
    },

    up: function () {
        // this.set(what-to-set, what-to-set-it-to)
        this.set('volumeLevel', this.get('volumeLevel') + 5);
    },

    down: function () {
        if (this.get('volumeLevel') >= 5) {
            this.set('volumeLevel', this.get('volumeLevel') - 5);
        }
    },

    remix: function () {
        let newIndex = Math.floor(Math.random() * songs.length);
        this.set('songIndex', newIndex);
    },

    currentSong: function () {
        return songs[this.get('songIndex')];
    }
});