module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },

    // Make changes to the DOM
    render: function () {
        let things = this.el.querySelector('ul');
        // clear all the foods
        things.innerHTML = '';

        // 'food' is going to be a backbone model
        let total = 0;
        this.model.forEach(function (food) {
            // add an <li> to the list
            let item = document.createElement('li');
            item.textContent = `${food.get('name')} for $${food.get('price')}`;

            things.appendChild(item);

            total = total + parseFloat(food.get('price'));
        });

        let summary = this.el.querySelector('h2');
        summary.textContent = `Items: ${this.model.length}, Price: $${total}`;
    },
});