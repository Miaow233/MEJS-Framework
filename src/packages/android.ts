interface SQLiteDatabaseStatic {
  readonly class: any
  create(arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/): android.database.sqlite.SQLiteDatabase
  createInMemory(
    arg0: any /*android.database.sqlite.SQLiteDatabase$OpenParams*/
  ): android.database.sqlite.SQLiteDatabase
  openDatabase(
    arg0: java.io.File,
    arg1: any /*android.database.sqlite.SQLiteDatabase$OpenParams*/
  ): android.database.sqlite.SQLiteDatabase
  openDatabase(
    arg0: string,
    arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
    arg2: int
  ): android.database.sqlite.SQLiteDatabase
  openDatabase(
    arg0: string,
    arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
    arg2: int,
    arg3: any /*android.database.DatabaseErrorHandler*/
  ): android.database.sqlite.SQLiteDatabase
  openOrCreateDatabase(
    arg0: java.io.File,
    arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/
  ): android.database.sqlite.SQLiteDatabase
  openOrCreateDatabase(
    arg0: string,
    arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/
  ): android.database.sqlite.SQLiteDatabase
  openOrCreateDatabase(
    arg0: string,
    arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
    arg2: any /*android.database.DatabaseErrorHandler*/
  ): android.database.sqlite.SQLiteDatabase
  deleteDatabase(arg0: java.io.File): boolean
  releaseMemory(): int
  findEditTable(arg0: string): string
}

export const SQLiteDatabase: SQLiteDatabaseStatic = Packages.android.database.sqlite.SQLiteDatabase

interface BitmapStatic {
  readonly class: any
  createBitmap(arg0: android.graphics.Bitmap): android.graphics.Bitmap
  createBitmap(arg0: android.graphics.Bitmap, arg1: int, arg2: int, arg3: int, arg4: int): android.graphics.Bitmap
  createBitmap(
    arg0: android.graphics.Bitmap,
    arg1: int,
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: any /*android.graphics.Matrix*/,
    arg6: boolean
  ): android.graphics.Bitmap
  createBitmap(arg0: android.graphics.Picture): android.graphics.Bitmap
  createBitmap(
    arg0: android.graphics.Picture,
    arg1: int,
    arg2: int,
    arg3: any /*android.graphics.Bitmap$Config*/
  ): android.graphics.Bitmap
  createBitmap(
    arg0: any /*android.util.DisplayMetrics*/,
    arg1: int,
    arg2: int,
    arg3: any /*android.graphics.Bitmap$Config*/
  ): android.graphics.Bitmap
  createBitmap(
    arg0: any /*android.util.DisplayMetrics*/,
    arg1: int,
    arg2: int,
    arg3: any /*android.graphics.Bitmap$Config*/,
    arg4: boolean
  ): android.graphics.Bitmap
  createBitmap(
    arg0: any /*android.util.DisplayMetrics*/,
    arg1: int,
    arg2: int,
    arg3: any /*android.graphics.Bitmap$Config*/,
    arg4: boolean,
    arg5: any /*android.graphics.ColorSpace*/
  ): android.graphics.Bitmap
  createBitmap(
    arg0: any /*android.util.DisplayMetrics*/,
    arg1: [int],
    arg2: int,
    arg3: int,
    arg4: any /*android.graphics.Bitmap$Config*/
  ): android.graphics.Bitmap
  createBitmap(
    arg0: any /*android.util.DisplayMetrics*/,
    arg1: [int],
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: int,
    arg6: any /*android.graphics.Bitmap$Config*/
  ): android.graphics.Bitmap
  createBitmap(arg0: int, arg1: int, arg2: any /*android.graphics.Bitmap$Config*/): android.graphics.Bitmap
  createBitmap(
    arg0: int,
    arg1: int,
    arg2: any /*android.graphics.Bitmap$Config*/,
    arg3: boolean
  ): android.graphics.Bitmap
  createBitmap(
    arg0: int,
    arg1: int,
    arg2: any /*android.graphics.Bitmap$Config*/,
    arg3: boolean,
    arg4: any /*android.graphics.ColorSpace*/
  ): android.graphics.Bitmap
  createBitmap(arg0: [int], arg1: int, arg2: int, arg3: any /*android.graphics.Bitmap$Config*/): android.graphics.Bitmap
  createBitmap(
    arg0: [int],
    arg1: int,
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: any /*android.graphics.Bitmap$Config*/
  ): android.graphics.Bitmap
  createScaledBitmap(arg0: android.graphics.Bitmap, arg1: int, arg2: int, arg3: boolean): android.graphics.Bitmap
  wrapHardwareBuffer(
    arg0: any /*android.hardware.HardwareBuffer*/,
    arg1: any /*android.graphics.ColorSpace*/
  ): android.graphics.Bitmap
}

