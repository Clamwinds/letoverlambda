(define-syntax-rule (def id body) (define id body))

(def (vector-swap vec i j)
  (def t (vector-ref vec i))
  (vector-set! vec i (vector-ref vec j))
  (vector-set! vec j t))
