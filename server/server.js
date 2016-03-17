/**
 * Created by hridhya on 3/17/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var morgan = require('morgan');
var parser = require('body-parser');

mongoose.connect('mongodb://localhost/Restaurantify_data_base');


app.use(morgan('dev'));
app.use(parser.json());
//app.use(app.router);

require('./config/routes.js')(app);

app.set("port", 8000);

app.use(express.static(__dirname + "/../client"));
app.use(passport.initialize());

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));

module.exports = app;