/**
 * Module dependencies.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var lusca = require('lusca');
var methodOverride = require('method-override');

var exphbs  = require('express-handlebars');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var passport = require('passport');

/**
 * Page Controllers (route handlers).
 */
var homeController = require('./controllers/home');
var faqController = require('./controllers/faq');
/**
 * Create Express server.
 */
var app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
//app.use(favicon(path.join(__dirname, 'public/favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'squiffy'
  //secret: secrets.sessionSecret,
  //store: new MongoStore({ url: secrets.db, autoReconnect: true })
}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
app.use(lusca({
  csrf: false,
  xframe: 'SAMEORIGIN',
  xssProtection: true
}));

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(function(req, res, next) {
  if (/api/i.test(req.path)) req.session.returnTo = req.path;
  next();
});
//app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(express.static(__dirname + '/public'));


/**
 * Primary app routes.
 */
app.get('/', homeController.index);

app.get('/faq', faqController.index);
/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
