var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '47.251.40.146',
  user: 'video_scrm',
  password: 'PjXSMRLCcpdZ3YkZ',
  database: 'video_scrm'
});
connection.connect();

// 数据库插入
// connection.query('INSERT INTO xiemeng_ceshi(Id,name,age) VALUES(0,?,?)', ['关羽', 31], function (err, rows, fields) {
//   if (err) throw err;
//   console.log('The xiemeng_ceshi is: ', rows);
// });
// 数据库更新
// connection.query('UPDATE xiemeng_ceshi SET name = ?,age = ? WHERE id = ?', ['张飞2', 28, 1], function (err, rows, fields) {
//   if (err) throw err;
//   console.log('The xiemeng_ceshi is: ', rows);
// });
// 数据库删除
connection.query('DELETE FROM xiemeng_ceshi where id=?', [8], function (err, rows, fields) {
  if (err) throw err;
  console.log('The xiemeng_ceshi is: ', rows);
});
// 数据库查询
// connection.query('SELECT * FROM xiemeng_ceshi', function (err, rows, fields) {
//   if (err) throw err;
//   console.log('The tiktok_account is: ', rows);
// });
connection.end();