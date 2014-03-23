angular.module('birdhaus', ['ngRoute', 'birdhaus.controllers', 'birdhaus.services']);
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/dashboard.html',
            controller: 'HomeController'
    })
      .otherwise({redirectTo: '/'});
});