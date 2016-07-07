module.exports = function (app) {
    app.controller('QuestionController', ['$scope', 'QuestionService', '$routeParams', function ($scope, QuestionService, $routeParams) {
        let categoryId = parseInt($routeParams.categoryId);

        // Get questions for only the category we're currently viewing.
        $scope.questions = QuestionService.getQuestionsForCategory(categoryId);
    }]);
}