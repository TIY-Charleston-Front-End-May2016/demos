
let nugget = angular.module('LibraryControllers');

nugget.controller('BorrowedController', ['$scope', 'BookService', function ($scope, BookService) {
    // Get some booooooookie crisp
    $scope.books = BookService.getBooks();
}]);
