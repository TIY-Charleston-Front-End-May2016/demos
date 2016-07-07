module.exports = function (app) {
    app.controller('CategoryController', ['$scope', 'QuestionService', function ($scope, QuestionService) {
        $scope.categories = QuestionService.getCategories(15);
    }]);
};