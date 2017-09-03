/**
 * Created by lucien on 12/11/15.
 */
var express = require('express');
var app = express();
var port = process.argv[2];

//app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);

// it worked once i added the app.listen, why do we use the app.listen at the end as opposed to
// the start?