let app = angular.module('FriendApp', ['ngRoute']);

// Store filters in a separate file.
require('./filters')(app);

// Configure the app once at the beginning to set up routes. 
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/friends',
        })
        .when('/friends', {
            controller: 'FriendListController',
            templateUrl: 'templates/friends.html',
        })
        .when('/potentials', {
            controller: 'FriendFeedController',
            templateUrl: 'templates/potentials.html',
        })
        .otherwise({
            templateUrl: 'templates/oops.html',
        });
}]);

/**
 * Create a controller that'll render our potential friends list using information from the
 * FriendList service.
 */
app.controller('FriendFeedController', ['$scope', 'FriendList', function ($scope, FriendList) {
    $scope.friends = FriendList.getPotentialFriends();

    // Click handler for the 'Add friend' button.
    $scope.add = function (person) {
        // Add an actual friend
        FriendList.addFriend(person);
    };
}]);

/**
 * Create a controller that lists all actual friends. These are friends that have been explicitly
 * added on the FriendFeed view.
 */
app.controller('FriendListController', ['FriendList', '$scope', function (FriendList, $scope) {
    $scope.confirmed = [];
    $scope.friendz = FriendList.getRealFriends();
}]);

/**
 * Services are the models of Angular, and factories create instances of services. A single instance 
 * of a service is shared across all controllers.
 * 
 * The factory is going to be run once, and whatever object is returned is the value that controllers
 * get when they create a new service.
 * 
 * Note that there is a .service() function as well, which is very similar to a factory (so close that
 * it's almost weird that both exist). For more information, see here:
 *    http://stackoverflow.com/a/26924234
 */
app.factory('FriendList', function ($http) {
    let potential = [];
    let actual = [];

    $http({
        url: 'http://api.randomuser.me/?nat=us&results=100',
        method: 'GET',
    }).then(function (results) {
        let friends = results.data.results;
        // add a 'full name' property
        friends = friends.map(function (friend) {
            friend.name.full = `${friend.name.first} ${friend.name.last}`;

            return friend;
        });

        angular.copy(friends, potential);
    });

    return {
        getPotentialFriends: function () {
            return potential;
        },
        getRealFriends: function () {
            return actual;
        },
        addFriend: function (who) {
            actual.push(who);
        },
    };
});