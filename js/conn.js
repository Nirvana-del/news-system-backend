const mysql = require('mysql');

// 创建数据库连接对象
var connection = mysql.createPool({
  host: 'localhost',
  user: '*****',// 改自己的账号
  password: '*****',// 改自己的密码
  database: '*****',// 哪个数据库
  useConnectionPooling: true,
  timezone:"08:00"
})

// 连接数据库
connection.getConnection(() => {
  console.log('数据库连接成功！');
});

module.exports = connection;