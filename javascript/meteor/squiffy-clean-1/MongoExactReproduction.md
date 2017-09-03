db.timesheetmodified2.distinct("local_date").sort() //lists most recent date to which you exported for, right now I do not
// have a good question to the following question

Q) If you export to an overlapping date does it add an additional document that would "double count" it?.

mongoimport --file timesheet_report_2016-01-13_thru_2016-01-25.csv --type csv --db test --collection timesheet --headerline


db.timesheet.find().forEach(function(doc) {
    doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified2.save(doc);}) ; //converts stuff into a date object
//

db.timesheetmodified2.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified2.update({_id: doc._id},{$set: {whatMonth: getMonth}} ) ; } );

db.timesheetmodified2.find().forEach(function(doc){     var getlocal = doc.local_start_time;
    db.timesheetmodified2.update({_id: doc._id},{$set: {whatShift: getlocal.getDate() , whatTime: getlocal}} ); });

Did it just fine. After I do this I need to build queries that get me the
* average hours per job code 1/2
* average hours per building
* total hours per employee