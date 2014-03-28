
$(function() {

    $.getJSON('./birdhaus.json', function(data) {
        
        sensorData = {
            '28-000005be3def': [],
            '28-000005bd301d': [],
            '28-000005bdf57e': []
        };

        data.birdhaus.forEach(function(obj) {
            sensorData[obj.sensor_id].push([Date.parse(obj.time), obj.temp]);
        });

        var averages = [];
        for ( var i = 0; i < sensorData['28-000005be3def'].length; i++){
            avg = [];
            try{
                avg[0] = (sensorData['28-000005be3def'][i][0] + sensorData['28-000005bd301d'][i][0] + sensorData['28-000005bdf57e'][i][0]) / 3;
                avg[1] = (sensorData['28-000005be3def'][i][1] + sensorData['28-000005bd301d'][i][1] + sensorData['28-000005bdf57e'][i][1]) / 3;
                averages.push(avg);
            } catch(e){
            }
        }

        // Create a timer
        var start = + new Date();

        // Create the chart
        $('#container').highcharts('StockChart', {
            chart: {
                backgroundColor: '#3e94d1',
                events: {
                    load: function(chart) {
                    }
                },
                zoomType: 'x'
            },
            tooltip: {
                crosshairs: [true, true],
                shared: true,
                valueDecimals: 2,
                valueSuffix: '°F'
            },

            rangeSelector: {
                buttonTheme: {
                    fill: 'none',
                    stroke: 'none',
                    'stroke-width': 0,
                    width: 100,
                    height: 20,
                    r: 8,
                    style: {
                        color: '#039',
                        fontWeight: 'bold'
                    },
                    states: {
                        hover: {
                        },
                        select: {
                            fill: '#039',
                            style: {
                                color: 'grey'
                            }
                        }
                    }
                },
                inputEnabled: $('#container').width() > 480,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1 hour'
                }, {
                    type: 'minute',
                    count: 360,
                    text: '6 hours'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1 day'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1 month'
                }, {
                    type: 'ytd',
                    count: 1,
                    text: 'YtD'
                }],
                selected: 1
            },

             xAxis:  {
                title: {
                    style: {
                        color: 'white',
                        fontSize: '1.4em',
                        fontFamily: 'Nova Mono'
                    },
                    text: 'Datetime',
                    margin: 25
                },
                tickColor: 'white',
                labels: {
                    style: {
                    fontSize: '1em',
                    color: 'white',
                    font: 'Nova Mono'
                    }
                },
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
                tickColor: 'white',
                labels: {
                    style: {
                    fontSize: '1em',
                    color: 'white',
                    font: 'Nova Mono'
                    }
                },
                gridLineColor: 'white',
                title: {
                    style: {
                        color: 'white',
                        fontSize: '1.4em',
                        fontFamily: 'Nova Mono'
                    },
                    text: 'Temperature (°F)',
                    margin: 25
                }
            },

            title: {
                style: {
                    fontSize: '2.5em',
                    fontFamily: 'Nova Mono',
                    color: 'black'
                },
                text: 'Temperature Readings from the Hattery, Main Space'
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
                lineColor: '#b90091',
                turboThreshold: 0,
                id: 'primary',
                pointStart: Date.UTC(2014, 3, 22),
            }, {
                name: 'Sensor 301d',
                data: sensorData['28-000005bd301d'],
                type: 'spline',
                turboThreshold: 0,
                pointStart: Date.UTC(2014, 3, 22),
            }, {
                name: 'Sensor 301d',
                data: sensorData['28-000005bdf57e'],
                type: 'spline',
                turboThreshold: 0,
                pointStart: Date.UTC(2014, 3, 22),
            }, {
                name: 'Average',
                data: averages,
                type: 'spline',
                turboThreshold: 0,
                pointStart: Date.UTC(2014, 3, 22),
            }]
        });
    });
});