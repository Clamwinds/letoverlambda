/**
 * Created by lucien on 10/27/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    //
});


var buildingSchema = new mongoose.Schema({
    BuildingName: String,
    ProductionCost: String,
    GeoArea: String,
    Floors: String,
    CarpetFloors: String,
    MarbleFLoors: String,
    BathroomNo: String,
    NumberOfUrinals: String,
    NumberofToilets: String,
    NumberOfBathroomSinks: String,
    TotalRooms: String,
    SqFtRestrooms: String


});

var ecoLabSchema = new mongoose.Schema({
    Name: String,
    Setting: String,
    Price: String,
    CostPerUnit: String,
    YieldPerUnit: String,
    Unit: String,

});

var timeSchema = new mongoose.Schema({
    Person1: String,
    Person2: String,
    Person3: String,
    Person4: String,
    CrewName: String,
    TimePerJob1: String,
    TimePerJob2: String,
    TimePerJob3: String,
    TimePerJob4: String,
});

//we should just have whatever method to scale the person var with the time per var

var BuildingModel = mongoose.model('buildings', buildingSchema);
var EcoLabModel = mongoose.model('ecolab', ecoLabSchema);


// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
BuildingModel.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})


//var buildinginstance = new BuildingModel({ BuildingName: 'Singularity', ProductionCost:'1350' });
//buildinginstance.save();

var productLabInstance = new BuildingModel({
        Name: 'Ultra Concentrated Acid Bathroom Cleaner',
    Setting: 'Low',
    Price: '84.95',
    CostPerUnit: '.221',
    YieldPerUnit: '59',
    Unit: '3 gallon mop',



});
productLabInstance.save();


//var singularitytime =  mongoose.singularitytimesheets.find({
//Building:"Singularity #20", Date:"2015-11-02"
//});

//console.log("blahblah", singularitytime);
console.log(HackerDojo.BuildingName);
var timethismonth = function(time, days){
  // i need to pull the hours in mongo per day, multiply times the hourly
};

// db.buildings.find()