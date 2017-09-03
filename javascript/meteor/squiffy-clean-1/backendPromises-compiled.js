/**
 * Created by calmwinds on 1/2/16.
 */
// I'm left with the issue of playing with promises or messing around with callbacks  for the zipcode check function
var result = [];
var pmongo = require('promised-mongo').compatible();
var mongo = require('mongoskin');
//var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});
//var db = pmongo('mongodb://localhost:27017/test');
//var mycollection = db.collection('mycollection');
//var db = pmongo('test');
var db = pmongo('test', ['zipcodes']);
//var mycollection = db.collection('zipcodes');
//db.bind('zipcodes');
//db.zipcodes.find().toArray(function(err, items) {
//console.log(items);
//result.push()
//   db.close();
//});

var fn = function () {
    db.zipcodes.findOne({
        zipcode: "94022"
    }).then(function (doc) {
        if (doc != null) {
            result.push("Success!");
            db.close();
            console.log(result);
        }
    }, function (doc) {

        result.push("Invalid zipcode");
        db.close();
        console.log(result);
        return result;
    }).done();
};

console.log(fn());

//# sourceMappingURL=backendPromises-compiled.js.map