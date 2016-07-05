module.exports = function (x) {
    x.controller('FriendController', function ($scope, $http) {
        $scope.people = [
            { name: 'Jeb' },
            { name: 'Trinity' },
            { name: 'Neo' },
        ];

        $scope.person = {
            name: 'Unknown human',
            job: 'Dog walker',
        };

        $scope.flip = function () {
            console.log('flip flip');

            // Make an AJAX request and update the scope.
            $http({
                method: 'GET',
                url: 'https://randomuser.me/api/',
            }).then(function (response) {
                let person = response.data.results[0];
                $scope.person.name = person.name.first;

                $scope.people.push({ name: person.name.first });
            });
        };

        // $scope.flip();
    });
};