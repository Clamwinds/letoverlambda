;; This buffer is for notes you don't want to save, and for Lisp evaluation.
;; If you want to create a file, visit that file with C-x C-f,
;; then enter the text in that file's own buffer.

#lang racket
(require plot)

(plot (list (contour-intervals (λ (x y) (- (sqr x) (sqr y)))
                               -2 2 -2 2 #:label "z")
            (vector-field (λ (x y) (vector (* 2 x) (* -2 y)))
                          #:color "black" #:label "Gradient")))

(plot3d (polar3d (λ (θ ρ) 1) #:color 2 #:line-style 'transparent)
        #:x-min -0.8 #:x-max 0.8
        #:y-min -0.8 #:y-max 0.8
        #:z-min -0.8 #:z-max 0.8
        #:altitude 25)


(define ((dist cx cy cz) x y z)
  (sqrt (+ (sqr (- x cx)) (sqr (- y cy)) (sqr (- z cz)))))

(plot3d (list (isosurface3d (dist  1/4 -1/4 -1/4) 0.995
                              #:color 4 #:alpha 0.8 #:samples 21)
                (isosurface3d (dist -1/4  1/4  1/4) 0.995
                              #:color 6 #:alpha 0.8 #:samples 21))
          #:x-min -1 #:x-max 1
          #:y-min -1 #:y-max 1
          #:z-min -1 #:z-max 1
          #:altitude 25)

(plot (list (function-interval (λ (x) (- (sin x) 3))
                               (λ (x) (+ (sin x) 3)))
            (function-interval (λ (x) (- (sqr x))) sqr #:color 4
                               #:line1-color 4 #:line2-color 4))
      #:x-min (- pi) #:x-max pi)

;(plot (list (axes)
;            (function x)
;            (function (λ (x) x) #:color 0 #:style 'dot)
;            (inverse sqr -2 2 #:color 3)));


(define (f1 t) (vector (* 2 (cos (* 4/5 t)))
                       (* 2 (sin (* 4/5 t)))))

(define (f2 t) (vector (* 1/2 (cos t))
                         (* 1/2 (sin t))))

(plot (parametric-interval f1 f2 (- pi) pi))
