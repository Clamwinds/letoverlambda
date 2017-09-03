var koa = require('koa')();
var router = require('koa-router')();
var app = require('koa')();
mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/test');
mongoUrl = '127.0.0.1:27017'
//mongoose.connect(mongoUrl);
var db = mongoose.connection;
/*** Created by calmwinds on 1/3/16.*/
var Mongo = require('mongodb');
var co = require('co');
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
var obj = json.parse(fs.readFileSync('package.json').toString());
var GoogleMapsAPI = require('googlemaps')

var publicConfig = {
    key: 'AIzaSyBwPI-JtzUscv6I1JyekVvG5rlcP6PnVcI',
    stagger_time:       1000, // for elevationPath
    encode_polylines:   false,
    secure:             true, // use https
    // proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);

var params1 = {
    origins: '94303',
    destinations: '95122',
    departure_time: new Date(),
    mode: 'driving'

}
function getdistance(params1, zipcode2, callback) {
   // params1.origins = zipcode1;
    params1.destinations = zipcode2;
    return gmAPI.distance(params1, function(err, results){
        var durationjson = JSON.stringify(results.rows[0].elements[0].duration.text);
        callback(durationjson); // <------ doing callback(durationjson) was what I needed!
              console.log(durationjson);
    })
};

db.once('open', function() {
    console.log(" we're connected!");
});
var customerSchema = mongoose.model('customers', new mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    emailnotification: String,
    zipcode: String,
    zipcodetime: String,
    address: String,
    menuoptions: String,
    sqft: String,
    monthlyschedule: String,
    buildingnumber: String,

}));

var menuSchema = mongoose.model('menu', new mongoose.Schema({
    email: String,
    buildings : {
        bldgname : String,
        numofdays : String,
        zipcode: String,
        numofdays: String,
        sqft: String,
    }
}))

//JSON.stringify(dataForBackend):{"emailAddr":"finalsilence@gmail.com","buildings":[{"bldgName":"Building 1","zipCode":"","numOfDays":"1","sqft":"4000"}]}
function zipcodecheck(zipcodestring){
    //zipcodestring = ""+zipcodestring.input;
    
    //zipcodestring = JSON.parse(zipcodestring);
    zipcodestring = zipcodestring.zipcode + "";
    console.log("ZIPCODe STRING IS THIS"+ zipcodestring.zipcode);
    validzipcodes =  ["94025", "94027", "94301", "94305", "94303", "94306",
        "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"];

    //console.log(validzipcodes);
    // check if a string matches another using index of
    var findstring = validzipcodes.indexOf(zipcodestring);
    if(findstring > 0){
       // var returnstring = '"zipcodecheck":"You have given a valid zipcode"';
        var returnstring = {"zipcodecheck": "true"}
        return returnstring;
    }
    else{
        //var returnstring = '"zipcodecheck": "You have given an invalid zipcode"';
        var returnstring = {"zipcodecheck": "false"}
        return returnstring;
    }
};

function mailcheckemail(emailstring){

    var suggestedstring = "";
    var suggesteddomain = "";
    mailcheck.run({
        email: emailstring,

        suggested: function( suggestion) {
            suggestedstring = suggestion.full;
            suggesteddomain = suggestion.domain;
            //return suggesteddomain;
        },
        empty: function() {
            suggesteddomain = emailstring.replace(/.*@/, "");
        }
    });
    return suggesteddomain;
};
//splitEmail("finalsilence@gmail.com");
function privateemail(emailstring){
    var domainpart = mailcheckemail(emailstring);
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
    var findstring = domains.indexOf(domainpart);
    if(findstring > 0){
        var returnstring = '"emailcheck": "Sorry we require a corporate email"';
        return returnstring;
    }
    else{
        var returnstring = '"emailcheck": "This is a valid corporate email"';
        return returnstring;
    }

}
//var a =privateemail("finalsilence@gmail.com");
//console.log(a);
function emailstructure (emailstring){
  var booleanresult = validator.isEmail(emailstring);
    if(booleanresult = true){
        var emailstructure = '"emailstructure":"valid email structure"';
        return emailstructure;
    }
    else{
        emailstructure = '"emailstructure": "invalid email structure"';
        return emailstructure;
    }
}
function stringtojson(){}
function allinone(emailstring, zipcodestring){
    var a = privateemail(emailstring);
    var b = zipcodecheck(zipcodestring);
    var c = json.stringify(a+","+b);
  //  console.log(c);
    return c
}

function pricing(sqrfeet){

}

//var d = allinone("finalsilence@corporate.com", "94022");
//console.log(d);
router.get('/api/customerinput', function* (){
    this.body = 'response here';
})


