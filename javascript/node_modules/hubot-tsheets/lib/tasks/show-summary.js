'use strict';

var util = require('util');

var moment = require('moment'),
    tsheets = require('tsheets-client'),
    hoek = require('hoek');

var internals = {
  DATE_FORMAT: 'YYYY-MM-DD',
  TSHEETS_API_TOKEN: process.env.HUBOT_TSHEETS_API_CLIENT_TOKEN
};


exports.execute = function(msg, robot_brain, callback) {
  var msg_params,
      req_params;

  try {
    msg_params = internals.convertMsgToParams(msg);
    req_params = internals.createParamsForGetTimesheets(msg_params, robot_brain);
  }
  catch (e) {
    setImmediate(callback, e);
    return;
  }

  internals.getTimesheetsSummary(req_params, function(err, summary) {
    var message;
    if (err) {
      callback(err, null);
      return;
    }

    message = internals.convertSummaryToMessage(msg_params.start_date,
        msg_params.end_date,
        summary);
    callback(null, message);
  });
};


internals.convertMsgToParams = function(msg) {
  var input_params,
      input,
      start_date,
      end_date;

  if (msg.match && msg.match[1]) {
    input = msg.match[1];
    input_params = input.split(' ').filter(Boolean);

    if (input_params.length) {
      start_date = moment(input_params[0]);

      if (input_params[1]) {
        end_date = moment(input_params[1]);
      }
      else {
        end_date = start_date.clone().add(6, 'day');
      }
    }
  }

  if (!start_date || !end_date) {
    start_date = moment().startOf('week');
    end_date = moment().endOf('week');
  }

  return {
    start_date: start_date,
    end_date: end_date
  };
};


internals.createParamsForGetTimesheets = function(params) {
  return {
    api_token: internals.TSHEETS_API_TOKEN,
    start_date: params.start_date.format(internals.DATE_FORMAT),
    end_date: params.end_date.format(internals.DATE_FORMAT)
  };
};


internals.getTimesheetsSummary = function(req_params, callback) {
  internals.getAllTimesheetsFromApi(req_params, function(err, json) {
    var summary;
    if (err) {
      callback(err, null);
      return;
    }

    try {
      summary = internals.transformApiResponseToSummary(json);
    }
    catch (e) {
      callback(e, null);
      return;
    }

    callback(null, summary);
  });
};


internals.getAllTimesheetsFromApi = function(req_params, callback) {
  var merged_response = {},
      start_page = 1;

  function getTimesheetsPage(page) {
    req_params.page = page;

    internals.getTimesheetsFromApi(req_params, function(err, json) {
      if (err) {
        callback(err, null);
        return;
      }

      if (Array.isArray(json.results.timesheets) && json.results.timesheets.length === 0) {
        callback(null, merged_response);
      }
      else {
        merged_response = hoek.merge(merged_response, json);
        getTimesheetsPage(page + 1);
      }
    });
  }

  getTimesheetsPage(start_page);
};


internals.getTimesheetsFromApi = function(req_params, callback) {
  tsheets.getTimesheets(req_params, callback);
};


internals.transformApiResponseToSummary = function(json) {
  var users_by_id = json.supplemental_data.users,
      timesheets_by_id = json.results.timesheets,
      timesheets_by_username = {};

  Object.keys(timesheets_by_id).forEach(function(timesheet_id) {
    var timesheet = timesheets_by_id[timesheet_id];
    var user = users_by_id[timesheet.user_id];

    var user_total_duration = parseFloat(timesheets_by_username[user.username]) || 0;
    user_total_duration += internals.convertSecondsToHours(timesheet.duration);
    timesheets_by_username[user.username] = internals.adjustNumberPrecision(user_total_duration);
  });

  return timesheets_by_username;
};


internals.convertSecondsToHours = function(seconds) {
  return parseFloat(seconds) / 3600;
};


internals.adjustNumberPrecision = function(number) {
  return parseFloat(number.toPrecision(4));
};


internals.convertSummaryToMessage = function(start_date, end_date, summary_json) {
  var DATE_FORMAT = 'D MMM',
      header = '%s reported between %s to %s:\n',
      message,
      users_str,
      users = internals.convertSummaryToSortedUsers(summary_json);

  if (users.length === 1) {
    users_str = util.format('%d user', users.length);
  }
  else {
    users_str = util.format('%d users', users.length);
  }

  message = util.format(header,
      users_str,
      start_date.format(DATE_FORMAT),
      end_date.format(DATE_FORMAT));

  users.forEach(function(user, index) {
    if (index > 0) {
      message += '\n';
    }
    message += user.username + ': ' + user.duration;
  });

  return message;
};


internals.convertSummaryToSortedUsers = function(summary_json) {
  var users = [];

  Object.keys(summary_json).forEach(function(username) {
    users.push({
      username: username,
      duration: summary_json[username]
    });
  });

  users.sort(function(user1, user2) {
    return user1.duration - user2.duration;
  });

  return users;
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
