var birdhausApp = angular.module('birdhausApp', [
    'birdhausRouter',
    'birdhausControllers',
    'ngResource'
    ]);

var birdhausControllers = angular.module('birdhausControllers', []);

var birdhausRouter = angular.module('birdhausRouter', [
    'ngRoute'
    ]);

birdhausRouter.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'HomeCtrl'
    })
    .when('/birdhaus', {
        templateUrl: '/templates/dashboard.html',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: '/templates/about.html',
        controller: 'HomeCtrl'
    })
    .when('/last_hour', {
        templateUrl: '/templates/last_hour.html',
        controller: 'HomeCtrl'            
    })
    .when('/last_day', {
        templateUrl: 'templates/last_day.html',
        controller: 'HomeCtrl'
    })
    .when('/last_week', {
        templateUrl: 'templates/last_week',
        controller: 'HomeCtrl'
    })
    .otherwise({redirectTo: '/'
    });
}]);