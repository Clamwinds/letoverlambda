'use strict';

var report_time_task = require('./tasks/report-time.js'),
    remember_user_task = require('./tasks/remember-user.js'),
    show_summary_task = require('./tasks/show-summary.js'),
    jobcodes = require('./jobcodes.js');

var internals = {};


/**
 * Reports time for the current Hubot user.
 *
 * @param {Object} msg Parsed input message.
 * @param {Object} robot_brain Hubot brain, e.g. persistence.
 * @param {Function} callback Invoked with [err, mesage]
 */
exports.reportTime = function(msg, robot_brain, callback) {
  report_time_task.execute(msg, robot_brain, callback);
};


/**
 *
 * @param {Object} msg Message.
 * @param {Function} callback Invoked with [err, jobcodes];
 */
exports.getAllJobcodes = function(msg, callback) {
  callback(null, jobcodes.getAllJobcodes());
};


/**
 * Stores user <-> Tsheets user in persistence.
 * @param {Object} msg Parsed input message.
 * @param {Object} robot_brain Hubot brain.
 * @param {Function} callback Invoked with [err, message].
 */
exports.rememberUser = function(msg, robot_brain, callback) {
  remember_user_task.execute(msg, robot_brain, callback);
};


/**
 * Shows timesheets summary for the specified time period.
 * @param {String} msg Parsed input message.
 * @param {Object} robot_brain Hubot brain.
 * @param {Function} callback Invoked with [err, message].
 */
exports.showSummary = function(msg, robot_brain, callback) {
  show_summary_task.execute(msg, robot_brain, callback);
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
