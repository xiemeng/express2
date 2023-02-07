var app = require('../appBase.js');
// 接口
app.get('/123', function (req, res) {
  console.log('得到了请求124', req.query)
  res.status(200)
  res.json('123')
});