declare interface Cursor {
  moveToNext(): boolean
  getString(columns: number): string
}

declare interface CursorFactory {}

declare interface SQLiteDatabase {
  create(): SQLiteDatabase //static
  createInMemory(): SQLiteDatabase
  delete(table: string, whereClause: string, whereArgs: Array<string>): number
  deleteDatabase(file: File): boolean
  execSQL(sql: string): void
  execSQL(sql: string, bindArgs: Object): void
  getPath(): string
  getVersion(): number
  insert(table: string, nullColumnHack: string | null, content: Map<string, any>): number
  openOrCreateDatabase(file: File, factory?: CursorFactory): SQLiteDatabase
  openOrCreateDatabase(path: string, factory?: CursorFactory): SQLiteDatabase
  query(
    table: string,
    columns: Array<string> | null,
    selection: string | null,
    selectionArgs: Array<string>,
    groupBy: string | null,
    having: string | null,
    orderBy: string | null,
    limit: string | null
  ): Cursor
  rawQuery(sql: string, selectionArgs: Array<string>, cancellationSignal?: string): Cursor
  update(table: string, values: Map<string, any>, whereClause: string | null, whereArgs: Array<string>): number
}

declare interface SQLiteOpenHelper {
  new (context: string, name: string, factory: CursorFactory, version: number): SQLiteOpenHelper
  close(): void
  getDatabaseName(): string
  getReadableDatabase(): SQLiteDatabase
  getWritableDatabase(): SQLiteDatabase
  onCreate(db: SQLiteDatabase): void
  onOpen(db: SQLiteDatabase): void
  onUpgrade(db: SQLiteDatabase, oldVersion: number, newVersion: number): void
}
