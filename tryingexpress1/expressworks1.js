/**
 * Created by lucien on 12/11/15.
 */
var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/home', function(req, res){
    res.end('Hello World!')
});

app.listen(process.argv[2]);