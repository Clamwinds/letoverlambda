/**
 * Created by lucien on 12/16/15.
 */
var Alert = require('react-bootstrap/lib/Alert');
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('require-bootstrap/lib/Button');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;




var button = ReactBootstrap.Button({
    bsStyle: "success",
    bsSize: "large",
    children: "Register"
});

React.render(button, mountNode);