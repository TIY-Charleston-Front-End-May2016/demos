
let current = angular.module('LibraryServices');

current.factory('BookService', ['$http', function ($http) {
    let books = [];

    return {
        /* GET request for book list */
        getBooks: function () {
            $http({
                method: 'get',
                url: 'http://localhost:7000/library/books'
            }).then(function (response) {
                console.table(response.data.books);

                angular.copy(response.data.books, books);
            });

            return books;
        },
        /* POST request to update one book */
        borrowBook: function (book) {

        },
        /* POST request to update one book */
        returnBook: function (book) {

        },
    };
}]);