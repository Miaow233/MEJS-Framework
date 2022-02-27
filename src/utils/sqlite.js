let sqlite = Java.type('android.database.sqlite.SQLiteDatabase')
// let query = 'select sqlite_version() AS sqlite_version'
// let db = sqlite.openOrCreateDatabase('/sdcard/DIC/data/cache/hdic.db', null)
// let cursor = db.rawQuery(query, null)
// let sqliteVersion = ''
// if (cursor.moveToNext()) {
//   sqliteVersion = cursor.getString(0)
// }

// console.log(sqliteVersion)

// 数据库工具类
export class db {
  constructor(dbName) {
    this.dbName = dbName
    this.db = sqlite.openOrCreateDatabase(dbName, null)
  }

  // 查询
  query(sql, params) {
    let cursor = this.db.rawQuery(sql, params)
    let result = []
    while (cursor.moveToNext()) {
      let row = {}
      for (let i = 0; i < cursor.getColumnCount(); i++) {
        let name = cursor.getColumnName(i)
        let value = cursor.getString(i)
        row[name] = value
      }
      result.push(row)
    }
    cursor.close()
    return result
  }

  // 执行
  exec(sql, params) {
    return this.db.execSQL(sql, params)
  }

  // 关闭
  close() {
    this.db.close()
  }
}
