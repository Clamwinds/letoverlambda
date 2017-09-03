/**
 * Created by calmwinds on 12/30/15.
 */
db.timesheet.find().forEach(function(doc) {
    doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified.save(doc);}) ;


db.timesheetmodified.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified.update({_id: doc._id},{$set: {whatMonth: getMonth}} ) ; } );

// the above builds a timesheetmodified that is more meaningful and verbose
//1/13/2016----------------------------------------
// I imported more timesheets from tsheets and I need to  build all the stuff I did before and have it work
db.timesheet.find().forEach(function(doc) {
    doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified2.save(doc);}) ; //converts stuff into a date object
                                                                                                                                                    //

db.timesheetmodified2.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified2.update({_id: doc._id},{$set: {whatMonth: getMonth}} ) ; } );

db.timesheetmodified2.find().forEach(function(doc){     var getlocal = doc.local_start_time;
    db.timesheetmodified2.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });

//db.timesheetmodified2.find().forEach(function(doc){     var getlocal = doc.local_start_time; var getshift = new Date(doc.local_start_time.setHours(getlocal.getHours()-6));
    // i intend the above to put what day of the shift it was //this did not work
//


db.timesheetmodified2.find().forEach(function(doc){     var getlocal = doc.local_start_time;
    db.timesheetmodified2.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });
//above accurately modifies and adds what shift they started on
--------------------------------------------------
var local = doc.local_start_time
local.setHours(local.getHours()-48)

db.timesheetmodified.find().forEach(function(doc){
    var getlocal = doc.local_start_time; var getshift = getlocal.setHours(getlocal.getHours()-6);
    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getlocal.getDate()}} );
});

db.timesheetmodified.find().forEach(function(doc){
    var getlocal = doc.local_start_time; var getshift = getlocal.setHours(getlocal.getHours()-6);
    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getshift.getDate()}} );
});

db.timesheetmodified.find().forEach(function(doc){     var getlocal = doc.local_start_time; var getshift = new Date(doc.local_start_time.setHours(getlocal.getHours()-6));

    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });

db.timesheetmodified.find().forEach(function(doc){     var getlocal = doc.local_start_time;
    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });


// i see that this will get us t

db.timesheet.find().forEach(function(doc) {
    doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified.save(doc);})

db.timesheetmodified.find().forEach(function(doc) { var timeOfStart = ISODate(doc.local.local_start_time; var setbacksix = setbacksix.setHours(timeOfStart.getHours() - 6); var getShift = doc.setbacksix.getDay();
    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getShift}} ) ; } );

db.timesheetmodified.find().forEach(function(doc) { var timeOfStart = doc.local_start_time; ;var setbacksix = timeOfStart.setHours(timeOfStart.getHours() - 6); console.log(setbacksix); var getShift = setbacksix.getDay();
    db.timesheetmodified1.update({_id: doc._id},{$set: {whatShift: getShift}} ) ; } );
//setbacksix undefined

//below are meaningful queries but do not actually change or modify something
// db.timesheetmodified.distinct("notes")
//
db.timesheetmodified.aggregate({$group: { _id: "$username", totalhours: { $sum : "$hours"}}} );
//returns the sum of all hours for every username

db.timesheetmodified.aggregate({$group: { _id: "$jobcode_1", totalhours: { $sum : "$hours"}}} );


db.timesheet.aggregate([{$match: {username: "maribelmedina"} }, {$group: {_id:"Maribel", totalhours: {$sum: "$hours"}} } ]);


db.mangledtimes.forEach(function(doc) {var totalhours =doc.totalhours; var avghours = doc.avgHours;})
