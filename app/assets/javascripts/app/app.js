var birdhausApp = angular.module('birdhausApp', [
    'birdhausRouter',
    'birdhausControllers',
    'ngResource'
    // 'birdhausServices'
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
<<<<<<< HEAD
    .when('/chart', {
        templateUrl: '/templates/high_chart.html',
=======
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
>>>>>>> 5e5c5563bfd0fd1f979069e20af8a0da18941713
        controller: 'HomeCtrl'
    })
    .otherwise({redirectTo: '/'
    });
}]);