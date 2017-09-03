source("../DBDA2E-utilities.R") # Loads definitions of graphics functions
source("../BernGrid.R")
Theta = seq(0, 1, length=1001) #Specify fine comb Theta
pTheta = pmin(Theta, 1-Theta)  #Triangular shape for pTheta
pTheta = pTheta/sum(pTheta) #Make pTheta sum to 1.0
Data = c(rep(0,3), rep(1,1)) # Replicates elements


openGraph(width=5, height =7) # Open a graphics window
posterior = BernGrid( Theta, pTheta, Data, plotType ="Bars",
                      showCentTend="Mode", showHDI=TRUE , showpD=FALSE)

saveGraph(file ="BernGridExample", type="jpg")