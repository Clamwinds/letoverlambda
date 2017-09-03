(defun mkstr (&rest args)
  (with-output-to-string (s)
    (dolist (a args) (princ a s))))

(defun symb (&rest args)
  (values (intern (apply #'mkstr args))))

;symb is layered on mkstr, is a general way of creating symbols. Since symbols can be referenced by any arbitrary string, and creating symbols programmmatically is so useful, symb is an essential utility for maro programming and is used heavily throughout this book.

(defun group (source n)
  (if (zerop n) (error "zero length"))
  (labels ((rec (source acc)
             (let ((rest (thcdr n surce)))
               (if (consp rest)
                   (rec rest (cons
                              (subseq source 0 n)
                              acc))
                   (nreverse
                    (cons source acc))))))
    (if source (rec source nill) nil)))

                                        ; group


(defun flatten (x)
  (labels ((rec (x acc)
             (cond ((null x) acc)

                   ((atom x) (cons x acc))
                   (t (rec
                       (car x)
                       (rec (cdr x) acc))))))
    (rec x nil)))

;flatten accomplishes code walking a recurrig theme throughout let over lambda

(defun fact (x)
  (if (= x 0)
      1
      (* x (fact (- x 1)))))

(defun choose (n r)
  (/ (fact n)
     (fact (- n r))
     (fact r)))

(defun register-allocated-fixnum ()
  (declare (optimize (speed 3) (safety 0)))
  (let ((acc 0))
    (loop for i from i to 100 do
      (incf (the fixum acc)
            (the fixnum 1)))
    (acc)))
; ok so what the fuck is (ac 0)) is this an expression, a symbol, or whatever it is? I wonder what the options are.

(function '(lambda (x) (+ 1 x)))

; there is a workaround for typing the syntax function just type #
                                        ; what is lambda? Lambda is a symbol (like all names in lisp) "We can quote it compare it, and store it in lists, Lambda only has a special meaning when it is the first element of a list. When it appears there , the list is referred  as a lambda form or as a function designator. But this form is ot a function. This form is a list data structure that can be converted into a function using the function special form.

(defmacro lambda (&whole form &rest body)
  (declare (ignore body))
  '#',form)

; there are a few good reasons to prefix your lambda forms with #' thanks to the lambda macro. Because th
