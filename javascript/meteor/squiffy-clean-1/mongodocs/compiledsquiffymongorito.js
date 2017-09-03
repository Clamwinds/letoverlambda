'use strict';

/*** Created by calmwinds on 1/3/16.*/
var co = require('co');
var mongorito = require('mongorito');
var Mongorito = require('mongorito');
var Model = Mongorito.Model;
//var monk = require('monk');
//var wrap = require('co-monk');
//var Promise = require('bluebird');
var string = "94022";
//Robe = require('robe');
var debug = require('debug')('http'),
    http = require('http'),
    name = 'My App';
var babelpoly = require("babel-polyfill");

function overheard(result1) {
    return co(regeneratorRuntime.mark(function _callee() {
        var zipcodeClass, zipcodeclass, a, posts1, result;
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
                        a = _context.sent;
                        _context.next = 7;
                        return zipcodeClass.where('zipcode').in([result1]).limit(1).count();

                    case 7:
                        posts1 = _context.sent;

                        console.log(posts1);
                        _context.next = 11;
                        return Mongorito.disconnect();

                    case 11:
                        result = posts1;
                        // var result = yield Promise.resolve(posts1);
                        //console.log(result);

                        return _context.abrupt('return', result);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    })).then(function (result) {
        if (result == 1) {
            var str = "This is a valid zipcode";
            Promise.accept(str);
        } else {
            var str = "Invalid zipcode";
            Promise.reject(str);
        }

        console.log(result);
    }, function (err) {

        console.error(err.stack);
    }).then(function (str) {
        console.log(str);
    });
}

//console.log(overheard("94022"));
co(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.t0 = console;
                    _context2.next = 3;
                    return overheard("94022");

                case 3:
                    _context2.t1 = _context2.sent;

                    _context2.t0.log.call(_context2.t0, _context2.t1);

                case 5:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));

function doAsyncOp(x) {
    var val;
    return regeneratorRuntime.async(function doAsyncOp$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
            case 0:
                _context3.next = 2;
                return regeneratorRuntime.awrap(x);

            case 2:
                _context3.t0 = _context3.sent;
                _context3.t1 = x;
                val = _context3.t0 * _context3.t1;
                return _context3.abrupt('return', val);

            case 6:
            case 'end':
                return _context3.stop();
        }
    }, null, this);
}

//console.log(overheard);
//var a = run("94022");

//    run("94024242424")
//run("94022");
//var a = run("94022");
//console.log(a);

//var value = fn(5).then(function (val) {
//console.log(val);
//    return val;
//});
//(fn(5));

//console.log(fn1(100));
//console.log(value);
// Ok as far as I understand it this is the only way to access the result of a promise

//console.log(value.then(5));
//console.log(fn(100).then());
//console.log(squared(2));
//run("94022");
//run("94022").then(function()).then();
// var var1 = yield zipcodeClass.where('zipcode.', '94022').find();
//Doing .find().count() gave me a process
// that ran forever, but merely doing .count() did not

// I need to return a string based on if it finds the relevant string inside the zipcode document
//Now we are going to find all posts in the database. The returned array contains documents wrapped into Post model.

// yield console.log(var1);
// returns one
//   console.log(typeof(posts1));
