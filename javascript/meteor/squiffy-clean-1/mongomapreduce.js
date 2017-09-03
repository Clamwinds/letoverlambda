/**
 * Created by calmwinds on 12/30/15.
*/

//var distinctdates = db.timesheet.distinct("local_date");
var mongo = require('mongodb');
var db = 'mongodb://localhost:27017/test';

var mapFunction1 = function() {
    var ShiftandMonth = this.whatMonth.toString() + this.whatShift.toString();
    hours = this.hours;
    emit(this.username, this.hours);
};

var reduceFunction1 = function(keyUsername, valuesHours) {
    return Array.sum(valuesHours);
};

var mapFunction3 = function() {

    var ShiftandMonth = this.whatMonth.toString() +"-"+ this.whatShift.toString() + "-"+this.local_start_time.getFullYear().toString();
    //ShiftandMonth = this.whatMonth.toString() + this.whatShift.toString(),
    //emit(this.jobcode_1, this.hours);
    //var sumhours = Array.sum(this.hours);
    emit({username: this.username, shiftandmonth: ShiftandMonth}, this.hours)
}

var reduceFunction3 = function(keyUsername, valuesHours)
{
    return Array.sum(valuesHours);
};


var mapbuilding = function(){
    var ShiftandMonth = this.whatMonth.toString() +"-"+ this.whatShift.toString() + "-"+this.local_start_time.getFullYear().toString();

    emit({Building: this.jobcode_1, shiftandmonth: ShiftAndMonth}, this.hours)
}

var reducebuilding = function(keyUsername, valuesHours){
    return Array.sum(valuesHours);
}
var distinctusers = function(building, usernames){

}
var mapfunction4 = function(){

    var ShiftandMonth = this.whatMonth.toString() +"-"+ this.whatShift.toString() + "-"+this.local_start_time.getFullYear().toString();
    var setofusernames = {};

    emit({building: this.jobcode_1, shiftandmonth: ShiftandMonth}, this.hours)
};
var reducefunction4 = function(firstparam, secondparam){
    var colors = {};
    var setofnames = {};

 //   return colors;
    return Array.sum(secondparam);
};


db.timesheetmodified2.mapReduce(
     mapfunction4,
     reducefunction4,
     {out: "mapreduce4"});

db.timesheetmodified2.mapReduce(
    mapFunction3,
    reduceFunction3,
    {out: "mapreduceexample3"}
    //Returns total hours worked on day on day of shift per username
);
