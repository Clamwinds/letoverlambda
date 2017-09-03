#lang racket
(require json)
(require json)
(define x (string->jsexpr "{\"foo\": \"bar\", \"bar\": \"baz\"}"))
(for (((key val) (in-hash x)))
  (printf "~a = ~a~%" key val))

(struct person (first-name last-name age country))
(define (person->jsexpr p)
  (hasheq 'first-name (person-first-name p)
          'last-name (person-last-name p)
          'age (person-age p)
          'country (person-country p)))
(define cky (person "Chris" "Jester-Young" 33 "New Zealand"))
(jsexpr->string (person->jsexpr cky))

(require json)
(define in (open-input-file "inventory.json"))
(define z (read-json in))

(define y (first x))

;;I need to define a function  that prints the key val for any supplies js-expr

