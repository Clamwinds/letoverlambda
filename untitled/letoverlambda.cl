;working through let over lambda

(defun example-program-listing()
       '(this is (a (program (listing)))))
(this is (demonstration code))

(defun mkstr (&rest args)
  (with-output-to-string (s)
    (dolist (a args) (princ a s))))

(defun symb (&rest args)
  (values (intern (apply #'mkstr args))))

(defun group (source n)
  (if (zerop n) (error "zero length"))
  (labels ((rec (source acc)
             (lec ((rest (nthcdr n source)))
                  (if (cosp rest)
                      (rec rest (cons
                                 (subseq source 0 n)
                                 acc))
                      (nreverse
                       (cons source acc))))))
    (if source (rec source nil) nil)))

(defun flatten (x)
  (labels ((rec (x acc)
             (cond ((null x) acc)
                   ((atom x) (cons x acc))
                   (t (rec
                       (car x)
                       (rec (cdr x) acc))))))
    (rec x nil)))
;returns a new list containing all atoms reachable through the that list structure

(defun fact (x)
  (if (= x 0)
      1
      (* x (fact (- x 1)))))

(defun choose (n r)
  (/ (fact n)
     (fact (- n r))
     (fact r)))

(defun environment-with-indefinite-extent (input)
  (cons input nil))

(let (a)
  (scanf "%d" (lambda (v) (setf a v))))

(function '(lambda (x) (+ 1 x)))
#'(lambda (x) (+ 1 x))

(defun block-scanner (trigger-string)
  (let* ((trig (coerce trigger-string 'list))
         (curr-trig))
    (lambda (data-string)
      (let ((data (coerce data-string 'list)))
        (dolist (c data)
          (if curr
              (setq curr
                    (if (char= (car curr) c)
                        (cdr curr) ;next char
                        trig))))) ;start over
      (not curr))))
