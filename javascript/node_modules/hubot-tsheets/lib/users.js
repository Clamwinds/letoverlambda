'use strict';

var internals = {
  tsheetsUserIdsByUsernameFromFile: require('../config/default_users.json'),
  BRAIN_USERS_KEY: 'tsheetsUserIdsByHubotUsername'
};


/**
 * @param {String} username Username known by Hubot.
 * @param {Object} robot_brain A reference to the Hubot's "brain"
 * @return {Number} Tsheets user ID of the matching user
 * @throws Error if user doesn't exist
 */
exports.getTsheetsUserId = function(username, robot_brain) {
  var user_id;

  if (robot_brain) {
    user_id = internals.getUserFromBrain(robot_brain, username);
  }
  else {
    user_id = internals.tsheetsUserIdsByUsernameFromFile[username];
  }

  if (!user_id) {
    throw new Error('No TSheets user mapped to username=' + username);
  }

  return user_id;
};


/**
 * Stores the provided user <-> tsheets mapping in persistence.
 * @param {Object} robot_brain The Hubot brain.
 * @param {String} hubot_username Username known by Hubot.
 * @param {Number} tsheets_user_id ID of Tsheets user.
 */
exports.rememberUser = function(robot_brain, hubot_username, tsheets_user_id) {
  var user_ids_by_username = robot_brain.get(internals.BRAIN_USERS_KEY);
  if (!user_ids_by_username) {
    user_ids_by_username = {};
  }

  user_ids_by_username[hubot_username] = parseInt(tsheets_user_id, 10);
  robot_brain.set(internals.BRAIN_USERS_KEY, user_ids_by_username);
};


internals.getUserFromBrain = function(robot_brain, hubot_username) {
  var user_ids_by_username = robot_brain.get(internals.BRAIN_USERS_KEY);
  if (!user_ids_by_username) {
    return undefined;
  }

  return user_ids_by_username[hubot_username];
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
