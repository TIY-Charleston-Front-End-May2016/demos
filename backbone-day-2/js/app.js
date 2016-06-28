let AppRouter = require('./router');

// Get this show on the road.
// app.js is a humble file.
window.addEventListener('load', function () {
    let router = new AppRouter();
    Backbone.history.start();
});