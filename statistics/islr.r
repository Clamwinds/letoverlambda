y=x
f = outer (x ,y , function (x , y ) cos ( y ) /(1+ x ^2) )
contour (x ,y , f )
contour (x ,y ,f , nlevels =45 , add = T )
fa =( f - t ( f ) ) /2
contour (x ,y , fa , nlevels =15)

