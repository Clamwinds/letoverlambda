;; Let is a lisp special form for reating an evironment with names (bindins) initialised to the results of evaluating orresponding forms. These names are available to the code inside the le body while its forms are evaluated consecut

                                        ; Although Common Lp dsioes offer the invaluable feature of dynamic scope, lexical variables are the most common

(defun register-allocated-fixum ()
    (declare (optimize (speed 3) (safety 0)))
  (let ((acc 0))
    (loop for i from i to 100 do
    (incf (the fixum acc)
          (the fixnum i)))
    acc))
;incf = incrementing the value of 'place' http://clhs.lisp.se/Body/m_incf_.htm
; result is machine code in book
; so the above declares a
                                        ; What do I have to do to learn this thing?
;let will return the eevaluation of the last form in the body. "This is commo for many lisp special forms ad macros, so common that this pattern is often referred to as an implicit progn due to the prog special form designed to do nothing but this. Sometimes the most valuable thig to have a let form return is an anonymous funtion which takes advantage of the lexical environment supplied by the let form" - Douglas Hoyte

;"Lambda is "
