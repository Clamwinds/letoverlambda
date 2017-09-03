import pandas as pd
import numpy as np
from bokeh.plotting import figure, output_file, show
import matplotlib.pyplot as plt
import math
import matplotlib
#output to static HTML file
output_file("line.html");
p = figure(plot_width=400, plot_height=400)

#add a circle rendered with a size, color, and alpha
p.circle([1,2,3,4,5], [5,6,2,5,5], size=20, color="navy", alpha=0.5)
#show the results
show(p);

import pandas as pd
from bokeh.plotting import figure, output_file, show

AAPL = pd.read_csv(
        "http://ichart.yahoo.com/table.csv?s=AAPL&a=0&b=1&c=2000&d=0&e=1&f=2010",
        parse_dates=['Date']
    )

#output_file("datetime.html")

# create a new plot with a datetime axis type
p = figure(width=800, height=250, x_axis_type="datetime")

p.line(AAPL['Date'], AAPL['Close'], color='navy', alpha=0.5)

show(p)
T = 1000000
X = np.zeros((T,2))

#figsize(10,10)

for t in range(T-1):
    stepSize = np.random.standard_cauchy()
    direction = np.random.rand()*2*math.pi
    xStep, yStep = math.cos(direction)*stepSize, math.sin(direction)*stepSize
    X[t+1,0] = X[t,0] + xStep
    X[t+1,1] = X[t,1] + yStep

plt.plot(X[:,0],X[:,1],lw=2)
plt.show()
