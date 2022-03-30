declare namespace Java {
  function type(name: string): any
}

declare namespace Packages {
  /**  */
  namespace java {
    namespace Object {}
    namespace lang {
      class Object {}
    }
    namespace System {}
    namespace io {
      abstract class Reader extends java.lang.Object {
        close(): void
        read(): number
        read(b: number[]): number
        read(b: number[], off: number, len: number): number
        skip(n: number): number
        ready(): boolean
      }
      abstract class Writer extends java.lang.Object {
        write(data: any): void
      }
      class File {
        delete()

        constructor(path: string)
        public static createTempFile(prefix: string, suffix: string): File
        public static listRoots(): File[]
        public getName(): string
        public getParent(): string
        public getParentFile(): File
        public exists(): boolean
        public getAbsolutePath(): string
        public getPath(): string
        public mkdirs(): boolean
        public isFile(): boolean
        public isDirectory(): boolean
        public list(): string[]
        public listFiles(): File[]
        public createNewFile(): boolean
        public createDirectory(): boolean
      }
      abstract class InputStream extends java.lang.Object {
        constructor()
        close(): void
        readAllBytes(): number[]
      }
      abstract class OutputStream extends java.lang.Object {
        constructor()
        flush(): void
        close(): void
        write(b: number | number[]): void
      }
      class FileInputStream extends InputStream {
        constructor(file: File)
        constructor(name: string)
        public read(): any
        public avilable(): any
        public close(): void
      }
      class InputStreamReader extends Reader {
        constructor(stream: InputStream)
        public read(): any
        public close(): void
      }
      class FileReader extends InputStreamReader {
        constructor(file: File)
        constructor(name: string)
        public read(): any
        public close(): void
      }
      class FileOutputStream extends OutputStream {
        constructor(file: File)
        constructor(name: string)
        public write(b: number | number[]): void
        public close(): void
      }
    }
    namespace net {
      class URL {
        public static newInstance(url: string): URL
        public getContent(): string
      }
    }
  }
  namespace android {
    namespace graphics {
      class Bitmap {
        static compress(PNG: any, arg1: number, out: java.io.FileOutputStream)

        static createBitmap(width: number, heidth: number, ARGB_8888: any)

        static Config: any
        public static createScaledBitmap(bitmap: Bitmap, width: number, height: number, filter: boolean): Bitmap
      }
      class Paint {
        setStrokeWidth(arg0: number)
        setColor(arg0: any)
        public static create(style: number): Paint
      }
      class Convas {
        public static getWidth(canvas: Convas): number
        public static getHeight(canvas: Convas): number
        public static drawBitmap(canvas: Convas, bitmap: Bitmap, x: number, y: number, paint: Paint): void
      }
    }
    namespace database {
      abstract class Cursor {
        public getColumnIndex(columnName: string): number
        public getColumnNames(): string[]
        public getString(columnName: any): string
        public getInt(columnName: string): number
        public getDouble(columnName: string): number
        public getBlob(columnName: string): number[]
        public moveToNext(): boolean
        public close(): void
      }
      namespace sqlite {
        class SQLiteCursor extends Cursor {
          public getDatabase(): SQLiteDatabase
        }
        interface CursorFactory {
          // newCursor(db: SQLiteDatabase, masterQuery: SQLiteCursorDriver, editTable: string, query: SQLiteQuery): Cursor
        }
        interface SQLiteCursorDriver {
          query(
            db: SQLiteDatabase,
            projectionIn: string[],
            selection: string,
            selectionArgs: string[],
            groupBy: string,
            having: string,
            sortOrder: string,
            limit: string
          ): Cursor
        }
        class SQLiteDatabase {
          constructor(context: string, name: string, factory: CursorFactory, version: number)
          create(): SQLiteDatabase
          createInMemory(): SQLiteDatabase
          delete(table: string, whereClause: string, whereArgs: Array<string>): number
          deleteDatabase(file: java.io.File): boolean
          execSQL(sql: string): void
          execSQL(sql: string, bindArgs: Object): void
          getPath(): string
          getVersion(): number
          insert(table: string, nullColumnHack: string | null, content: Map<string, any>): number
          static openOrCreateDatabase(file: java.io.File, factory?: CursorFactory): SQLiteDatabase
          static openOrCreateDatabase(path: string, factory?: CursorFactory): SQLiteDatabase
          // query(
          //   table: string,
          //   columns: Array<string> | null,
          //   selection: string | null,
          //   selectionArgs: Array<string>,
          //   groupBy: string | null,
          //   having: string | null,
          //   orderBy: string | null,
          //   limit: string | null
          // ): Cursor
          rawQuery(sql: string, selectionArgs: Array<string>, cancellationSignal?: string): Cursor
          update(table: string, values: Map<string, any>, whereClause: string | null, whereArgs: Array<string>): number
        }
      }
    }
  }
}
