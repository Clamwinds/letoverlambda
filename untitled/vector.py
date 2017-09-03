import numpy
from scitools import easyviz
RealNumber=float
Integer=int
j=numpy.complex(0,1)
w=numpy.zeros((5,5,5))
u=w+1.0
xx,yy,zz=numpy.mgrid[-1.0:1.0:5*j,-1:1:5*j,-1:1:5*j]
easyviz.quiver3(xx,yy,zz,w,w,u)
