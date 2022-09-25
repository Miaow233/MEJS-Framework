# SQLite 数据库

## 示例

```js
const SQLiteDatabase = Packages.android.database.sqlite.SQLiteDatabase
let query = 'select sqlite_version() AS sqlite_version'
let db = SQLiteDatabase.openOrCreateDatabase(':memory:', null)
let cursor = db.rawQuery(query, null)
let sqliteVersion = '';
if (cursor.moveToNext()) {
    sqliteVersion = cursor.getString(0)
}
console.log(sqliteVersion)
```

