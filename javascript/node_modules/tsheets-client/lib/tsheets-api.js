'use strict';

var request = require('request'),
    joi = require('joi');

var validator = require('./validator.js');

var internals = {
  API_BASE_URI: 'https://rest.tsheets.com/api/v1',
  request_params_validation_schema: joi.object().required().keys({
    api_token: joi.string().required(),
    endpoint: joi.string().required(),
    method: joi.string().required(),
    body_params: joi.any().optional(),
    qs: joi.object().optional()
  })
};


/**
 * Makes a request to the TSheets API.
 * @param {Object} params Token, endpoint, method, body_params.
 * @param {Function} callback Invoked with [err, result].
 */
exports.makeRequest = function(params, callback) {
  var req_opts,
      validated_params;

  try {
    validated_params = internals.validateRequestParams(params);
  }
  catch (e) {
    setImmediate(callback, e);
    return;
  }

  req_opts = internals.getRequestOptions(validated_params);

  request(req_opts, function(err, res, json) {
    if (err) {
      callback(err, null);
    }
    else if (res.statusCode >= 300) {
      callback(new Error('Invalid response, statusCode=' + res.statusCode), null);
    }
    else {
      callback(null, json);
    }
  });
};


internals.validateRequestParams = function(params) {
  return validator.validateParams(params, internals.request_params_validation_schema);
};


internals.getRequestOptions = function(valid_params) {
  var opts = {
    url: internals.API_BASE_URI + valid_params.endpoint,
    method: valid_params.method,
    json: true,
    headers: {
      Authorization: 'Bearer ' + valid_params.api_token
    }
  };

  if (valid_params.body_params && Object.keys(valid_params.body_params).length) {
    opts.json = {
      data: valid_params.body_params
    };
  }

  if (valid_params.qs) {
    opts.qs = valid_params.qs;
  }

  return opts;
};


/* istanbul ignore else */
if (process.env.NODE_ENV === 'test') {
  /** @type Object */
  exports.internals = internals;
}
