let app = angular.module('QuestionApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'CategoryController',
            templateUrl: 'templates/categories.html',
        })
        .when('/category/:categoryId', {
            controller: 'QuestionController',
            templateUrl: 'templates/questions.html'
        });
}]);

// Services
require('./services/question')(app);

// Controllers
require('./controllers/categories')(app);
require('./controllers/questions')(app);