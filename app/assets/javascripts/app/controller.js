birdhausControllers.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
    // $scope.getAllReadings = function() {
    //     $scope.url = 'getAllReadings';

    //     $http.get($scope.url).success(function(data, status) {
    //         $scope.response = data;
    //         $scope.readings = data.allReadings;
    //     });
    // $scope.getAllReadings();
    // };

    getReadings();
    $scope.readings = [];
    function getReadings() {
        $http.get('./birdhaus.json').success(function(data) {
            $scope.readings = data.birdhaus;
        });
    }
}]);
