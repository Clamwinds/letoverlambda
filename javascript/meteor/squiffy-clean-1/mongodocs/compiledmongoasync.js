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
var babelpoly = require("babel-polyfill");

var regenerator = require('regenerator');

var foo = co.wrap(regeneratorRuntime.mark(function _callee(zipcode) {
    var zipcodeClass, zipcodeclass, posts1, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
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
                    return Mongorito.connect('localhost/test');

                case 4:
                    _context.next = 6;
                    return zipcodeClass.where('zipcode').in(["94022"]).count();

                case 6:
                    posts1 = _context.sent;
                    _context.next = 9;
                    return Promise.resolve(posts1);

                case 9:
                    result = _context.sent;

                    console.log("This is supposed to be a number:" + posts1);
                    console.log("This is supposed to be a number:" + result);

                    _context.next = 14;
                    return Mongorito.disconnect();

                case 14:
                    return _context.abrupt('return', result);

                case 15:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

function test() {
    var zipcodeClass, zipcodeclass, posts1, result;
    return regeneratorRuntime.async(function test$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                zipcodeClass = Model.extend({
                    collection: 'zipcodes',

                    collection: function collection() {
                        return 'zipcodes';
                    }
                });
                zipcodeclass = new zipcodeClass({
                    zipcode: ["94025", "94027", "94301", "94305", "94303", "94306", "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"]
                });
                _context2.next = 4;
                return regeneratorRuntime.awrap(Mongorito.connect('localhost/test'));

            case 4:
                _context2.next = 6;
                return regeneratorRuntime.awrap(zipcodeClass.where('zipcode').in(["94022"]).count());

            case 6:
                posts1 = _context2.sent;
                _context2.next = 9;
                return regeneratorRuntime.awrap(Promise.resolve(posts1));

            case 9:
                result = _context2.sent;

                console.log("This is supposed to be a number:" + posts1);
                console.log("This is supposed to be a number:" + result);
                _context2.next = 14;
                return regeneratorRuntime.awrap(Mongorito.disconnect());

            case 14:
                return _context2.abrupt('return', result);

            case 15:
            case 'end':
                return _context2.stop();
        }
    }, null, this);
};

//
//foo()
//console.log();

function testing() {
    var a;
    return regeneratorRuntime.async(function testing$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
            case 0:
                _context3.next = 2;
                return regeneratorRuntime.awrap(Promise.all(foo()));

            case 2:
                a = _context3.sent;

                console.log(a);
                console.log(foo);

            case 5:
            case 'end':
                return _context3.stop();
        }
    }, null, this);
};

testing();
//hello().then();
//Promise.then(myFunction())
//console.log(myFunction);
