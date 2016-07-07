module.exports = function (app) {
    // This service is responsible for fetching questions and providing them
    // to the controllers.
    app.factory('QuestionService', ['$http', function ($http) {
        let categories = [];
        let questions = [];

        return {
            getCategories: function (count) {
                $http({
                    url: `http://jservice.io/api/categories?count=${count}`,
                    method: 'get',
                }).then(function (results) {
                    let response = results.data;

                    // Add these to the existing array (don't clear out the
                    // stuff that's already there).
                    response.forEach(function (category) {
                        categories.push(category);
                    });
                });

                return categories;
            },

            getQuestionsForCategory: function (categoryId) {
                angular.copy([], questions);
                
                $http({
                    url: `http://jservice.io/api/category?id=${categoryId}`,
                    method: 'get',
                }).then(function (results) {
                    let response = results.data.clues;

                    // Copy response (question array from api) in questions array.
                    angular.copy(response, questions);
                });

                return questions;
            }
        };
    }]);
};