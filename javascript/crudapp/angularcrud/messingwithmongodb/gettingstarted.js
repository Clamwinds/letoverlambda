/**
 * Created by lucien on 10/20/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

//The first thing we need to do is include mongoose in
// our project and open a connection to the test database on our locally
// running instance of MongoDB.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // issue error if not connected
});

var Kitten = mongoose.model('Kitten', kittySchema);

//We've got a schema with one property, name,
// which will be a String. The next step is compiling our schema into a Model.
var silence = new Kitten({ name: 'Silence'});
console.log(silence.name); // 'Silence'