export const Bitmap: BitmapStatic = Packages.android.graphics.Bitmap

interface BitmapFactoryStatic {
  readonly class: any
  new (): android.graphics.BitmapFactory
  decodeByteArray(arg0: bytearray, arg1: int, arg2: int): android.graphics.Bitmap
  decodeByteArray(
    arg0: bytearray,
    arg1: int,
    arg2: int,
    arg3: any /*android.graphics.BitmapFactory$Options*/
  ): android.graphics.Bitmap
  decodeFile(arg0: string): android.graphics.Bitmap
  decodeFile(arg0: string, arg1: any /*android.graphics.BitmapFactory$Options*/): android.graphics.Bitmap
  decodeFileDescriptor(arg0: any /*java.io.FileDescriptor*/): android.graphics.Bitmap
  decodeFileDescriptor(
    arg0: any /*java.io.FileDescriptor*/,
    arg1: android.graphics.Rect,
    arg2: any /*android.graphics.BitmapFactory$Options*/
  ): android.graphics.Bitmap
  decodeResource(arg0: any /*android.content.res.Resources*/, arg1: int): android.graphics.Bitmap
  decodeResource(
    arg0: any /*android.content.res.Resources*/,
    arg1: int,
    arg2: any /*android.graphics.BitmapFactory$Options*/
  ): android.graphics.Bitmap
  decodeResourceStream(
    arg0: any /*android.content.res.Resources*/,
    arg1: any /*android.util.TypedValue*/,
    arg2: java.io.InputStream,
    arg3: android.graphics.Rect,
    arg4: any /*android.graphics.BitmapFactory$Options*/
  ): android.graphics.Bitmap
  decodeStream(arg0: java.io.InputStream): android.graphics.Bitmap
  decodeStream(
    arg0: java.io.InputStream,
    arg1: android.graphics.Rect,
    arg2: any /*android.graphics.BitmapFactory$Options*/
  ): android.graphics.Bitmap
}

export const BitmapFactory: BitmapFactoryStatic = Packages.android.graphics.BitmapFactory

interface CanvasStatic {
  readonly class: any
  new (): android.graphics.Canvas
  new (arg0: android.graphics.Bitmap): android.graphics.Canvas
}

export const Canvas: CanvasStatic = Packages.android.graphics.Canvas

interface PaintStatic {
  readonly class: any
  new (arg0: android.graphics.Paint): android.graphics.Paint
  new (arg0: int): android.graphics.Paint
  new (): android.graphics.Paint
}

export const Paint: PaintStatic = Packages.android.graphics.Paint

interface PathStatic {
  readonly class: any
  new (): android.graphics.Path
  new (arg0: android.graphics.Path): android.graphics.Path
}

export const Path: PathStatic = Packages.android.graphics.Path

interface PictureStatic {
  readonly class: any
  new (): android.graphics.Picture
  new (arg0: android.graphics.Picture): android.graphics.Picture
}

export const Picture: PictureStatic = Packages.android.graphics.Picture

interface RectStatic {
  readonly class: any
  new (arg0: android.graphics.Rect): android.graphics.Rect
  new (arg0: int, arg1: int, arg2: int, arg3: int): android.graphics.Rect
  new (): android.graphics.Rect
  unflattenFromString(arg0: string): android.graphics.Rect
  intersects(arg0: android.graphics.Rect, arg1: android.graphics.Rect): boolean
}

