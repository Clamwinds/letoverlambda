ps = require('path');


var fs = require('fs');
var pathname = process.argv[2];
var ext = process.argv[3];

var pat = RegExp('\\.' + ext + '$');
//var filterext = ps.extname(list)
file = fs.readdir(pathname, function(err, list){

         



for (i = 0; i < list.length; i++) {
if ( pat.test(list[i])) {
console.log(list[i])
} 
}





});





// Need to create a program that prints a list of files in a given directory filtered by
// the filename extension, we will be provided the directory name and a file extension to
// filter as the second argument

// the desiredextension var has the desired extension to filter by 
// so print out the files in that directory, that have a specific file extension, 
// first it would be easier if we just printed the entire directory
// now remove from the list anything that isn't md, or only print md i guess


// I already have the list of file names, now all I need to do is remove the ones w/o md
// Either I
// I decided to count the amount of time .md shows up and use that as my .split() filter
// jk that doesnt work cause the desired file extension can show up in any order
// I really hope I do not have to use the actual index positions using indexof() and lastIndexf()

// nvm thats not gonna work, actually i just checked the solutions, i had to just standard 
// loop, ah my programming skills are rusty
// They used regexps anyways