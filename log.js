var app = require('./appBase.js');
var logger = require('morgan');
var fs = require('fs');
var path = require('path');
var FileStreamRotator = require('file-stream-rotator')
var logDirectory = path.join(__dirname, 'logger')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// 日志存储
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
app.use(logger('short', { stream: accessLogStream }));
