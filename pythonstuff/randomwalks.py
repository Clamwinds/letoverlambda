import numpy as np
from bokeh.plotting import figure, output_file, show
import matplotlib.pyplot as plt
import math
from math import  cos,sin
import matplotlib
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

X = np.zeros((T,3))

for t in range(T-1):
    stepSize = np.random.standard_cauchy()
    direction1 = np.random.rand()*2*math.pi
    direction2 = np.random.rand()*2*math.pi

    xStep = math.cos(direction2)*math.cos(direction1)*stepSize
    yStep = math.sin(direction1)*stepSize
    zStep = math.sin(direction2)*math.cos(direction1)*stepSize
    
    X[t+1,0] = X[t,0] + xStep
    X[t+1,1] = X[t,1] + yStep
    X[t+1,2] = X[t,2] + zStep
    
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')  
ax.plot(X[:,0],X[:,1],X[:,2])
frame1 = plt.gca()
frame1.axes.set_xticklabels([])
frame1.axes.set_yticklabels([])
frame1.axes.set_zticklabels([])
#sin(50)
plt.show()


# prepare some data, a Pandas GroupBy object in this case
from bokeh.sampledata.autompg import autompg as df

# create a scatter chart
p = Scatter(df, x='mpg', y='hp', color='cyl',
            title="MPG vs HP (colored by CYL)",
            legend='top_right',
            xlabel="Miles Per Gallon",
            ylabel="Horsepower")

# specify how to output the plot(s)
output_file("chart.html")

# display the figure
show(p)
# build a dataset where multiple columns measure the same thing
data = dict(python=[2, 3, 7, 5, 26, 221, 44, 233, 254, 265, 266, 267, 120, 111],
            pypy=[12, 33, 47, 15, 126, 121, 144, 233, 254, 225, 226, 267, 110, 130],
            jython=[22, 43, 10, 25, 26, 101, 114, 203, 194, 215, 201, 227, 139, 160],
            test=['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar',
                  'foo', 'bar', 'foo', 'bar']
            )

# create a line chart where each column of measures receives a unique color and dash style
line = Line(data, y=['python', 'pypy', 'jython'],
            dash=['python', 'pypy', 'jython'],
            color=['python', 'pypy', 'jython'],
            title="Interpreter Sample Data", ylabel='Duration', legend=True)

output_file("line_single.html", title="line_single.py example")

show(line)
