var fs = require('fs');

var mongoose = require('mongoose');
var generator = require('mongoose-gen');

// load json
var data = fs.readFileSync('./book.json', {encoding: 'utf8'});
var bookJson = JSON.parse(data);

// In the above _book.json_ file there is a `validateBookYear` token.
// mongoose-gen uses this token to lookup an actual validator function which
// should be registered beforehand. This is how to register validators.
generator.setValidator('validateBookYear', function (value) {
    return (value <= 2015);
});

// Generate the Schema object.
var BookSchema = new mongoose.Schema(generator.convert(bookJson));

// Connect to mongodb and bind the book model.
mongoose.connect('mongodb://localhost/test');
var BookModel = mongoose.model('Book', BookSchema);
