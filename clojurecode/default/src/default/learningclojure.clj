(ns default.learningclojure
  (:gen-class))

(defn -main
  "I don't do a whole lot...yet"
  [& args]
  (println "Hello, World!"))




(defmacro my-print
  [expression]
  (list 'let ['result expression]
        (list 'println 'result)
        'result))

