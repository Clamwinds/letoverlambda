/*** Created by calmwinds on 1/3/16.*/
var co = require('co');
var mongorito = require('mongorito');
const Mongorito = require('mongorito');
const Model = Mongorito.Model;
//var monk = require('monk');
//var wrap = require('co-monk');
//var Promise = require('bluebird');
var string = "94022";
//Robe = require('robe');
var debug = require('debug')('http'),
    http = require('http'),
    name = 'My App';

co(function* (result) {
    var zipcodeClass = Model.extend({
        collection: 'zipcodes',

        collection: function () {
            return 'zipcodes';
        }
    });
    var zipcodeclass = new zipcodeClass({
        zipcode: ["94025", "94027", "94301", "94305", "94303", "94306", "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"]
    });
    yield Mongorito.connect('localhost/test');

    var posts1 = yield zipcodeClass.where('zipcode').in(["94022"]).count();
    yield Mongorito.disconnect();
    var result = yield Promise.resolve(posts1);
    return result;
}).then(function (result) {
    if (result == 1) {
        var str = "This is a valid zipcode";
    } else {
        var str = "Invalid zipcode";
    }
    return str;
    console.log(result);
}, function (err) {
    console.error(err.stack);
}).then(function (str) {
    console.log(str);
});

// var var1 = yield zipcodeClass.where('zipcode.', '94022').find();
//Doing .find().count() gave me a process
// that ran forever, but merely doing .count() did not

// I need to return a string based on if it finds the relevant string inside the zipcode document
//Now we are going to find all posts in the database. The returned array contains documents wrapped into Post model.

// yield console.log(var1);
// returns one
//   console.log(typeof(posts1));

//# sourceMappingURL=squiffymongorito-compiled.js.map