let app = angular.module('SaladSoldierApp', []);

app.controller('MainController', ['$scope', 'IngredientService', function ($scope, IngredientService) {
    $scope.pageNumber = 1;
    $scope.itemsPerPage = 3;

    $scope.ingredients = IngredientService.getIngredients($scope.pageNumber, $scope.itemsPerPage);

    $scope.prev = function () {
        $scope.pageNumber = $scope.pageNumber - 1;
        $scope.ingredients = IngredientService.getIngredients($scope.pageNumber, $scope.itemsPerPage);
    };

    $scope.next = function () {
        $scope.pageNumber = $scope.pageNumber + 1;
        $scope.ingredients = IngredientService.getIngredients($scope.pageNumber, $scope.itemsPerPage);
    };
}]);

app.factory('IngredientService', function () {
    let ingredients = [
        { name: 'tomato' },
        { name: 'onion' },
        { name: 'pepper' },
        { name: 'goat cheese' },
    ];

    return {
        getIngredients: function (pageNum, perPage) {
            let start = (pageNum - 1) * perPage;
            // get a subset of array
            return ingredients.slice(start, start + perPage);
        },
    };
});