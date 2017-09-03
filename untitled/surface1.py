import numpy
RealNumber=float
Integer =int
from scitools import easyviz
x = numpy.arange(-8,8,.2)
xx,yy = numpy.meshgrid(x,x)
r = numpy.sqrt(xx**2+yy**2) + 0.01
zz = numpy.sin(r)/r
l = easyviz.Light(lightpos=(-10,-10,5), lightcolor=(1,1,1))
easyviz.surfc(x,x,zz,shading='interp',colormap=easyviz.jet(),
          zmin=-0.5,zmax=1,clevels=10,
          title='r=sqrt(x**2+y**2)+eps\nsin(r)/r',
          light=l,
          legend='sin',
          )
