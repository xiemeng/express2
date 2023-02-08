var app = require('../appBase.js');
// 接口
app.get('/login', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const result = {
    code: 0,
    data: {
      name: '124'
    }
  }
  res.send(result)
});