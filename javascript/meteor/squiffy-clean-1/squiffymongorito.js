
/*** Created by calmwinds on 1/3/16.*/
var Mongo = require('mongodb');
var Mongorito = require('mongorito');
var Model = Mongorito.Model;
var co = require('co');
<<<<<<< HEAD
//var mongorito = require('mongorito');
const Mongorito = require('mongorito');
const Model = Mongorito.Model;



var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var babelpoly = require("babel-polyfill");
var validator = require('validator');
var emailstring;
var regenerator = require('regenerator');
var mailcheck = require('mailcheck');
var Mailcheck = require('mailcheck');
var domains = ['gmail.com', 'aol.com'];
var json = require('comment-json');
var fs = require('fs');
var obj = json.parse(fs.readFileSync('package.json').toString(
nonasynczipcode = function(zipcodestring){
    validzipcodes =  ["94025", "94027", "94301", "94305", "94303", "94306",
        "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"];

    //console.log(validzipcodes);
    // check if a string matches another using index of
    var findstring = validzipcodes.indexOf(zipcodestring);
    if(findstring > 0){
        var returnstring = "You have given a valid zipcode";
        return returnstring;
    }
    else{
        var returnstring = "You have given an invalid zipcode";
        return returnstring;
    }
};

var nonmongoemail = function(emailstring){
    var booleanresult = validator.isEmail(emailstring);
    mailcheck.run({
        email: emailstring, //wow, it was the .value that needed to be absent
        // domains: domains,                       // optional
        // topLevelDomains: topLevelDomains,       // optional
        // secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance,  // optional
        suggested: function( suggestion) {
            // callback code
            console.log(suggestion);
            console.log("Did you mean?" + suggestion.full);
        },
        empty: function() {
            // callback code
            //console.log(typeof(suggestion));
            //  console.log("this is the empty column: " +suggestion);
        }
    });
    if(booleanresult = true)
    {
        console.log("This email string structure is valid");
    }
    else{
        console.log("This email string structure is invalid");
    }
};
var pushcontact = function(contactinfo){
    var parsedcontactinfo = json.parse(contactinfo.toString());
    var obj = json.parse(fs.readFileSync('package.json').toString());
    //push the parsed json contact info to our mongodb associated w/ a mongodb

};
var totalaxel = function(emailstring, zipcode, emailnotification, contactinfo)
{
    //mailcheck("test@gnail.com");
    nonmongoemail("finalsilence@gnail.con"); //gives suggest email
    //zipecodecheck("94022"); //checks if zipcode is in mongodb
    nonasynczipcode("94022");
    console.log(nonasynczipcode("94022"));
    //overheard("95148");

}
nonasynczipcode = function(zipcodestring){
    validzipcodes =  ["94025", "94027", "94301", "94305", "94303", "94306",
        "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"];

    //console.log(validzipcodes);
    // check if a string matches another using index of
    var findstring = validzipcodes.indexOf(zipcodestring);
    if(findstring > 0){
        var returnstring = "You have given a valid zipcode";
        return returnstring;
    }
    else{
        var returnstring = "You have given an invalid zipcode";
        return returnstring;
    }
};

var nonmongoemail = function(emailstring){
    var booleanresult = validator.isEmail(emailstring);
    mailcheck.run({
        email: emailstring, //wow, it was the .value that needed to be absent
        // domains: domains,                       // optional
        // topLevelDomains: topLevelDomains,       // optional
        // secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance,  // optional
        suggested: function( suggestion) {
            // callback code
            console.log(suggestion);
            console.log("Did you mean?" + suggestion.full);
        },
        empty: function() {
            // callback code
            //console.log(typeof(suggestion));
            //  console.log("this is the empty column: " +suggestion);
        }
    });
    if(booleanresult = true)
    {
        console.log("This email string structure is valid");
    }
    else{
        console.log("This email string structure is invalid");
    }
};
var pushcontact = function(contactinfo){
    var parsedcontactinfo = json.parse(contactinfo.toString());
    var obj = json.parse(fs.readFileSync('package.json').toString());
    //push the parsed json contact info to our mongodb associated w/ a mongodb

};
var totalaxel = function(emailstring, zipcode, emailnotification, contactinfo)
{
    //mailcheck("test@gnail.com");
    nonmongoemail("finalsilence@gnail.con"); //gives suggest email
    //zipecodecheck("94022"); //checks if zipcode is in mongodb
    nonasynczipcode("94022");
    console.log(nonasynczipcode("94022"));
    //overheard("95148");

};


nonasynczipcode = function(zipcodestring){
    validzipcodes =  ["94025", "94027", "94301", "94305", "94303", "94306",
        "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"];

    //console.log(validzipcodes);
    // check if a string matches another using index of
    var findstring = validzipcodes.indexOf(zipcodestring);
    if(findstring > 0){
        var returnstring = "You have given a valid zipcode";
        return returnstring;
    }
    else{
        var returnstring = "You have given an invalid zipcode";
        return returnstring;
    }
};

var nonmongoemail = function(emailstring){
    var booleanresult = validator.isEmail(emailstring);
    mailcheck.run({
        email: emailstring, //wow, it was the .value that needed to be absent
        // domains: domains,                       // optional
        // topLevelDomains: topLevelDomains,       // optional
        // secondLevelDomains: secondLevelDomains, // optional
        // distanceFunction: superStringDistance,  // optional
        suggested: function( suggestion) {
            // callback code
            console.log(suggestion);
            console.log("Did you mean?" + suggestion.full);
        },
        empty: function() {
            // callback code
            //console.log(typeof(suggestion));
            //  console.log("this is the empty column: " +suggestion);
        }
    });
    if(booleanresult = true)
    {
        console.log("This email string structure is valid");
    }
    else{
        console.log("This email string structure is invalid");
    }
};
var pushcontact = function(contactinfo){
    var parsedcontactinfo = json.parse(contactinfo.toString());
    var obj = json.parse(fs.readFileSync('package.json').toString());
    //push the parsed json contact info to our mongodb associated w/ a mongodb

};
var totalaxel = function(emailstring, zipcode, emailnotification, contactinfo)
{
    //mailcheck("test@gnail.com");
    nonmongoemail("finalsilence@gnail.con"); //gives suggest email
    //zipecodecheck("94022"); //checks if zipcode is in mongodb
    nonasynczipcode("94022");
    console.log(nonasynczipcode("94022"));
    //overheard("95148");

};
//"So, the general idea is to write the code which
// depends on the return value of an async function, in the async function itself."
//.then(function (result) {
   // if (result == 1) {
    //    var str = "This is a valid zipcode"
   //     Promise.accept(str);
  //  }
 //   else {
 //       var str = "Invalid zipcode"
 //       Promise.reject(str);
 //   }
//
//    console.log(result);
//}, function (err) {
//
//    console.error(err.stack);
//}).then(function (str) {
 //   console.log(str);
//});

//console.log(overheard("94022"));
//



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
