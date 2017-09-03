/**
 * Created by lucien on 12/11/15.
 */
var express = require('express');
var app = express();
var port = process.argv[2];
var jadepath = process.argv[3];

//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));


app.get('/home', function(req, res){

    //res.end('Hello World')
    app.set('views',process.argv[3] || path.join(__dirname, 'templates'));
    app.set('view engine', 'jade');

    res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);

// this worked after i set the app.listen to process.argv[2] and i piped
// the process.argv[3] to path.join using ||