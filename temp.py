# This program imports data from digital temperature
# sensors, connected to a Raspberry Pi, saves the data as
# a list of records, and prints the temeprature readings
# to the screen.
from datetime import datetime
import glob
import json
import os
import requests
import time

# Issue the modprobe statements to initialize the GPIO
# and temperature sensor modules
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

# Use glob to search file system for device directories,
# corresponding to temperature sensor ids, and store
# device directory paths in list variable
devices_folders = glob.glob('/sys/bus/w1/devices/28*')
# Create variable to store list of each individual device file path 
devices_files = []

# Iterate through list of device directories, append file name
# to file path for each corresponding device, and append file path
# to list of all device files 
for folder in devices_folders:
  device_file = folder + '/w1_slave'
  devices_files.append(device_file)

# Read raw data from a file, given a file name
def read_data(file):
  f = open(file,'r')
  lines = f.readlines()
  f.close()
  return lines

  # Read the temperature data from a given file, and 
# return the values found
def get_temp(file):
  temp_c = None
  temp_f = None
  lines = read_data(file)
# If the end of the first line doesn't contain 'YES'...
  while not lines[0].strip().endswith('YES'):
    time.sleep(0.25)
    lines = read_data()

# If position not equal to -1, get data to end of line 
  pos = lines[1].find('t=')

  if pos != -1:
    temp_string = lines[1][ pos+2:]
        # convert scale for printing
    temp_c = float(temp_string) / 1000.00
        # convert to Fahrenheit
    temp_f = temp_c * 9.00 / 5.00 + 32.00

# Return the values read
  return temp_c, temp_f

# Initialize variables for http request
url = "http://birdhaus.herokuapp.com/birdhaus.json"
headers = {"content-type": "application/json"}

data_file = open("data_file.txt", "w")
# Main loop: read data then sleep 5 seconds until cancelled
while True:
  # Iterate through all temperature sensor data files
  for file in devices_files:
    # Create object to store data record 
    temperature_record = {}
    # Extract sensor id from devile file path
    device = file.split('/')[-2]
    # Get current temperature value from given file 
    temp_c, temp_f = get_temp(file)
    # Add record attributes to data record
    temperature_record["sensor_id"] = device
    temperature_record["temp"] = temp_f
    temperature_record["time"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    req = requests.post(url, data=json.dumps(temperature_record), headers=headers)

    print(req.text)
    data_file.write("Sensor ID: %s  Temperature: %d  Time: %s\n" %(temperature_record["sensor_id"], temperature_record["temp"], temperature_record["time"]))
    print(temperature_record)
    # Serialize data record as JSON formatted stream
    data_as_json = json.dumps(temperature_record)
    time.sleep(3)
