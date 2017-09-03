#lang racket
;transformer function that ignores its input syntax and always outputs symtax
;for a string literal

(define-syntax foo
  (lambda (stx)
    (syntax "I am foo")))

; when we use defned-syntax we're making a transormer binding, which tells the racket
; compiler "Whenever you encounter a chunk of syntax starting wtih foo, please give it to
; my transformer dfunctin, and replace it with the syntax I gie back to you."

(define-syntax (also-foo stx)
  (syntax "I am also foo"))

; shorthand for syntax is #'

(define-syntax (quoted-foo stx)
  #'"I am also foo, using #' instead of syntax")

(define-syntax (say-hi stx)
  #'(displayln "hi"))


(define-syntax (show-me stx)
  (print stx)
  #'(void))



(define-syntax (reverse-me stx)
  (datum->syntax stx (reverse (cdr (syntax->datum stx)))))

(define (our-if condition true-expr false-expr)
  (cond [condition true-expr]
        [else false-expr]))

(require (for-syntax racket/match))
 (define-syntax (our-if-using-match-v2 stx)
    (match (syntax->list stx)
      [(list _ condition true-expr false-expr)
       (datum->syntax stx `(cond [,condition ,true-expr]
                                 [else ,false-expr]))]))
 (our-if-using-match-v2 #t "true" "false")
