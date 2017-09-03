var fs = require('fs');

bson = require('bson');
var mongoose = require('mongoose');
var generator = require('mongoose-gen');

// load json
var data = fs.readFileSync('/home/lucien/code/javascript/meteor/simple-todos/singularity556.json', {encoding: 'utf8'});
var timeJson = JSON.parse(data);

// In the above _book.json_ file there is a `validateBookYear` token.
// mongoose-gen uses this token to lookup an actual validator function which
// should be registered beforehand. This is how to register validators.
//generator.setValidator('validateBookYear', function (value) {
//    return (value <= 2015);
//});

// Generate the Schema object.
var timeSchema = new mongoose.Schema(generator.convert(timeJson));

// Connect to mongodb and bind the book model.
mongoose.connect('mongodb://localhost/test');
var timeModel = mongoose.model('Timesheet', timeSchema);

// TODO Need to import the timesheet info from singularity556.json or whatever file name we use
// TODO isuse is im running into problems w/ correct bson file is
//
//not found

