#lang racket
(require plot)
(require math)



(plot (for/list ([k  (in-list '(1 2 3 9))]
                 [s  (in-list '(2 2 3 1/2))]
                 [i  (in-naturals)])
        (function (ordered-dist-cdf (gamma-dist k s))
                  #:color i #:label (format "Gamma(~a,~a)" k s)))
      #:x-min 0 #:x-max 15 #:y-label "probability"
      #:legend-anchor 'bottom-right)
;prints a gamma distribution


(plot (for/list ([m  (in-list '(0 -1 0 2))]
                 [s  (in-list '(1 1/2 2.25 0.7))]
                 [i  (in-naturals)])
        (function (distribution-pdf (cauchy-dist m s))
                  #:color i #:label (format "Cauchy(~a,~a)" m s)))
      #:x-min -8 #:x-max 8 #:y-label "density"
      #:legend-anchor 'top-right)



(plot (for/list ([α  (in-list '(1 2 3 1/2))]
                 [β  (in-list '(1 3 1 1/2))]
                 [i  (in-naturals)])
        (function (distribution-pdf (beta-dist α β))
                  #:color i #:label (format "Beta(~a,~a)" α β)))
      #:x-min 0 #:x-max 1 #:y-max 4 #:y-label "density")
