const SQLiteDatabase = Java.type('android.database.sqlite.SQLiteDatabase')
const CursorFactory = SQLiteDatabase.CursorFactory
const SQLiteOpenHelper = Java.type('android.database.sqlite.SQLiteOpenHelper')
// let query = 'select sqlite_version() AS sqlite_version'
// let db = sqlite.openOrCreateDatabase('/sdcard/DIC/data/cache/hdic.db', null)
// let cursor = db.rawQuery(query, null)
// let sqliteVersion = ''
// if (cursor.moveToNext()) {
//   sqliteVersion = cursor.getString(0)
// }

// console.log(sqliteVersion)

// 数据库工具类
class DBOpenHelper extends SQLiteOpenHelper {
  constructor(context: string, name: string, factory: CursorFactory, version: number) {
    super(context, name, factory, version)
    this.TABLE_NAME = 'test'
  }
  onCreate(db: SQLiteDatabase) {
    let sql = `create table ${this.TABLE_NAME} (id integer primary key autoincrement, name text, age integer)`
    db.execSQL(sql)
  }
  onUpgrade(db: SQLiteDatabase, oldVersion: number, newVersion: number) {
    let sql = `DROP TABLE IF EXISTS ${this.TABLE_NAME}`
    db.execSQL(sql)
    this.onCreate(db)
  }
}
