var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors')


var usersRouter = require('./routes/users');


var app = require('./appBase.js');
// 解决跨域
app.use(cors())


// 引入api
require('./api/index')
// 引入数据库
require('./mysql')
// 引入日志
require('./log')
// 引入history代理 解决刷新404的问题
const history = require('connect-history-api-fallback'); // 引入history插件

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// history 要放在路由和接口下面，不然前端路由会覆盖后端路由
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
