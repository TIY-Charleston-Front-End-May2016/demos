
// Create a new module called 'LibraryControllers' that the main app can
// use to do its thang.
let nugget = angular.module('LibraryControllers');

nugget.controller('AvailableController', ['$scope', 'BookService', function ($scope, BookService) {
    // Get some booooooookie crisp
    $scope.books = BookService.getBooks();
}]);

