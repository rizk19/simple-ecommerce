var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var ecommercesRouter = require('./routes/api/ecommerces');

var app = express();

mongoose.connect('mongodb://localhost:27017/ecommerce-react', {useNewUrlParser: true});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/api/ecommerce', ecommercesRouter);

module.exports = app;
