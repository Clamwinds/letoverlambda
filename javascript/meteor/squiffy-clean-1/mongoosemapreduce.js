var mongoose = require('mongoose');
var connection1 = mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.once('open', function() {
    console.log(" we're connected")
})

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var timeschema = new Schema({
    _id: ObjectId,
    username: String,
    fname: String,
    lname: String,
    number: Number,
    group: String,
    local_date:String,
    local_day: String,
    local_start_time: Date,
    local_end_time: Date,
    tz: Number,
    hours: Number,
    jobcode_1: String,
    jobcode_2: String,
    jobcode_3: String,
    jobcode_4: String,
    location: String,
    notes: String,
    approved_status: String,
    whatMonth: Number,
    whatShift: Number,
    whatTime: Date,
})

var contactschema = new Schema({
    _id: ObjectId
    fname: String,
    lname: String,
    zipcode: Number,
})

var Thing = mongoose.model('Thing', timeschema);
var instance = new Thing();
var o = {};

instance.save(function (err) {

});

Thing.mapReduce(o, function (err, results) {
    console.log(results)
})

mongoose.connection.close();
