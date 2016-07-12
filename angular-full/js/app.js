
/**
 * We've got a few different API endpoints awaiting us:
 * 
 *      GET     /library/books              returns as list of books in the library
 *      POST    /library/borrow/{bookId}    mark a book as borrowed
 *      POST    /library/return/{bookId}    mark a book as returned
 */

// Create ALL of our modules.
let app = angular.module('LibraryApp', ['ngRoute', 'LibraryControllers', 'LibraryServices', 'LibraryDirectives']);
angular.module('LibraryControllers', []);       // create empty module
angular.module('LibraryServices', []);          // create empty module
angular.module('LibraryDirectives', []);        // create empty module

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/available', {
            templateUrl: 'templates/available.html',
            controller: 'AvailableController',
        })
        .when('/borrowed', {
            templateUrl: 'templates/borrowed.html',
            controller: 'BorrowedController',
        });
}]);

/* Controllers */
require('./controllers/available');
require('./controllers/borrowed');

/* Services */
require('./services/book');

/* Directives */
require('./directives/book');