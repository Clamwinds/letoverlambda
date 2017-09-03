#lang racket


(substring "the boy out of the country" 4 7)
;prints only boy

;(substring (0 1 2 3) 1 2)
; application not a procedure

(define (factorial1 n)
  (define (fac x k)
    (if (= k 0)
        x
        (fac (* x k) (sub1 k))))
  (fac 1 n))

(define (factorial2 n)
  (if (= n 0)
      1
      (* n (factorial2 (sub1 n)))))