export const Rect: RectStatic = Packages.android.graphics.Rect

interface RectFStatic {
  readonly class: any
  new (arg0: android.graphics.Rect): android.graphics.RectF
  new (arg0: android.graphics.RectF): android.graphics.RectF
  new (arg0: float, arg1: float, arg2: float, arg3: float): android.graphics.RectF
  new (): android.graphics.RectF
  intersects(arg0: android.graphics.RectF, arg1: android.graphics.RectF): boolean
}

export const RectF: RectFStatic = Packages.android.graphics.RectF

interface ColorStatic {
  readonly class: any
  new (): android.graphics.Color
  valueOf(arg0: float, arg1: float, arg2: float): android.graphics.Color
  valueOf(arg0: float, arg1: float, arg2: float, arg3: float): android.graphics.Color
  valueOf(
    arg0: float,
    arg1: float,
    arg2: float,
    arg3: float,
    arg4: any /*android.graphics.ColorSpace*/
  ): android.graphics.Color
  valueOf(arg0: [float], arg1: any /*android.graphics.ColorSpace*/): android.graphics.Color
  valueOf(arg0: int): android.graphics.Color
  valueOf(arg0: long): android.graphics.Color
  colorSpace(arg0: long): any /*android.graphics.ColorSpace*/
  isInColorSpace(arg0: long, arg1: any /*android.graphics.ColorSpace*/): boolean
  isSrgb(arg0: long): boolean
  isWideGamut(arg0: long): boolean
  alpha(arg0: long): float
  blue(arg0: long): float
  green(arg0: long): float
  luminance(arg0: int): float
  luminance(arg0: long): float
  red(arg0: long): float
  HSVToColor(arg0: [float]): int
  HSVToColor(arg0: int, arg1: [float]): int
  alpha(arg0: int): int
  argb(arg0: float, arg1: float, arg2: float, arg3: float): int
  argb(arg0: int, arg1: int, arg2: int, arg3: int): int
  blue(arg0: int): int
  green(arg0: int): int
  parseColor(arg0: string): int
  red(arg0: int): int
  rgb(arg0: float, arg1: float, arg2: float): int
  rgb(arg0: int, arg1: int, arg2: int): int
  toArgb(arg0: long): int
  convert(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.ColorSpace$Connector*/): long
  convert(
    arg0: float,
    arg1: float,
    arg2: float,
    arg3: float,
    arg4: any /*android.graphics.ColorSpace*/,
    arg5: any /*android.graphics.ColorSpace*/
  ): long
  convert(arg0: int, arg1: any /*android.graphics.ColorSpace*/): long
  convert(arg0: long, arg1: any /*android.graphics.ColorSpace$Connector*/): long
  convert(arg0: long, arg1: any /*android.graphics.ColorSpace*/): long
  pack(arg0: float, arg1: float, arg2: float): long
  pack(arg0: float, arg1: float, arg2: float, arg3: float): long
  pack(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.ColorSpace*/): long
  pack(arg0: int): long
  RGBToHSV(arg0: int, arg1: int, arg2: int, arg3: [float]): void
  colorToHSV(arg0: int, arg1: [float]): void
}

export const Color: ColorStatic = Packages.android.graphics.Color

interface TypefaceStatic {
  readonly class: any
  create(arg0: android.graphics.Typeface, arg1: int): android.graphics.Typeface
  create(arg0: android.graphics.Typeface, arg1: int, arg2: boolean): android.graphics.Typeface
  create(arg0: string, arg1: int): android.graphics.Typeface
  createFromAsset(arg0: any /*android.content.res.AssetManager*/, arg1: string): android.graphics.Typeface
  createFromFile(arg0: java.io.File): android.graphics.Typeface
  createFromFile(arg0: string): android.graphics.Typeface
  defaultFromStyle(arg0: int): android.graphics.Typeface
}

export const Typeface: TypefaceStatic = Packages.android.graphics.Typeface
