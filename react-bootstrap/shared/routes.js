import React from 'react';
import { Route } from 'react-router';

// Import any routes handler components that will be used
import AppHandler from '../components/app/appHandler';
import LoginHandler from '../components/app/loginHandler';

let routes = (
    <Route name='app' path='/' handler={AppHandler}>
        <Route name='login' path='/login' handler={LoginHandler} />
        <Route name='password-reset' path='/password_reset' handler={PasswordResetHandler} />
    </Route>
);

export default routes;'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _appHandler = require('../components/app/appHandler');

var _appHandler2 = _interopRequireDefault(_appHandler);

var _loginHandler = require('../components/app/loginHandler');

var _loginHandler2 = _interopRequireDefault(_loginHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import any routes handler components that will be used

var routes = _react2.default.createElement(
    _reactRouter.Route,
    { name: 'app', path: '/', handler: _appHandler2.default },
    _react2.default.createElement(_reactRouter.Route, { name: 'login', path: '/login', handler: _loginHandler2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'password-reset', path: '/password_reset', handler: PasswordResetHandler })
);

exports.default = routes;

