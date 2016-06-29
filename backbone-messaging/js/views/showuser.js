module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        let nameField = document.getElementById('info-name');
        let hometownField = document.getElementById('info-hometown');

        nameField.textContent = this.model.get('name');
        hometownField.textContent = this.model.get('hometown');
    },
});