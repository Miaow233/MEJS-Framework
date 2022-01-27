let sqlite = Java.type('android.database.sqlite.SQLiteDatabase')
let query = 'select sqlite_version() AS sqlite_version'
let db = sqlite.openOrCreateDatabase('/sdcard/DIC/data/cache/hdic.db', null)
let cursor = db.rawQuery(query, null)
let sqliteVersion = ''
if (cursor.moveToNext()) {
  sqliteVersion = cursor.getString(0)
}

console.log(sqliteVersion)
