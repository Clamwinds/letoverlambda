var fs = require('fs');
var filename = process.argv[2]; //Contains buffer of contents of file
file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);
// I need to count # of new lines and print # of new lines to console
// process.argv[] allows me to pass this command arguments via the command line