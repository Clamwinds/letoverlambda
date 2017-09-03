/**
 * Created by lucien on 12/24/15.
 *Accessed again on 1/13/2015
*/
 //var mongo = require('mongoskin');
var mongo = require('mongodb');
//var mongoose = require('mongoose');
var s = require('string'); //https://www.npmjs.com/package/string

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var moment = require('moment');
var findTimesheets = function(db, callback) {
    var cursor =db.collection('timesheet').find({} );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

var findTimes = function(db, callback) {
    var cursor = db.collection('timesheet').find({"local_date": "2015-12-03"}, {"local_date": 1, "local_start_time": 1, "local_end_time": 1, _id:0});
    //moment('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter(); // 1
    //db.inventory.find( { type: 'food' }, { item: 1, qty: 1 } )

    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {

            console.dir(doc);
        }
            else{
                callback();
            }
        });
    };

var countDates = function(db, callback){
    db.collection('timesheetmodified1').aggregate(
    [
          { $match: {"jobcode_1": "Hacker Dojo"}},
          { $group: {"_id": "$whatShift", "WhichPerson": {$addToSet: "$username"}, "totalcount": {$sum: 1}, "totalhours": {$sum: "$hours"}}}
  ]).toArray(function(err, result) {
        assert.equal(err, null);
        console.log(result);
        callback(result);
    }
    );
};


var countDates1 = function(db, callback){
    db.collection('timesheetmodified2').aggregate(
        [
            { $match: {"jobcode_1":"Hacker Dojo"}},
            { $group: {"_id": "$whatShift" , "WhichPerson": {$addToSet: "$username"}, "totalhours": {$sum: "$hours"}, "whatMonth": {$addToSet:"$whatMonth"}}},
            { $project: {"WhichPerson":1,"totalhours":1 ,"whatMonth":1 ,numberOfPersons: {$size: "$WhichPerson"}} },
            { $project: {avgHours: {$divide: ["$totalhours","$numberOfPersons"]}, "WhichPerson":1,"totalhours":1, "numberOfPersons": 1, "whatMonth":1}},
            { $out: "mangledtimes"}

        ]).toArray(function(err, result) {
            assert.equal(err, null);
            console.log(result);
            callback(result);
        }
                  );

    var output = db.collection('timesheetmodified1').aggregate(
        [
            { $match: {"jobcode_1":"SU 20"}},
            { $group: {"_id": "$whatShift" , "WhichPerson": {$addToSet: "$username"}, "totalhours": {$sum: "$hours"}, "whatMonth": {$addToSet:"$whatMonth"}}},
            { $project: {"WhichPerson":1,"totalhours":1 ,"whatMonth":1 ,numberOfPersons: {$size: "$WhichPerson"}} },
            { $project: {avgHours: {$divide: ["$totalhours","$numberOfPersons"]}, "WhichPerson":1,"totalhours":1, "numberOfPersons": 1, "whatMonth":1}},

        ]).toArray(function(err, result){
            console.log(result);
        })
    
 
};
var countDates2 = function(db, callback){


    db.collection('timesheetmodified2').aggregate(
        [
            { $match: {"jobcode_1":"Hacker Dojo"}},
            { $group: {"_id":  {"whatmonth": "$whatMonth", "whatShift": "$whatShift", "whatBuilding": "$jobcode_1"} , "WhichPerson": {$addToSet: "$username"}, "totalhours": {$sum: "$hours"}, "whatMonth": {$addToSet:"$whatMonth"}}},
            { $project: {"WhichPerson":1,"totalhours":1 ,numberOfPersons: {$size: "$WhichPerson"}} },
            { $project: {avgHours: {$divide: ["$totalhours","$numberOfPersons"]}, "WhichPerson":1,"totalhours":1, "numberOfPersons": 1, "whatMonth":1}},
            { $out: "mangledtimes2"}

        ]).toArray(function(err, result){
            assert.equal(err, null);
            console.log(result);
            callback(result);
        })


}

//This one gives me the count of all people who worked a job per given date

//make method to grab distinct dates

var updateTimeSheets = function(db, callback){
  var timesheetCollections = db.collection('timesheet');

};

var findHours = function(fb, callback){
    var cursor = db.collection('timesheet').fi
};
//db.timesheet.find( { "local_date": '2015-12-02' }, { "local_date": 1, "local_start_time": 1, _id:0} )
// returns only local_start
//"local_start_time": "2015-12-02 02:25:20",
//"local_end_time": "2015-12-02 03:03:58",


//

var testmapReduce = function(fb, callback) {

}

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    //findTimes(db, function() {
        db.close();
    //});


});



MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    countDates1(db, function() {
        db.close();
    })
    
})


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    countDates2(db, function() {
        db.close();
    })
})
