var birdhausApp = angular.module('birdhausApp', [
    'birdhausRouter',
    'birdhausControllers',
    'ngResource'
    // 'birdhausServices'
    ]);

birdhausApp.directive('bars', function ($parse) {
      return {
         restrict: 'E',
         replace: true,
         template: '<div id="chart"></div>',
         link: function (scope, element, attrs) {
           var data = attrs.data.split(','),
           chart = d3.select('#chart')
             .append("div").attr("class", "chart")
             .selectAll('div')
             .data(data).enter()
             .append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
         }
      };
   });

var donutChart = birdhausApp.directive('donutChart', function(){
      function link(scope, el, attr){
        var color = d3.scale.category10();
        var data = [10, 20, 30,60];
        var width = 300;
        var height = 300;
        var min = Math.min(width, height);
        var svg = d3.select(el[0]).append('svg');
        var pie = d3.layout.pie().sort(null);
        var arc = d3.svg.arc()
          .outerRadius(min / 2 * 0.9)
          .innerRadius(min / 2 * 0.5);
    
        svg.attr({width: width, height: height});
        var g = svg.append('g')
          // center the donut chart
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
        
        // add the <path>s for each arc slice
        g.selectAll('path').data(pie(data))
          .enter().append('path')
            .style('stroke', 'white')
            .attr('d', arc)
            .attr('fill', function(d, i){ return color(i) });
      }
      return {
        link: link,
        restrict: 'E'
      };
    });

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
     .when('/graph', {
        templateUrl: '/templates/graph.html',
        controller: 'HomeCtrl'
    })
    .otherwise({redirectTo: '/'
    });
}]);