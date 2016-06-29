let AppRouter = require('./router');

window.addEventListener('load', function () {
    let router = new AppRouter();
    Backbone.history.start();
});