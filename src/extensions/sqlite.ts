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
  static openOrCreateDatabase(file: string | File, factory?: CursorFactory): SQLiteDatabase {
    let path = file.toString().split('/').slice(0, -1).join('/')
    if (!exists(path)) File.mkdirs(path)
    return Java.type('android.database.sqlite.SQLiteDatabase').openOrCreateDatabase(file, factory)
  }

  static create(): SQLiteDatabase {
    return Java.type('android.database.sqlite.SQLiteDatabase').create()
  }

  static createInMemory(): SQLiteDatabase {
    return Java.type('android.database.sqlite.SQLiteDatabase').createInMemory()
  }

  constructor(context: string, name: string, factory: CursorFactory, version: number) {}
  delete(table: string, whereClause: string, whereArgs: Array<string>): number {
    return this.delete(table, whereClause, whereArgs)
  }

  deleteDatabase(file: File): boolean {
    return this.deleteDatabase(file)
  }

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
