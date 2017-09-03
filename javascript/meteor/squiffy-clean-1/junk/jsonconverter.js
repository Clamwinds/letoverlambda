//Converter Class
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (jsonArray) {
    console.log(jsonArray); //here is your result jsonarray
});

//read from file
require("fs").createReadStream("/home/lucien/code/javascript/meteor/simple-todos/hours_by_full_job_code_2015-11-16_thru_2015-11-30.csv").pipe(converter);




node_xj = require("xls-to-json");
node_xj({
    input: "/home/lucien/code/javascript/meteor/simple-todos/hoursbyjobcode12-1.xls", // input xls

    output: "hoursbyjobcode.json" // output json
   // sheet: "sheetname",  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

node_xj1 = require("xls-to-json");
node_xj1({
    input: "/home/lucien/code/javascript/meteor/simple-todos/Building 556 data Nov 16.xls", // input xls

    output: "singularity556.json" // output json
    // sheet: "sheetname",  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

node_xj2 = require("xls-to-json");
node_xj2({
    input: "/home/lucien/code/javascript/meteor/simple-todos/Building 583 Data Entries Nov 14.xls", // input xls

    output: "singularity583.json" // output json
    // sheet: "sheetname",  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

