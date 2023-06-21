var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { create } = require('express-handlebars')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/perfil');

var app = express();

//configuraciones para utilizar componentes
const hbs = create({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  extname: '.hbs',
  partialsDir: ["views/components"]
})

app.engine(".hbs", hbs.engine);//define motor de plantilla
app.set("view engine", ".hbs");//define la extension
app.set("views", "./views");//define la ubicacion del motor de plantilla

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/perfil', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
