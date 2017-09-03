import csv
import csv
with open('timesheetreport.csv', newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

#Woah that was fast, maybe I should have been running the statistics i
