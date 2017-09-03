/**
 * Created by lucien on 12/22/15.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var zipcodelist ="94086";
var mongo = require('mongoskin');
var zipcodestr = "94022";
var url = 'mongodb://localhost:27017/test';
var result = [];
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
   // console.log("Connected correctly to server.");
    db.close();
});
var insertZipcodeCollection = function(db, callback) {
    db.collection('zipcodes').insertOne({
        "zipcode": ['94025', '94027', '94301', '94305', '94303', '94306', '94306', '94085',
            '94043', '94035', '94041', '94040', '94022', '94049', '94086']
    },
    function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the zipcode collection.");
        callback(result);
    });
};
var findZipcode = function(zipcodestr, db, callback) {
    var cursor =db.collection('zipcodes').find( {'zipcode': zipcodestr } );
    var cursorConverted = Number( cursor.count() );
    var cursorTruth = cursorConverted != null;
    var str;
    var thisvalue = cursor.count(function(error, count1)
    {
        assert.equal(error, null);
        if(count1 >0 ) {
            str = "VALID";
         //  console.log(str);
            result.push(str);
           // callback(str);
          //  return str;
        }
        else {
            str = "We are not serving your zipcode area right now";
            console.log(str);
            result.push(str);
          //  callback(str);
          //  return str;
        }
       // result.push(str);
       // console.log(result);
    callback(str);
    });
};
var findZipcode1 = function(zipcodestr, db, callback) {
    var cursor =db.collection('zipcodes').find( { "zipcode": zipcodestr } );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {

            console.log("We are not serving your area right now")
            callback(str);
        }
    });

   // db.collection.findOne({})
};
var zipcodeCall = function(zipcodecheck){
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        findZipcode1("94022", db, function () {
          //  console.log(str);
            db.close();
            return str;
        });
    });
};
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
  var a =  findZipcode(zipcodestr, db, function () {
        console.log(result);
            db.close();
            //return result;
  });
    });

