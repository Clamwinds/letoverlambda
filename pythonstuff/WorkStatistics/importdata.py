import csv
exampleFile = open('timesheetreportdata.csv')
exampleReader = csv.reader(exampleFile)
exampleData = list(exampleReader)
print(exampleData)
#Something tells me there's a more standard way to read .csv data
#I need to ascertain which rows and what columns have what data
# A(username)/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S
# username[1]/payroll_id[2]/fname[3]/lname[4]/number[5]/group[6]/local_date[7]/local_day[8]/local_start_time[9]/local_day[10]/local_start_time[11]/tz[12]/hours[13]/jobcode_1[14]/jobcode_2[15]/jobcode_3[16]/jobcode_4[17]/location[18]/notes[19]/approved_status[20]

#The stuff numbered above are the columns, rows are the respective entries, rows come across, columns
#come down So the username listed above is exampleData[0][0]. payroll_id is [0][1]

import pandas as pd
df=pd.read_csv('timesheetreportdata.csv', sep=',',header=None)
df.values

#For this it's the reverse df[1][0] is payroll_id df[2][0] is 'fname'
pandas.series.unique(uf)
#df[0:2][0:5] gives you two rows #df[1:2][0:5]
#df[11][0:20] is the relevant stuff for the hours
#What I want to do is extract a dataframe for each of the jobcodes
#So essentially since each row is an entry itself, we want to pull out all rows that have a specific job code and then perform operations on that


#List unique values in a DataFrame column
#pd.unique(df.column_name.ravel()) #pd.unique(df["col"]).ravel())

#Convert Series datatype to numeric, getting rid of any non-numeric values
#df['col'] = df['col'].astype(str).convert_objects(convert_numeric=True)
# pd.to_numeric(df[11]) converted the relevant stuff to numeric
# pd.DataFrame.sum(df[11]) sums the hours after conversion

#To begin extracting the relevant values
# extract = df.loc[df[12].isin('HackerDojo)]

def returndf(string):
    hdframe = pd.DataFrame(df.loc[df[12] == string])
    #hdframe + string
    return hdframe
