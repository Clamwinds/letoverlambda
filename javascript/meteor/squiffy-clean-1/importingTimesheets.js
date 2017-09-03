/**
 * Created by calmwinds on 1/13/16.
 */

//Below is what we need to do everytime we get new timesheets and what we need to do when building a new one

//mongoimport --file timesheetreport2015-12-30_thru_2016-01-13.csv --type csv --db test --collection timesheet --headerline


db.timesheet.find().forEach(function(doc) {
    doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified2.save(doc);}) ; //converts stuff into a date object
//

db.timesheetmodified2.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified2.update({_id: doc._id},{$set: {whatMonth: getMonth}} ) ; } );

db.timesheetmodified2.find().forEach(function(doc){     var getlocal = doc.local_start_time;
    db.timesheetmodified2.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });

//queries I need. avg hours per job code and what people were on the job