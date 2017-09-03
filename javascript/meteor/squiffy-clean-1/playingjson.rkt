#lang racket
(require json)
;(require pkg/mongodb)
(define x (string->jsexpr "{\"foo\": \"bar\", \"bar\": \"baz\"}"))
;(for (((key val) (in-hash x)))
;  (printf "~a = ~a~%" key val))

(struct person (first-name last-name age country))
(define (person->jsexpr p)
  (hasheq 'first-name (person-first-name p)
          'last-name (person-last-name p)
          'age (person-age p)
          'country (person-country p)))
(define cky (person "Chris" "Jester-Young" 33 "New Zealand"))
;(jsexpr->string (person->jsexpr cky))

(define in (open-input-file "inventory.json"))
(define table (read-json in))

(define y (first table))
;(define stored-hash)

;(for-each (lambda (table)
;          (printf "~a \n" table))
;          table)

(first table)
;;I need to define a function  that prints the key val for any supplied jsexpression


;(for ([key in-hash-keys table]))

(for ([key (in-hash-keys (first table))])
  (printf "key: ~a\n" key))

;(jsexprs are nested expressions of hashtables, so sets of hash tables)

; I need to make a function that will iterate over a jsexpr of any length and return to me
; all the hash tables

(define (my-length lst)
  ; local function iter:
  (define (iter lst len)
    (cond
      [(empty? lst) len]
      [else (iter (rest lst) (+ len 1))]))
  ; body of my-length calls iter:
  (iter lst 0))

(define (my-map f lst)
  (cond
    [(empty? lst) empty]
    [else (cons (f (first lst))
                (my-map f (rest lst)))]))

(define (hashkeys *hash*)
  (hash-keys *hash*))

(define (hashvalues *hash*)
  (hash-values *hash*))

(define myhashkeys (my-map hashkeys table))
(define myhashvalues (my-map hashvalues table))
;(my-map print table)



(defmacro lcomp (expression for var in list conditional conditional-test)
  ;; create a unique variable name for the result
  (let ((result (gensym)))
    ;; the arguments are really code so we can substitute them 
    ;; store nil in the unique variable name generated above
    `(let ((,result nil))
       ;; var is a variable name
       ;; list is the list literal we are suppose to iterate over
       (loop for ,var in ,list
             ;; conditional is if or unless
             ;; conditioanl-test is (= (mod x 2) 0) in our examples
             ,conditional ,conditional-test
             ;; and this is the action from the earlier lisp example
             ;; result = result + [x] in python
             do (setq ,result (append ,result (list ,expression))))
       ;; return the result 
       ,result)))
