declare namespace Java {
  function type(name: string): any
}

declare class File {
  constructor(path: string)
  getName(): string
  getPath(): string
  getParentFile(): File
  getAbsolutePath(): string
  exists(): boolean
  isDirectory(): boolean
  isFile(): boolean
  delete(): boolean
  list(): string[]
  listFiles(): File[]
  createNewFile(): boolean
  createDirectory(): boolean
  mkdirs(): boolean
  mkdir(): boolean
}

declare interface Cursor {
  moveToNext(): boolean
  getString(columns: number): string
}

declare interface CursorFactory {}

declare interface SQLiteDatabase {
  CursorFactory: CursorFactory
  execSQL(sql: string): void
  execSQL(sql, bindArgs: Object): void
  create(): SQLiteDatabase
  createInMemory(): SQLiteDatabase
  delete(table: string, whereClause: string, whereArgs: Array<string>): number
  deleteDatabase(file: File): boolean
  getVersion(): number
  insert(table: string, nullColumnHack: string, content: Map<string, any>): number
  openOrCreateDatabase(file: File, factory?: CursorFactory): SQLiteDatabase
  openOrCreateDatabase(path: string, factory?: CursorFactory, errorHandler?: any): SQLiteDatabase
  query(
    distinct: boolean,
    table: string,
    columns: Array<string>,
    selection: string,
    selectionArgs: Array<string>,
    groupBy: string,
    having: string,
    orderBy: string,
    limit: string
  ): Cursor
  query(
    table: string,
    columns: Array<string>,
    selection: string,
    selectionArgs: Array<string>,
    groupBy: string,
    having: string,
    orderBy: string,
    limit: string
  ): Cursor
  rawQuery(sql, u): Cursor
}

declare interface SQLiteOpenHelper {
  getWritableDatabase(): SQLiteDatabase
}
