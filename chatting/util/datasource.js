// connection 객체 준비
"use strict"

const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'bombee.cmtyfajod2ua.ap-northeast-2.rds.amazonaws.com',
  database: 'bombeedb',
  user: 'bombee',
  password: '11111111'
})
connection.connect()

/*
module.exports.getConnection = function() {
  return con
}
*/
module.exports = {
  getConnection() {
    return connection
  }
}













//
