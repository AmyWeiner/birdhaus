birdhausControllers.controller('HourlyController', function($scope) {
    $scope.data = [{x: new Date(12-5-5), value: 69}, {x: new Date(12-6-5), value: 71}, {x: new Date(12-7-5), value: 75}];
    $scope.options = {axes: {
        x: {
          type: "date",
          tooltipFormatter: function (d) {return moment(d).fromNow();},
          key: "x"
        },
        y: {type: "linear"}
      },
      series: [
        {
          y: "val_0",
          label: "A time series",
          color: "#9467bd",
          type: "line",
          thickness: "1px"
        }
      ],
      lineMode: "linear",
      tension: 0.7,
      tooltipMode: "default"
    };
});