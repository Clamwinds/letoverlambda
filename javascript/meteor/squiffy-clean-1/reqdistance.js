var GoogleMapsAPI = require('googlemaps')

var publicConfig = {
  key: 'AIzaSyBwPI-JtzUscv6I1JyekVvG5rlcP6PnVcI',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
 // proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);

var params1 = {
    origins: '94303',
    destinations: '95122',
    departure_time: new Date(),
    mode: 'driving'

}
function getdistance(params1,zipcode2, callback) {
    params1.destinations = zipcode2;
    console.log(params1);
    return gmAPI.distance(params1, function(err, results){
        var durationjson = JSON.stringify(results.rows[0].elements[0].duration.text);
        callback(durationjson); // <------ doing callback(durationjson) was what I needed!
  //      console.log(durationjson);
    })
};

getdistance(params1, "94022", function(results){
    console.log(results);
    //console.log(JSON.stringify(results.rows[0].elements[0].duration.text));
})
//console.log(distancereq1);

