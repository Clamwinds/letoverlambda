gold <- Quandl("BUNDESBANK/BBK01_WT5511", type="zoo", transformation="rdiff")
oil <- Quandl("DOE/RBRTE", type="zoo", transformation="rdiff")
beta_data <- merge(gold, oil)
lm(coredata(beta_data[,1]) ~ coredata(beta_data[,2]), na.action=na.omit)$coef[2]

