var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

/* ==============================================
    Routes requiring
============================================== */

var routes = require('./routes/index');

var app = express();

/* ==============================================
    Setup view engine
    Use ejs template engine in .html documents
============================================== */

app.set('views', './.tmp');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);

/* ==============================================
    Basic settings
============================================== */

app.use(favicon('favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('./.tmp'));

/* ==============================================
    Routes bootstrap
============================================== */

app.use('/', routes);

module.exports = app;