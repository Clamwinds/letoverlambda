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
var globalstore = 0;
var validator = require('validator');
var emailstring;
var domains = [
    /* Default domains included */
    "aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com",
    "google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com",
    "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk",

    
    /* Other global domains */
    "email.com", "games.com" /* AOL */, "gmx.net", "hush.com", "hushmail.com", "icloud.com", "inbox.com",
    "lavabit.com", "love.com" /* AOL */, "outlook.com", "pobox.com", "rocketmail.com" /* Yahoo */,
    "safe-mail.net", "wow.com" /* AOL */, "ygm.com" /* AOL */, "ymail.com" /* Yahoo */, "zoho.com", "fastmail.fm",

    /* United States ISP domains */
    "bellsouth.net", "charter.net", "comcast.net", "cox.net", "earthlink.net", "juno.com",

    /* British ISP domains */
    "btinternet.com", "virginmedia.com", "blueyonder.co.uk", "freeserve.co.uk", "live.co.uk",
    "ntlworld.com", "o2.co.uk", "orange.net", "sky.com", "talktalk.co.uk", "tiscali.co.uk",
    "virgin.net", "wanadoo.co.uk", "bt.com",

    /* Domains used in Asia */
    "sina.com", "qq.com", "naver.com", "hanmail.net", "daum.net", "nate.com", "yahoo.co.jp", "yahoo.co.kr", "yahoo.co.id", "yahoo.co.in", "yahoo.com.sg", "yahoo.com.ph",

    /* French ISP domains */
    "hotmail.fr", "live.fr", "laposte.net", "yahoo.fr", "wanadoo.fr", "orange.fr", "gmx.fr", "sfr.fr", "neuf.fr", "free.fr",

    /* German ISP domains */
    "gmx.de", "hotmail.de", "live.de", "online.de", "t-online.de" /* T-Mobile */, "web.de", "yahoo.de",

    /* Russian ISP domains */
    "mail.ru", "rambler.ru", "yandex.ru", "ya.ru", "list.ru",

    /* Belgian ISP domains */
    "hotmail.be", "live.be", "skynet.be", "voo.be", "tvcablenet.be", "telenet.be",

    /* Argentinian ISP domains */
    "hotmail.com.ar", "live.com.ar", "yahoo.com.ar", "fibertel.com.ar", "speedy.com.ar", "arnet.com.ar",

    /* Domains used in Mexico */
    "hotmail.com", "gmail.com", "yahoo.com.mx", "live.com.mx", "yahoo.com", "hotmail.es", "live.com", "hotmail.com.mx", "prodigy.net.mx", "msn.com"
];

var mailcheck = require('mailcheck'); //this is used for spelling suggestions for common domains

var zipcodecheck = co.wrap(function* (zipcodestring){
    var zipcodeClass = Model.extend({
        collection: 'zipcodes',

        collection: function () {
            return 'zipcodes';
        }
    });
    var zipcodeclass = new zipcodeClass({
        zipcode: ["94025", "94027", "94301", "94305", "94303", "94306",
            "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"]
    });

        yield Mongorito.connect('localhost/test');

    var posts1 = yield (zipcodeClass.where('zipcode').in([zipcodestring]).count());
    globalstore = yield Promise.resolve((post1));
    var result = yield (Promise.resolve( (posts1)));
    console.log("This is supposed to be a number:"+ posts1);
    console.log("This is supposed to be a number:"+ result);

    yield (Mongorito.disconnect());
    return result;
});

var validemail = co.wrap(function* (emailstring){

    var strippedstring;
    var regularEmails = Model.extend({
        collection: "emails",

        collection: function () {
            return 'emails';
        }
    });

    var regularemails = new regularEmails({
        regular: ["gmail", "yahoo", "hotmail"]
    });

    yield Mongorito.connect('localhost/test');
    var emailcount = yield regularemails.where('emails').in([emailstring])
});

var nonmongoemail = function(emailstring){
    var booleanresult = validator.isEmail(emailstring);
    console.log(booleanresult);

};
nonmongoemail("finalsilence@gmail.com");
zipcodecheck("94022");
console.log(globalstore);
