#lang racket
(require xrepl)

(define pi 3.14)


(require plot)
;(require plot/typed)

;(plot (function sin (- pi) pi #:label "y = sin(x))"))

(define (singraph)

  (plot3d (surface3d (λ (x y) (* (cos x) (sin y)))
                   (- pi) pi (- pi) pi)
        #:title "An R × R → R function"
        #:x-label "x" #:y-label "y" #:z-label "cos(x) sin(y)"))
