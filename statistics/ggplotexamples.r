#make a plot using base
plot(x=diamonds$carat, y=diamonds$price, type="p")
title(main="I'm a base plot")
#make a "quick" plot using ggplot2
qplot(x=carat, y=price, data=diamonds, geom="point") +
  ggtitle("I'm a qplot")

# make the basis for a plot using ggplot save it as an object, p
p <- ggplot(data = diamonds, aes(x = carat, y = price))
# add a geom (points) and display the plot
p + geom_point()

p + geom_point() + facet_grid(. ~ color, labeller = label_both)
# color by a continuous variable
ggplot(data = diamonds, aes(x = carat, y = price, colour = depth)) + geom_point()
# color by a factor variable
ggplot(data = diamonds, aes(x = carat, y = price, colour = color)) + geom_point()