function* addcust(email, fname, lname, emailnotification, zipcode,zipcodetime, address, menuoptions, sqft, monthlyschedule, buildingnumber){
    var customerschema = new customerSchema();
    customerschema.email = email;
    customerschema.fname = fname;
    customerschema.lname = lname
    customerschema.emailnotification = emailnotification;
    customerschema.zipcode = zipcode;
    customerschema.zipcodetime = zipcodetime;
    customerschema.address = address;
    customerschema.menuoptions = menuoptions;
    customerschema.sqft = sqft;
    customerschema.monthlyschedule = monthlyschedule;
    customerschema.buildingumber = buildingnumber;
    yield customerschema.save();
};
var zipcode ="95148";
var zipcodeInput;
var sqft="1000"
var zipcodeInput;
var buildingnumber="3";
var number="2";
var frequency;
var freqnum = "5";
var zipcodetime = "";
var jsondata = {zipcodeinput: zipcode, sqftInput: sqft, frequency: freqnum, buildingnumber: number}
var axeldata = JSON.stringify({"emailAddr":"finalsilence@gmail.com","buildings":[{"bldgName":"Building 1","zipCode":"95148","numOfDays":"1","sqft":"4000"}]})
console.log(axeldata);
bodyParser = require('koa-body-parser')
function* menu(parameter){
    var menuschema = new menuSchema();
    parameter1 = JSON.parse(parameter);
    menuschema.email = parameter1.emailAddr;
    menuschema.buildings.bldgname = parameter1.buildings[0].bldgName;
     menuschema.buildings.zipcode = parameter1.buildings[0].zipCode;
     menuschema.buildings.numofdays = parameter1.buildings[0].numOfDays;
     menuschema.buildings.sqft = parameter1.buildings[0].sqft;
    yield menuschema.save();
}

router.get('/api/menu/', function* (){

    var menuschema1 = new menuSchema();
    yield* menu(axeldata);
    var menufind = yield menuSchema.find({});
    this.body = menufind;
})

router.post('/senddata_api', function* (){
    this.response.body = this.request.body;
  //  console.log(this.response.body);
    //console.log(this.request.body);
    body = this.request.body
    //body1 = this.response.body;
    console.log(body);
  //  console.log(body1);
    b = JSON.stringify(this.request.body)
    //console.log(b);

    yield* menu(b);

    console.log(yield menuSchema.find({}))
})

router.post('/zipcode_api', function* (){
    //this.response.body = this.request.body
    b = this.request.body;
    //b = JSON.stringify(b);
    console.log("THIS IS THE  API REQUEST NONSTRINGIFIED:" +b);
    zipresult = zipcodecheck(b);
    //d = JSON.parse(d);
//    zipresult = {zipresult};
    this.response.body = zipresult;
    //console.log(d);
    console.log("THIS IS THE RESULT OF ZIPCODE CHECK FUNCTION APPLICATION: " + zipresult);
})


function recievedjson(jsonparam){
    var b =jsonparam.zipcodeinput;
    var a =JSON.stringify(jsonparam);
}


function promisegetdistance(params1, zipcode2){
    params1.destinations = zipcode2;
    return new Promise( function(resolve, reject){
    gmAPI.distance(params1, function(err, results){
        //console.log(results);
        var durationjson = JSON.stringify(results.rows[0].elements[0].duration.text);
        resolve(durationjson)
        if(err != null) return reject(err);
    })
    })

}
var koa = require('koa');
var app = koa();
//app.use(require('koa-static')(root));

function getprice(sqft, zipcode, effectivedays){
    var arraysqft = [10000,14500,15000,16000,19000,20000,24000,25000,29000,30000,35000,40000,45000,100000]
    var arraymonthly =[1863,2448.37,3048.51,3094.27,3394,3694,3694,4294.55,4294.55,5548,5747,6388,7280,7280,14609]

    n = arraymonthly.length;
    for(i=0;i < arraymonthly.length; i++){
        effectivedays[i] = arraymonthly[i]/20;
        console.log(effectivedays);
    }

}


promisegetdistance(params1, "94022").then(function(value){

})

const mount = require('koa-mount');
var serve = require('koa-static');
var views = require('koa-views');
var render = require('koa-ejs');
var path = require('path');

app.use(serve('./squiffy'));
app.use(serve('./squiffy/img', {maxage: 5 * 60 * 1000}));


//Render (app, {
//     root: path.join(__dirname, '/squiffy'),
//     layout: 'pricing',
//     viewExt: 'html',
//     cache: false,
//     debug: true
// });

// app.use(function *() {
//     yield this.render('pricing');
// });

// app.listen(7001);

//Must be used before any router is used
// app.use(views(__dirname + '/squiffy', {
//     map: {
//         html: 'swig'
//     }
// }));

// app.use(function* (next) {
//     this.state = {
//         session: this.session,
//         title: 'app'
//     };

//     yield this.render('/pricing', {
       
//     });
// });
// app.use(mount('/squiffy1/', function*() {
//     this.body = 'Hello, foo'; }));



//app.use(serve('assets', '/home/lucien/code/javascript/meteor/squiffy-clean/squiffy1'));
// app.use(function* (next) { this.body = 'Hello, world'; });
//app.use(require('koa-static')('/squiffy1'));
router.get('/api/addcustomer', function* (){

    var customerschema = new customerSchema();
    yield* addcust("genius@gmail.com", "randomperson221", "lastname","yes", "95122","approxtime", "forgot", "menu", "1000", "1", "5", "2");
    yield* addcust("finalsilence@gmail.com", "Ricky", "Saini", "yes", "95148","approxtime", "3074 Thurman Drive", "yes","2500", "2", "2");
    var customerschemafind = yield customerSchema.find({});
    this.body = customerschemafind;
    //console.log(customerscemafind);
});
app.use(bodyParser());
app
    .use(router.routes())
    .use(router.allowedMethods());
//above just uses koa-router's route system as opposed to using app.use in a gen function and writing the
// code yourself.

// Define configurable port
var port = process.env.PORT || 3000;

// Listen for connections
app.listen(port);

// Log port
console.log('Server listening on port ' + port);


