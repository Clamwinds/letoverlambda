/**
 * Created by lucien on 12/22/15.
 */
var tsheets = require('tsheets-client');
var express = require('express');
var http = require('http');
var request = require('request');
var https = require('https');

var timesheetsurl = 'https://rest.tsheets.com/api/v1/reports/payroll';
var api_token2 ='S.2__b373f1ea7eaadb407bbdedb5372b7cd083182be3';
var api_token = 'S.2__31996f2d8c9f3a8c4bbff65fd4d9dee58c14d3a3';
var redirect_uri ='http://107.170.227.164:3000/';
var clientid= 'be8bccbbfca8480fbae0041872f6fee3';

//Oddly enough the rest.api for payroll reports say it has to be a post, whereas the request section says post is for
// creating information and not gettig it, i'll try post first then get
var contenttype = 'application/json';

var start_date ='2015-09-24';
var end_date ='2015-12-22';
var user_ids =[]; //needs to be array of numbers
var page =50; //how many pages, needs to be number
var baseurl ='';
var querystring = require('querystring');


//request.get('https://rest.tsheets.com/api/v1/authorize').auth(null, null, true, api_token2).on('response', function(response){
//    console.log(response.statusCode);
//    console.log(response.headers['code']);

//}).on('body', function(body){
//
//  console.log(body);
//});
var options1 = {
    hostname: 'rest.tsheets.com',
    //some one on stack overflow said don't write http://
    port: 80,
    path: '/api/v1/authorize',
    method: 'GET',
    //auth: api_token2,
    headers: {
        'Content-Type': 'application/json',
//        'Content-Length': postData.length
    }
};

var req1 = http.get(options1, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
        console.log('No more data in response.')
    })
});

req1.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

//I'm just trying to make a valid http.post request to get the data i need
var postData = querystring.stringify({
   // 'msg' : 'Hello World!'
    'start_date': start_date,
    'end_date': end_date,
});

var options = {
    hostname: 'rest.tsheets.com',
    //some one on stack overflow said don't write http://
    port: 443,
    path: '/api/v1/reports/payroll',
    method: 'POST',
    auth: api_token2,
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

var req = https.request(options, function(res) {
    res.send(JSON.stringify(postData));
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
        console.log('No more data in response.')
    })
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();