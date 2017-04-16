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

                                        ; "Lambda is a symbol, like all names. We can quote it, compare it, and store it in lists, it only has special meaning when it is the first element of a lisp. When it appears there, the list is referred to as a lambda form or as a fucntion desigator. But this form is not a function. This form is a list data structure that ca be converted into a function using the function special form"

(function '(lambda (x) (+ 1 x)))

(function `(lambda (x) (+ 1 x)))

#'(lambda (x) (+ 1 x)) ; for some reason the above are supposed to be equivalent with the above but this one is the only one working #' = funtion shorthand

                                        ; "As a further covenience frature, lambda is also defined as a macro that expands into a call to function special form shove. The common lisp asi standard requires ansi-cl-iso-compatability] a lambda macro defined like so"

(defmacro lambda (&whole form &rest body)
  (declare (ignore body))
  '#', form)

                                        ;"ignore the ignore declaration for now. This macro is just a simple way to automatically apply the function special form to your function designators. This macro allows us to evaluate fncion designators to create functions because they are expanded into sharp-quoted forms" - Douglas Hoyte Let over Lambda

                                        ; Admittedly I do not understand the "whole", form, rest, and body things but it seems to be referring to itself, the form, and the the body

                                        ; "There are few good reasons to prefix your lambda forms with #' thanks to the lambda macro."

; "Without even invoking the lambd amacro, we can use lambda forms as the first argumennt in a function call."

                                        ; "For example, although comiler-test looks like it applies an ivrement function to the number 2 and reurns the result, a decent comiler will be smart enough to know that this function always returns the value 3 and will simply return that number directly, invokng no fuctions in the process. THis is called lambda folding." Compiled lambda forms is a constant form

; An important efficiency observation is that a compiled lambda form is a constant form. This eams that after your program is compiled, al lreferences to that function are simply pointers ot a chuk of machine code. This pointer can be returned from funcntions and embedded in new environemnts, all with no function creation overhead. The overhead as absorbed when the program was compiled. In other words, a function nthat returns another function will simply be a contant time pointer return function" - Douglas Hoyte

(defun lambda-returner ()
  (lambda (x) (+ 1 x)))

                                        ; This is in direct constrast to the let form, which is designed to create a neenvironment at run-time and as such is usually ot a constant operation because of the garbage collection overhead implied by lexical closures, which are of indefinite extent

(defun let-over-lambda-returner ()
  (let ((y 1))
    (lambda (x)
      (incf y x)))) ; increment both y & x after execution of 'lambda form' edit1 OH! I forgot that this is a let over lambda thing and that this is supposed to be really important

(progn
  (compile 'let-over-lambda-returner)
  (time (let-over-lambda-returner)))

                                        ; You cannot compile closures only functions that create closures "The use of a let ennclosing a lambd aabove is so important that we will spend the remainder of this chapter disucssing the patter and variations "

                                        ; Let over lambda is a nickname given to a lexical closure. Let over lambda more closely mirrors the lisp code used to create closures than does most terminology. In a let over lambda scenario, the last form returned by a let statement is a lambda expression. It literally looks like let is sitting on top of lambda" - Douglas Hoyte "

(let ((x 0))
  (lambda () x)) ; this is valid

                                        ; "Recall that the let form returns the result of evaluating the lat form inside its body, which is why evaluating this let over lambda form produced a function. However there is something special about the last form in the let. It is a lambda form with x as a free variable. Lisp was smart enough to determine what x should refer to for this function: the x from the surrounding lexical environemntn created by the let form. And, because in lisp everuthing is of indefinite extent by default, the environment will be available for this functin to use as long as it needs it. So lexical scope is a tool for specifying exactly where references to a variable are valid, and exactly what the references refer to. A integer is an environment and increments and returns this value upon every invocation. Here is how iT is typically implemented, wit a let over lambda: "

(let ((counter 0))
  (lambda () (incf counter)))
                                        ; "One way of thinkig about closures is that they are functions with state, These functions are not mathematical functions but rather procedures, each with a little memory of its own. Sometimes data structures that bundle together code and data are called objects. An object is a collection of procedures and some associated state. Since objects are so closely related. A closure is an object with exactly one associated method: fucall. n object is a closuer that you can funcall in multiple ways. Although closures are always a single function and its enclosing environment, the multiple metods, inner classes, and static variables of object systems all have their closure coutnerparts. One possible way to simulate multiple metods is to simply return multiple lambdas from inside the same lexical scope. - Douglas Hoyte
                                        ; Closures it seems to me are merely virtual environments or encapsulated "state" better called encapuslated environments - Ricky , again lexical scope would preferably be translated, in my eyes, as encapsulated environment, so return multiple lambda's from the same encapsulated environment which is 'set off' or 'created' by let,(I think) but perhaps let over lambda (gonna go with the latter!)

(let ((counter 0))
  (values
   (lambda () (incf counter))
   (lambda () (decf counter))))
                                        ;"This let over two lambdas pattern will return two functions, as both of which access the same enclosing counter variable." The first increments it and the second decrements it. There are many other ways to accomplish this. One of which, dlambda, is discussed in section 5.7, Dlambda. For reasons that will be explainned as we go along, the code in this book will structure all data using closures instead of objects. Hint: It has to do with macros." - Douglas Hoyte"

                                        ; "2.6 Lambda overr let over lambda In some object systems there is a sharp distinction between objects, collections of procedures with associated state, and classes, the data structures used to create objects. This distinction does not exist with closures. We saw examples of forms you can evaluate to create closures, most of them following the pattern let over lambda, but how can our program create these objects as needed? The answer is profoundly simple. If we can evaluate them in the REPL, we ca eval them inside a function too. What if we create a function whose sole purpose is to evaluate a let over lambda ad return the result? Because we use lambda to represent functions, it would look something like this"" - Douglas Hoyte

                                        ;Ah I think i'm getting it now the iteration of let's but also lambda's does a 'revalation'

(lambda ()
  (let ((counter 0))
    (lambda () (icf conter))))
; ""When the lambda over let over lambda is invoked, a new closure containing a counter binding will be created ad returned.  Remember that lambda expressions are constants: mere poinnter to machine code. This expression is a simple bit of code that creates ew environments to close over the inner lambda expression, (which is itself a constant, compiled form)" - Douglas Hoyte

                                        ;"With object systems, a piece of code that createss objects is called a class. But lambda over let over lambda is subtly different than the classes of many languages. While most languages requrie classes to be amed, this pattern avoids aming altogether. Lambda ovr let over lambda forms can be called anonymous classes. Although regular classes are often useful, we usually ame classes. The easiest way to give them names is to recogise that such classes are regular functios. How do we ormally ame functions? With the defun form, of course. After aming, the above anonymous class becames." - Douglas Hoyte
;april-2017-16

(defun counter-classes ()
  (let ((counter 0))
    (lambda () (incf counter))))

                                        ;" Defun supplies an implicit lambda around the forms of it's body.Apparetly closures are necessary for modeling any problem and are the building blocks of lisp. The problem block scanner solves is that for some forms of datta transfer the data is delivered in groups of uncertain sizes. These sizes are generally convenient for the underlying system but not for the application programmer" - Douglas Hoyte

                                        ;Apparently this allows us to stream an input of variable size, I assume this is in cotrast to C where we had to input the size of the C streams or manage memory a priori(?) unless then there would have been a buffer overflow with is a security risk.

(defun block-scanner (trigger-string)
  (let* ((trig (coerce trigger-string 'list))
         (curr trig))
    (lambda (data-string)
      (let ((data (coerce data-string 'list )))
        (dolist (c data)
          (if curr
              (setq curr
                    (if (char= (car curr) c)
                        (cdr curr) ;ext char
                        trig))))
        (not curr)))))
; Why is let like that?edit1 let performs the bindings parralel and let* does them sequentially
(defvar scanner
  (block-scanner "jihad"))
                                        ; It's not immediately obvious to me why it triggered over 'had tomorrow.

                                        ; Users of object systems store values they want shared between all objects of a certain class into so-called clas variables or static variables. In lisp

(let ((direction 'up))
  (defun toggle-counter-direction ()
    (setq direction
          (if eq direction 'up)
          'down
          'up)))

(defun counter-class ()
  (let ((counter 0))
    (lambda ()
      (if (eq direction 'up)
          (incf counter)
          (decf counter)))))

                                        ; "Notice we can also take advantage of another lambda inside the direction environment by creating a function called toggle-counter-direction which changes the current direction for all counters "Object systems are a formalisation of a subset of let ad lambda combinations, sometimes with gimmicks like inheritance bolted on. Because of this, lisp programmers don't think it terms of classes and ojects" " - Douglas Hoyte Let over Lambda (on to chapter 3)


                                        ; Chapter 3
                                        ; Macro Basics
                                        ;3.1 Interactive Development
                                        ; Macros are constructed iteratively.
                                        ; In this chapter we will write some basic macros by introducing two commonn macro conncepts:  D.Hoyte introduces : domain specific languages and control structures


(defun sleep-units% (value unit)
  (sleep
   (* value
      (case unit
        ((s) 1)
          ((m) 60)
          ((h) 3600)
          ((d) 86400)
          ((ms) 1/1000)
          ((us) 1/1000000)))))
                                        ; "In languages like C it is customary to use an underlying data type like int and assign arbitrary values corresponding to the differet units. But in lisp the most obvious way to signal the desired unit is to use a symbol. A symbol in lisp exists mostly to be something not eq to other symbols. Eq is the fastest lisp comparison operator and roughly corresponds to a pointer comparison. Since pointers can be compared very quickly, symbols provide a very fast and convenient way t let two or mor different lisp expressions know you're referring to the same thing."

(sleep-units% 2 `m)
(sleep-units% 500 `us)

(defmacro sleep-units (value unit)
  `(sleep
    (* ,value
     ,(case unit
        ((s) 1)
         ((m) 60)
         ((h) 3600)
          ((d) 86400)
          ((ms) 1/1000)
          ((us) 1/1000000)))))

                                        ; for this on ` worked over '
(sleep-units .5 h)
; when I eval this in either slime or 'lisp-inferior' i get Evaluated aborted on #<Simple-Type-Error expected-type: umber datum: NIl>
