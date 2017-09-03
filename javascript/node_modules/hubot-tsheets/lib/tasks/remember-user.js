'use strict';

var users = require('../users.js');

var internals = {};

exports.execute = function(msg, robot_brain, callback) {
  // TODO: parse and validate input
  var input_params,
      response_message;

  try {
    input_params = internals.convertInputMessageToParams(msg);
  }
  catch (e) {
    setImmediate(callback, e);
    return;
  }

  users.rememberUser(robot_brain, input_params.username, input_params.tsheets_user_id);

  response_message = internals.createResponseMessage(input_params.username,
      input_params.tsheets_user_id);

  callback(null, response_message);
};


internals.createResponseMessage = function(username, user_id) {
  return username + ' saved as ' + user_id;
};


internals.convertInputMessageToParams = function(msg) {
  var username = msg.message.user.name.toLowerCase(),
      tsheets_user_id = parseInt(msg.match[1], 10);

  return {
    username: username,
    tsheets_user_id: tsheets_user_id
  };
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
