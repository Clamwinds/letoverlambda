'use strict';

var internals = {
  tsheetsJobcodeIdsByShortName: require('../config/jobcodes.json')
};


/**
 * @param {String} jobcode Jobcode name/description.
 * @return {Number} ID matching TSheets
 */
exports.getJobCodeIdFromShortName = function(jobcode) {
  return parseInt(internals.tsheetsJobcodeIdsByShortName[jobcode], 10);
};


/**
 * Returns all job codes.
 * @return {Array} All job codes as array.
 */
exports.getAllJobcodes = function() {
  return Object.keys(internals.tsheetsJobcodeIdsByShortName);
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
