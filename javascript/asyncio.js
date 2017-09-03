/**
 * Created by lucien on 12/8/15.
 */
//Almost the same as previous exercise but we need to use callbacks
// instead of fs.readFileSync() we want to use fs.readFile()

var fs = require('fs');
var filename = process.argv[2];
file = fs.readFile(filename, function(err, data) {
    console.log(data.toString().split('\n').length - 1);

var lines = contents.toString().split('\n').length - 1
console.log(lines)
});

