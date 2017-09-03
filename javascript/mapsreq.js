var GoogleMapsAPI = require('googlemaps')

var publicConfig = {
  key: 'AIzaSyBwPI-JtzUscv6I1JyekVvG5rlcP6PnVcI',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
 // proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);

// geocode API
// var geocodeParams = {
//   "address":    "3074 Thurman Drive",
//   "components": "components=country:GB",
//   "bounds":     "55,-1|54,1",
//   "language":   "en",
//   "region":     "us"
// };

// var geocodeParams1 = {
//     "address": "809 San Antonio Road"
//     "components": ""
//     "bounds": ""
//     "language": "en"
//     "region": "us"
// }
var params = {
    origins: 'New York, NY, US|Boston, MA, US',
    destinations: 'Los Angeles, CA, US|San Francisco, CA, US',
    departure_time: new Date(),
    mode: 'driving'
   // units: 'imperial',
};

var params1 = {
    origins: '94303',
    destinations: '95122',
    departure_time: new Date(),
    mode: 'driving'

}

// var distancereq = gmAPI.distance(params, function(err, results){
//     //console.log(results.rows.elements);
//     //var a = results.rows;
//     //console.log(a);
//     console.log(results); //oh it prints object because it's a json object
//     var jsonresult = JSON.stringify(results, null, 4);
//    // var jsonresult1 = JSON.parse(results);
//     console.log(jsonresult);
// })

var distancereq1 = gmAPI.distance(params1, function(err, results){
    var jsonresult = JSON.stringify(results, null, 4);
    var plainjson = JSON.stringify(results);
    //var plainjson1 = results.rows[0];
    //var jsonresult1 = JSON.parse(results, null, 4);
    //console.log(jsonresult);
    var durationjson = JSON.stringify(results.rows[0].elements[0].duration.text);
    return durationjson;
})

// distancereq1(function(err, results){
//     console.log(results)
// });

export function getdistance(params1,zipcode1,zipcode2, callback) {
    params1.origins = zipcode1;
    params1.destinations = zipcode2;
    console.log(params1);
    return gmAPI.distance(params1, function(err, results){
        var durationjson = JSON.stringify(results.rows[0].elements[0].duration.text);
        callback(durationjson); // <------ doing callback(durationjson) was what I needed!
  //      console.log(durationjson);
    })
};

getdistance(params1, "94303", "94022", function(results){
    console.log(results);
    //console.log(JSON.stringify(results.rows[0].elements[0].duration.text));
})
//console.log(distancereq1);

