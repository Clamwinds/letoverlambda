/**
 * Created by lucien on 12/22/15.
 */
var clearbit = require('clearbit');
var clearbit = require('clearbit')('cc79d177da31be03138144382d7a9306');
var openCorporates = require('opencorporates')()


//clearbit.Enrichment.find({email: 'alex@alexmaccaw.com', stream: true})
//    .then(function (response) {
//        var person  = response.person;
//        var company = response.company;

//        console.log('Name: ', person && person.name.fullName);
//        console.log('Company name', company.name && company);
 //   })
  //  .catch(function (err) {
   //     console.error(err);
    //});