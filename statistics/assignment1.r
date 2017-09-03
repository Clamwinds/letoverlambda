pollutantmean <- function(directory, pollutant, id = 1:332) {
  ## 'directory' is a character vector of length 1 indicating the location of
  ## the CSV files
  
  ## 'pollutant' is a character vector of length 1 indicating the name of the
  ## pollutant for which we will calculate the mean; either 'sulfate' or
  ## 'nitrate'.
  
  ## 'id' is an integer vector indicating the monitor ID numbers to be used
  
  ## Return the mean of the pollutant across all monitors list in the 'id'
  ## vector (ignoring NA values)
  data = numeric()
  for (i in id) {
    
    dataRead = read.csv(paste(directory, "/", formatC(i, width = 3, flag = "0"), 
                              ".csv", sep = "")) # this is directory read boilerplate
    
    data = c(data, dataRead[[pollutant]]) #assigning the data numeric declared earlier
  }
  return(mean(data, na.rm = TRUE)) #returns data
}

pollutantmean("specdata", "nitrate", 23)