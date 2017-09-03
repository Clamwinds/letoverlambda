'use strict';

var service = require('./lib/tsheets-service.js');


exports.reportTime = function(params, callback) {
  service.reportTime(params, callback);
};


exports.getTimesheets = function(params, callback) {
  service.getTimesheets(params, callback);
};
