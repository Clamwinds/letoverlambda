/**
 * Created by lucien on 12/11/15.
 */
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.listen(process.argv[2]);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
    var print = req.body.str.split('').reverse().join('');
    req.end(print);

});