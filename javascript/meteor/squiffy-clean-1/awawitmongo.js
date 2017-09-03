var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var db = await (mongodb.MongoClient.connect('mongodb://127.0.0.1/test'));

import MongoDB from 'mongodb'
async function findeveryone(db){
    const timesheet = db.collection('timesheet');
    const everyone = await people.find().toArrayAsync();
    return everyone.map( x => x.name);
}

console.log(everyone);
// (async function run() {
//     try {
//         var db = await MongoDB.MongoClient.connectAsync('mongodb://localhost/test')
//         const everyone = await findEveryone(db)
//         console.log(everyone)
//     } catch (e) {
//         console.log('Something went wrong', e)
//     } finally {
//         db && db.close()
//     }
// })()
