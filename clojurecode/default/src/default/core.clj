(ns default.core
  :gen-class)

(ns example
  (:require [clojure.data.json :as json]))


(ns my.service.server
  (:require [monger.core :as mg])
  (:import [com.mongodb MongoOptions ServerAddress]))

(ns my.service.server
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import [com.mongodb MongoOptions ServerAddress]))


(let [conn (mg/connect)
      db   (mg/get-db conn "test")]
           (mc/find-maps db "timesheet"))

;(defmacro with-db [body]
;  `(let [conn# (mg/connect)
 ;        db# (mg/get-db conn "test")]
;     (-> db#
;         ~body)))

;(with-db (mc/find-maps "timesheet"))

(def db-name "test")

(defn with-db [op & args]
  (let [conn    (mg/connect)
        db      (mg/get-db conn db-name)]1
    (apply op db args)))

(def documentholder (with-db monger.collection/find-maps "timesheet"))
(with-db monger.collection/find-maps "timesheet")
;(print returned)
;(mc/find-maps db "documents")

;(def alldocuments (mc/find-maps db "test"))
;(mc/find-maps db "test")
;(+ 1 1 1 10)

(defmacro infix
  [infixed]
  (list (second infixed) (first infixed) (last infixed)))
(infix (1 + 1))

(defmacro my-print
  [expression]
  (list 'let ['result expression]
        (list 'println 'result)
        'result))




