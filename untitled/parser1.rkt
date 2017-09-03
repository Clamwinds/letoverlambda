Welcome to Racket v6.1.1.
≺≻ rls
; default-load-handler: expected a `module' declaration
;   found: something else
;   in: #<path:/home/lucien/code/June-19-2015.rkt>

≺≻ (define-syntax-ruile (def id body) (define id body))
; stdin::131: define: not allowed in an expression context
;   in: (define id body)
≺≻ (define-syntax-rule (def id body) (define id body))
≺≻ (def name "Ricky")
≺≻ name
"Ricky"
≺≻ name
"Ricky"
≺≻ ; stdin::278: def: use does not match pattern: (def id body)
;   in: (def (vector-swap vec i j) (def t (vector-ref vec i)) (vector-set! vec i (vector-ref vec j)) (vector-set! vec j t))
≺≻ rls
; rls: undefined;
;  cannot reference undefined identifier
≺≻ #<procedure>
≺≻ ; stdin::500: read: unexpected `)'
; Context:
;  /home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/cmds.rkt:30:2
≺≻ #<procedure>
≺≻ ; stdin::536: read: unexpected `)'
; Context:
;  /home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/cmds.rkt:30:2
≺≻ #<procedure>
≺≻ ; stdin::572: read: unexpected `)'
; Context:
;  /home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/cmds.rkt:30:2
≺≻ (succeed val)
; succeed: undefined;
;  cannot reference undefined identifier
≺≻ #<procedure>
≺≻ ; stdin::623: read: unexpected `)'
; Context:
;  /home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/cmds.rkt:30:2
≺≻ (succeed 1)
; succeed: undefined;
;  cannot reference undefined identifier
≺≻ (succeed '())
; succeed: undefined;
;  cannot reference undefined identifier
≺≻ (succeed '())
; succeed: undefined;
;  cannot reference undefined identifier
≺≻ (succeed '())
; succeed: undefined;
;  cannot reference undefined identifier
≺≻ 
; default-load-handler: cannot open module file
;   module path: #<path:/home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/image.rkt>
;   path: /home/lucien/.emacs.d/elpa/racket-mode-20150122.2124/image.rkt
;   system error: No such file or directory; errno=2
