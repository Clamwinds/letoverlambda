/**
 * Created by calmwinds on 1/4/16.
 */

var Mongorito = require('mongorito');
var co = require('co');
var Model = Mongorito.Model;
var string = "94022";

//var foo = async (function() {
//   var resultA = await (firstAsyncCall());
//   var resultB = await (secondAsyncCallUsing(resultA));
//   var resultC = await (thirdAsyncCallUsing(resultB));
//   return doSomethingWith(resultC);
//});

var fool = async(function () {
    var zipcodeClass = Model.extend({
        collection: 'zipcodes',

        collection: function () {
            return 'zipcodes';
        }
    });
    var zipcodeclass = new zipcodeClass({
        zipcode: ["94025", "94027", "94301", "94305", "94303", "94306", "94306", "94085", "94043", "94035", "94041", "94040", "94022", "94049", "94086"]
    });
    var resultA = await(Mongorito.connect('localhost/test'));
    var posts1 = await(zipcodeClass.where('zipcode').in(["94022"]).count());
    var resultB = await(Mongorito.disconnect());
    var result = await(Promise.resolve(posts1));
    return result;
});

fool();
