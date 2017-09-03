rep <- 1e6
n <- 10
data <- array(sample(c(0,1), rep*n, replace=TRUE), c(rep,n))
prob <- rep(NA, rep)
for (i in 1:rep){
  heads1 <- data[i,1:(n-1)]==1
  heads2 <- data[i,2:n]==1
  prob[i] <- sum(heads1 & heads2)/sum(heads1)
}

#Ok so what is going on in this? This is the code that gelman counted for the criticism of the paper of Tversky/Gilgovihc