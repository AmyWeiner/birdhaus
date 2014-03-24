var birdhaus = angular.module('birdhaus', ['ngRoute', 'birdhaus.controllers', 'birdhaus.services']);

birdhaus.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/templates/dashboard.html',
            controller: 'HomeController'
        }).
        otherwise({redirectTo: '/'
        });
}]);