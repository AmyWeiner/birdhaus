$(function() {

    $.getJSON('./birdhaus.json', function(data) {
        
        var  sensorData = {
            '28-000005be3def': [],
            '28-000005bd301d': [],
            '28-000005bdf57e': []
        };

        data.birdhaus.forEach(function(obj) {
            sensorData[obj.sensor_id].push([Date.parse(obj.time), obj.temp]);
        });

        // Create a timer
        var start = + new Date();

        // Create the chart
        $('#container').highcharts('StockChart', {
            chart: {
                backgroundColor: '#00B64F',
                events: {
                    load: function(chart) {
                        this.setTitle(null, {
                            text: 'Built chart in '+ (new Date() - start) +'ms'
                        });
                    }
                },
                zoomType: 'x'
            },

            rangeSelector: {
                inputEnabled: $('#container').width() > 480,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'minute',
                    count: 360,
                    text: '6h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'ytd',
                    count: 1,
                    text: 'YtD'
                }],
                selected: 1
            },

             xAxis:  {
                type: 'datetime',
                dateTimeLabelFormats: {
                    hour: '%Y-%m-%d<br/>%H:%M',
                    day: '%Y<br/>%m-%d',
                    week: '%Y<br/>%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },

            yAxis: {
                title: {
                    text: 'Temperature (°F)'
                }
            },

            title: {
                text: 'Temperature Readings from the Hattery, Main Space'
            },

            subtitle: {
                text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
            },
            legend: {
                enabled: true,
                backgroundColor: '#FFAA00',
                borderColor: '#1240AB',
                borderRadius: 10,
                borderWidth: 3,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: [{
                name: 'Sensor 3def',
                data: sensorData['28-000005be3def'],
                type: 'spline',
                pointStart: Date.UTC(2014, 3, 22),
                tooltip: {
                    crosshairs: [true, true],
                    shared: true,
                    valueDecimals: 2,
                    valueSuffix: '°F'
                },
            }, {
                name: 'Sensor 301d',
                data: sensorData['28-000005bd301d'],
                type: 'spline',
                pointStart: Date.UTC(2014, 3, 22),
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: '°F'
                }
            }, {
                name: 'Sensor 301d',
                data: sensorData['28-000005bdf57e'],
                type: 'spline',
                pointStart: Date.UTC(2014, 3, 22),
                tooltip: {
                    crosshairs: [true, true],
                    shared: true,
                    valueDecimals: 2,
                    valueSuffix: '°F'
                }
            }, {
                name: '15-day SMA',
                linkedTo: 'primary',
                 showInLegend: true,
                type: 'trendline',
                algorithm: 'SMA',
                periods: 1
            }]
        });
    });
});