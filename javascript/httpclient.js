var http = require('http');
var url = process.argv[2];


var bl = require('bl');

http.get(url, function(response)
{
    response.setEncoding('utf8');
var bl1 = response.pipe( bl(function(err, data)
 {


     //console.log(bl.length);
     //bl.append(data);
     console.log(data.length)
     console.log(data.toString('utf8'));


    //console.log(bl.toString('utf8'));

 }))




});