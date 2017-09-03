'use strict';

/*** Created by calmwinds on 1/4/16.*/

// Using this to explore async/await with mongodb
// there's an issue w/ my stuff or theres.
var Mongo = require('mongodb');
var Mongorito = require('mongorito');
var Model = Mongorito.Model;
var co = require('co');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
require("babel-polyfill");

var regenerator = require('regenerator');
function myFunction() {
    var zipcodeClass, zipcodeclass, posts1, result;
    return regeneratorRuntime.async(function myFunction$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                // let result = await somethingThatReturnsAPromise();

                zipcodeClass = Model.extend({
                    collection: 'zipcodes',

                    collection: function collection() {
                        return 'zipcodes';
                    }
                });
                zipcodeclass = new zipcodeClass({
                    zipcode: ["94025", "94027", "94301", "94305", "94303", "94306", "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"]
                });
                _context.next = 4;
                return regeneratorRuntime.awrap(Mongorito.connect('localhost/test'));

            case 4:
                _context.next = 6;
                return regeneratorRuntime.awrap(zipcodeClass.where('zipcode').in(["94022"]).count());

            case 6:
                posts1 = _context.sent;
                _context.next = 9;
                return regeneratorRuntime.awrap(Mongorito.disconnect());

            case 9:
                _context.next = 11;
                return regeneratorRuntime.awrap(Promise.resolve(posts1));

            case 11:
                result = _context.sent;

            case 12:
            case 'end':
                return _context.stop();
        }
    }, null, this);
}

console.log(myFunction());

//# sourceMappingURL=mongoasync-compiled.js.map