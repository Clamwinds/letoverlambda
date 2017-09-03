import numpy
from scitools import easyviz
x = numpy.arange(-8,8,.2)
xx,yy = numpy.meshgrid(x,x)
r = numpy.sqrt(xx**2+yy**2) + 0.01
zz = numpy.sin(r)/r
easyviz.surfc(x,x,zz)
