module.exports = function (app) {
    /**
     * Filters should return functions that (usually) accept one input
     * and return one output. You can also accept more parameters if you
     * want to.
     * 
     * Filters do not change the actual data being stored in your service, 
     * but are used for transforming it before displaying it.
     */
    app.filter('capitalize', function () {
        return function (name) {
            return name.toUpperCase();
        };
    });

    app.filter('child', function () {
        return function (input) {
            return `${input}, the second`;
        };
    });
}
