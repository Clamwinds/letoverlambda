var csvjson = require('csvjson');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

csvjson.toArray('/home/lucien/code/javascript/meteor/simple-todos/Hours by job code- grid- 12-1.csv').save('./sample.json');
csvjson.toArray('/home/lucien/code/javascript/meteor/simple-todos/hours by job code- list- 12-1.csv').save('./samplelist.json');
csvjson.toArray('/home/lucien/code/javascript/meteor/simple-todos/hoursbyjobcode12-1.csv').save('./hoursbyjobcode12-1.json');