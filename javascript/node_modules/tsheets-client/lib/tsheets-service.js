'use strict';

var joi = require('joi');

var api_service = require('./tsheets-api.js'),
    validator = require('./validator.js');

var internals = {
  report_time_validation_schema: joi.object().required().keys({
    api_token: joi.string().required(),
    user_id: joi.number().required(),
    jobcode_id: joi.number().required(),
    duration_seconds: joi.number().required(),
    date: joi.string().required()
  }),

  get_timesheets_validation_schema: joi.object().required().keys({
    api_token: joi.string().required(),
    start_date: joi.string().required(),
    end_date: joi.string().required(),
    page: joi.number().optional(),
    user_ids: joi.array().includes(joi.number()).optional()
  })
};


/**
 * @see reportTime
 * @type {Function}
 */
exports.reportTime = reportTime;


/**
 * @see getTimesheets
 * @type {Function}
 */
exports.getTimesheets = getTimesheets;


// Private implementation


function reportTime(params, callback) {
  var validated_params,
      req_params;

  try {
    validated_params = internals.validateReportTimeParams(params);
  }
  catch (e) {
    setImmediate(callback, e);
    return;
  }

  req_params = internals.createReportTimeRequestParams(validated_params);
  api_service.makeRequest(req_params, callback);
}


function getTimesheets(params, callback) {
  var validated_params,
      req_params;

  try {
    validated_params = internals.validateGetTimesheetsParams(params);
  }
  catch (e) {
    setImmediate(callback, e);
    return;
  }

  req_params = internals.createGetTimesheetsParams(validated_params);
  api_service.makeRequest(req_params, callback);
}


internals.validateReportTimeParams = function(params) {
  return validator.validateParams(params, internals.report_time_validation_schema);
};


internals.createReportTimeRequestParams = function(valid_params) {
  return {
    api_token: valid_params.api_token,
    method: 'post',
    endpoint: '/timesheets',
    body_params: [
      {
        type: 'manual',
        jobcode_id: valid_params.jobcode_id,
        user_id: valid_params.user_id,
        duration: valid_params.duration_seconds,
        date: valid_params.date
      }
    ]
  };
};

internals.validateGetTimesheetsParams = function(params) {
  return validator.validateParams(params, internals.get_timesheets_validation_schema);
};


internals.createGetTimesheetsParams = function(valid_params) {
  var params = {
    api_token: valid_params.api_token,
    method: 'get',
    endpoint: '/timesheets',
    qs: {
      start_date: valid_params.start_date,
      end_date: valid_params.end_date
    }
  };

  if (Array.isArray(valid_params.user_ids) && valid_params.user_ids.length) {
    params.qs.user_ids = valid_params.user_ids;
  }

  if (valid_params.page) {
    params.qs.page = valid_params.page;
  }

  return params;
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
