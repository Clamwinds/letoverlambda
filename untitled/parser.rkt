#lang racket

; based off of http://github.com/epsil/gll


(struct success (val rest) #:transparent)
(struct failure (rest)  #:transparent)

(define (succeed val)
(lambda (str)
  (success val str)))

(define (string match)
  (lambda (str)
    (let* ((len (min (string-length str) (string-length match)))
           (head (substring str 0 len))
           (tail (substring str len)))
      (if (equal? head match)
          (success head tail)
          (failure str)))))
