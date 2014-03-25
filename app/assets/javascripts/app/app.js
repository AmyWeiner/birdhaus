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
    .when('/chart', {
        templateUrl: '/templates/high_chart.html',
        controller: 'HomeCtrl'
    })
    .otherwise({redirectTo: '/'
    });
}]);