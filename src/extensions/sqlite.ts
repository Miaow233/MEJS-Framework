// example
//
// let query = 'select sqlite_version() AS sqlite_version'
// let db = SQLiteDatabase.openOrCreateDatabase('/sdcard/DIC/data/cache/hdic.db', null)
// let cursor = db.rawQuery(query, null)
// let sqliteVersion: any
// if (cursor.moveToNext()) {
//   sqliteVersion = cursor.getString(0)
// }
// console.log(sqliteVersion)

import { exists } from './fs.js'
import { File } from './java.js'

export class SQLiteDatabase {
  /** 打开数据库，如果不存在则创建 */
  static openOrCreateDatabase(file: string | File, factory?: CursorFactory): SQLiteDatabase {
    if (typeof file === 'string') {
      file = new File(file)
    }
    if (!file.exists()) file.createNewFile()
    return Java.type('android.database.sqlite.SQLiteDatabase').openOrCreateDatabase(file, factory)
  }
  /** 创建数据库，意义不明 */
  static create(): SQLiteDatabase {
    return Java.type('android.database.sqlite.SQLiteDatabase').create()
  }
  /** 在内存中创建数据库 */
  static createInMemory(): SQLiteDatabase {
    return Java.type('android.database.sqlite.SQLiteDatabase').createInMemory()
  }
  /** 可能用不到构造器 */
  constructor(context: string, name: string, factory: CursorFactory, version: number) {}
  delete(table: string, whereClause: string, whereArgs: Array<string>): number {
    return this.delete(table, whereClause, whereArgs)
  }

  deleteDatabase(file: File): boolean {
    return this.deleteDatabase(file)
  }
  /** 执行SQL */
  execSQL(sql: string): void {
    this.execSQL(sql)
  }

  getPath(): string {
    return this.getPath()
  }

  getVersion(): number {
    return this.getVersion()
  }

  insert(table: string, nullColumnHack: string | null, content: Map<string, any>): number {
    return this.insert(table, nullColumnHack, content)
  }

  rawQuery(sql: string, selectionArgs?: Array<string>, cancellationSignal?: string): Cursor {
    return this.rawQuery(sql, selectionArgs, cancellationSignal)
  }

  update(table: string, values: Map<string, any>, whereClause: string | null, whereArgs: Array<string>): number {
    return this.update(table, values, whereClause, whereArgs)
  }
}
