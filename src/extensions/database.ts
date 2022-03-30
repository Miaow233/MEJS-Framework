/**
 * let database = new Database()
 * database.use('sqlite') | database.use('mysql')
 * database.select('medic.db')
 * database.update('diary', {})
 */

import { Logger } from '../logger'

// 获取 schedule 表中 id 为 1234 的数据行，返回一个数组
// await ctx.database.get('schedule', 1234)

// 获取 schedule 表中 id 为 1234 或 5678 的数据行，返回一个数组
// await ctx.database.get('schedule', [1234, 5678])
const SQLiteDatabase = Packages.android.database.sqlite.SQLiteDatabase
let query = 'select sqlite_version() AS sqlite_version'
let db = SQLiteDatabase.openOrCreateDatabase(':memory:', null)
let cursor = db.rawQuery(query, null)
let sqliteVersion = ''
if (cursor.moveToNext()) {
  sqliteVersion = cursor.getString(0)
}
Logger.log(sqliteVersion)
