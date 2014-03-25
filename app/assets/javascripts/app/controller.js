birdhausControllers.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

    getReadings();
    // $scope.readings = [];
    function getReadings() {
        $http.get('./birdhaus.json').success(function(data) {
            $scope.readings = data.birdhaus;
        });
    }
}]);
