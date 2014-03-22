# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Reading.create(sensor_id: "28XXXXXXXXXX", temp: 91.6, time: '2014-3-04 01:00:00')
Reading.create(sensor_id: "28XXXXXXXXXX", temp: 34.1, time: '2014-3-04 03:00:00')
Reading.create(sensor_id: "28XXXXXXXXXX", temp: 96.0, time: '2014-3-04 07:00:00')
Reading.create(sensor_id: "28XXXXXXXXXX", temp: 87.6, time: '2014-3-04 011:00:00')

# Temperature2.create(temp: 79.4, time: '2014-3-04 04:00:00')
# Temperature2.create(temp: 56.8, time: '2014-3-04 06:00:00')
# Temperature2.create(temp: 100.2, time: '2014-3-04 09:00:00')

# Temperature3.create(temp: 67.3, time: '2014-3-04 03:00:00')
# Temperature3.create(temp: 87.9, time: '2014-3-04 05:00:00')
# Temperature3.create(temp: 94.4, time: '2014-3-04 07:00:00')
# Temperature3.create(temp: 67.1, time: '2014-3-04 08:00:00')
