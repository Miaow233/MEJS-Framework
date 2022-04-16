declare namespace android.database.sqlite {
  class SQLiteDatabase /* extends SQLiteClosable*/ {
    acquireReference(): void
    beginTransaction(): void
    beginTransactionNonExclusive(): void
    beginTransactionWithListener(arg0: any /*android.database.sqlite.SQLiteTransactionListener*/): void
    beginTransactionWithListenerNonExclusive(arg0: any /*android.database.sqlite.SQLiteTransactionListener*/): void
    close(): void
    compileStatement(arg0: string): any /*android.database.sqlite.SQLiteStatement*/
    delete(arg0: string, arg1: string, arg2: [string]): int
    disableWriteAheadLogging(): void
    enableWriteAheadLogging(): boolean
    endTransaction(): void
    equals(arg0: java.lang.Object): boolean
    execPerConnectionSQL(arg0: string, arg1: [java.lang.Object]): void
    execSQL(arg0: string): void
    execSQL(arg0: string, arg1: [java.lang.Object]): void
    getAttachedDbs(): any /*java.util.List*/
    getMaximumSize(): long
    getPageSize(): long
    getPath(): string
    getSyncedTables(): any /*java.util.Map*/
    getVersion(): int
    inTransaction(): boolean
    insert(arg0: string, arg1: string, arg2: any /*android.content.ContentValues*/): long
    insertOrThrow(arg0: string, arg1: string, arg2: any /*android.content.ContentValues*/): long
    insertWithOnConflict(arg0: string, arg1: string, arg2: any /*android.content.ContentValues*/, arg3: int): long
    isDatabaseIntegrityOk(): boolean
    isDbLockedByCurrentThread(): boolean
    isDbLockedByOtherThreads(): boolean
    isOpen(): boolean
    isReadOnly(): boolean
    isWriteAheadLoggingEnabled(): boolean
    markTableSyncable(arg0: string, arg1: string): void
    markTableSyncable(arg0: string, arg1: string, arg2: string): void
    needUpgrade(arg0: int): boolean
    query(
      arg0: boolean,
      arg1: string,
      arg2: [string],
      arg3: string,
      arg4: [string],
      arg5: string,
      arg6: string,
      arg7: string,
      arg8: string
    ): any /*android.database.Cursor*/
    query(
      arg0: boolean,
      arg1: string,
      arg2: [string],
      arg3: string,
      arg4: [string],
      arg5: string,
      arg6: string,
      arg7: string,
      arg8: string,
      arg9: any /*android.os.CancellationSignal*/
    ): any /*android.database.Cursor*/
    query(
      arg0: string,
      arg1: [string],
      arg2: string,
      arg3: [string],
      arg4: string,
      arg5: string,
      arg6: string
    ): any /*android.database.Cursor*/
    query(
      arg0: string,
      arg1: [string],
      arg2: string,
      arg3: [string],
      arg4: string,
      arg5: string,
      arg6: string,
      arg7: string
    ): any /*android.database.Cursor*/
    queryWithFactory(
      arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg1: boolean,
      arg2: string,
      arg3: [string],
      arg4: string,
      arg5: [string],
      arg6: string,
      arg7: string,
      arg8: string,
      arg9: string
    ): any /*android.database.Cursor*/
    queryWithFactory(
      arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg1: boolean,
      arg2: string,
      arg3: [string],
      arg4: string,
      arg5: [string],
      arg6: string,
      arg7: string,
      arg8: string,
      arg9: string,
      arg10: any /*android.os.CancellationSignal*/
    ): any /*android.database.Cursor*/
    rawQuery(arg0: string, arg1: [string]): any /*android.database.Cursor*/
    rawQuery(arg0: string, arg1: [string], arg2: any /*android.os.CancellationSignal*/): any /*android.database.Cursor*/
    rawQueryWithFactory(
      arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg1: string,
      arg2: [string],
      arg3: string
    ): any /*android.database.Cursor*/
    rawQueryWithFactory(
      arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg1: string,
      arg2: [string],
      arg3: string,
      arg4: any /*android.os.CancellationSignal*/
    ): any /*android.database.Cursor*/
    releaseReference(): void
    releaseReferenceFromContainer(): void
    replace(arg0: string, arg1: string, arg2: any /*android.content.ContentValues*/): long
    replaceOrThrow(arg0: string, arg1: string, arg2: any /*android.content.ContentValues*/): long
    setCustomAggregateFunction(arg0: string, arg1: any /*java.util.function.BinaryOperator*/): void
    setCustomScalarFunction(arg0: string, arg1: any /*java.util.function.UnaryOperator*/): void
    setForeignKeyConstraintsEnabled(arg0: boolean): void
    setLocale(arg0: any /*java.util.Locale*/): void
    setLockingEnabled(arg0: boolean): void
    setMaxSqlCacheSize(arg0: int): void
    setMaximumSize(arg0: long): long
    setPageSize(arg0: long): void
    setTransactionSuccessful(): void
    setVersion(arg0: int): void
    static create(arg0: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/): SQLiteDatabase
    static createInMemory(arg0: any /*android.database.sqlite.SQLiteDatabase$OpenParams*/): SQLiteDatabase
    static deleteDatabase(arg0: java.io.File): boolean
    static findEditTable(arg0: string): string
    static openDatabase(
      arg0: java.io.File,
      arg1: any /*android.database.sqlite.SQLiteDatabase$OpenParams*/
    ): SQLiteDatabase
    static openDatabase(
      arg0: string,
      arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg2: int
    ): SQLiteDatabase
    static openDatabase(
      arg0: string,
      arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg2: int,
      arg3: any /*android.database.DatabaseErrorHandler*/
    ): SQLiteDatabase
    static openOrCreateDatabase(
      arg0: java.io.File,
      arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/
    ): SQLiteDatabase
    static openOrCreateDatabase(
      arg0: string,
      arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/
    ): SQLiteDatabase
    static openOrCreateDatabase(
      arg0: string,
      arg1: any /*android.database.sqlite.SQLiteDatabase$CursorFactory*/,
      arg2: any /*android.database.DatabaseErrorHandler*/
    ): SQLiteDatabase
    static releaseMemory(): int
    toString(): string
    update(arg0: string, arg1: any /*android.content.ContentValues*/, arg2: string, arg3: [string]): int
    updateWithOnConflict(
      arg0: string,
      arg1: any /*android.content.ContentValues*/,
      arg2: string,
      arg3: [string],
      arg4: int
    ): int
    validateSql(arg0: string, arg1: any /*android.os.CancellationSignal*/): void
    yieldIfContended(): boolean
    yieldIfContendedSafely(): boolean
    yieldIfContendedSafely(arg0: long): boolean
  } // end SQLiteDatabase
} // end namespace android.database.sqlite

declare namespace android.graphics {
  class Bitmap /* extends java.lang.Object implements android.os.Parcelable*/ {
    asShared(): Bitmap
    compress(arg0: any /*android.graphics.Bitmap$CompressFormat*/, arg1: int, arg2: java.io.OutputStream): boolean
    copy(arg0: any /*android.graphics.Bitmap$Config*/, arg1: boolean): Bitmap
    copyPixelsFromBuffer(arg0: any /*java.nio.Buffer*/): void
    copyPixelsToBuffer(arg0: any /*java.nio.Buffer*/): void
    describeContents(): int
    equals(arg0: java.lang.Object): boolean
    eraseColor(arg0: int): void
    eraseColor(arg0: long): void
    extractAlpha(): Bitmap
    extractAlpha(arg0: android.graphics.Paint, arg1: [int]): Bitmap
    getAllocationByteCount(): int
    getByteCount(): int
    getColor(arg0: int, arg1: int): any /*android.graphics.Color*/
    getColorSpace(): any /*android.graphics.ColorSpace*/
    getConfig(): any /*android.graphics.Bitmap$Config*/
    getDensity(): int
    getGenerationId(): int
    getHardwareBuffer(): any /*android.hardware.HardwareBuffer*/
    getHeight(): int
    getNinePatchChunk(): bytearray
    getPixel(arg0: int, arg1: int): int
    getPixels(arg0: [int], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    getRowBytes(): int
    getScaledHeight(arg0: any /*android.graphics.Canvas*/): int
    getScaledHeight(arg0: any /*android.util.DisplayMetrics*/): int
    getScaledHeight(arg0: int): int
    getScaledWidth(arg0: any /*android.graphics.Canvas*/): int
    getScaledWidth(arg0: any /*android.util.DisplayMetrics*/): int
    getScaledWidth(arg0: int): int
    getWidth(): int
    hasAlpha(): boolean
    hasMipMap(): boolean
    isMutable(): boolean
    isPremultiplied(): boolean
    isRecycled(): boolean
    prepareToDraw(): void
    reconfigure(arg0: int, arg1: int, arg2: any /*android.graphics.Bitmap$Config*/): void
    recycle(): void
    sameAs(arg0: Bitmap): boolean
    setColorSpace(arg0: any /*android.graphics.ColorSpace*/): void
    setConfig(arg0: any /*android.graphics.Bitmap$Config*/): void
    setDensity(arg0: int): void
    setHasAlpha(arg0: boolean): void
    setHasMipMap(arg0: boolean): void
    setHeight(arg0: int): void
    setPixel(arg0: int, arg1: int, arg2: int): void
    setPixels(arg0: [int], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    setPremultiplied(arg0: boolean): void
    setWidth(arg0: int): void
    static createBitmap(arg0: Bitmap): Bitmap
    static createBitmap(arg0: Bitmap, arg1: int, arg2: int, arg3: int, arg4: int): Bitmap
    static createBitmap(
      arg0: Bitmap,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: any /*android.graphics.Matrix*/,
      arg6: boolean
    ): Bitmap
    static createBitmap(arg0: [int], arg1: int, arg2: int, arg3: any /*android.graphics.Bitmap$Config*/): Bitmap
    static createBitmap(
      arg0: [int],
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: any /*android.graphics.Bitmap$Config*/
    ): Bitmap
    static createBitmap(arg0: android.graphics.Picture): Bitmap
    static createBitmap(
      arg0: android.graphics.Picture,
      arg1: int,
      arg2: int,
      arg3: any /*android.graphics.Bitmap$Config*/
    ): Bitmap
    static createBitmap(
      arg0: any /*android.util.DisplayMetrics*/,
      arg1: [int],
      arg2: int,
      arg3: int,
      arg4: any /*android.graphics.Bitmap$Config*/
    ): Bitmap
    static createBitmap(
      arg0: any /*android.util.DisplayMetrics*/,
      arg1: [int],
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: int,
      arg6: any /*android.graphics.Bitmap$Config*/
    ): Bitmap
    static createBitmap(
      arg0: any /*android.util.DisplayMetrics*/,
      arg1: int,
      arg2: int,
      arg3: any /*android.graphics.Bitmap$Config*/
    ): Bitmap
    static createBitmap(
      arg0: any /*android.util.DisplayMetrics*/,
      arg1: int,
      arg2: int,
      arg3: any /*android.graphics.Bitmap$Config*/,
      arg4: boolean
    ): Bitmap
    static createBitmap(
      arg0: any /*android.util.DisplayMetrics*/,
      arg1: int,
      arg2: int,
      arg3: any /*android.graphics.Bitmap$Config*/,
      arg4: boolean,
      arg5: any /*android.graphics.ColorSpace*/
    ): Bitmap
    static createBitmap(arg0: int, arg1: int, arg2: any /*android.graphics.Bitmap$Config*/): Bitmap
    static createBitmap(arg0: int, arg1: int, arg2: any /*android.graphics.Bitmap$Config*/, arg3: boolean): Bitmap
    static createBitmap(
      arg0: int,
      arg1: int,
      arg2: any /*android.graphics.Bitmap$Config*/,
      arg3: boolean,
      arg4: any /*android.graphics.ColorSpace*/
    ): Bitmap
    static createScaledBitmap(arg0: Bitmap, arg1: int, arg2: int, arg3: boolean): Bitmap
    static wrapHardwareBuffer(
      arg0: any /*android.hardware.HardwareBuffer*/,
      arg1: any /*android.graphics.ColorSpace*/
    ): Bitmap
    toString(): string
    writeToParcel(arg0: any /*android.os.Parcel*/, arg1: int): void
  } // end Bitmap

  class BitmapFactory /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    static decodeByteArray(arg0: bytearray, arg1: int, arg2: int): android.graphics.Bitmap
    static decodeByteArray(
      arg0: bytearray,
      arg1: int,
      arg2: int,
      arg3: any /*android.graphics.BitmapFactory$Options*/
    ): android.graphics.Bitmap
    static decodeFile(arg0: string): android.graphics.Bitmap
    static decodeFile(arg0: string, arg1: any /*android.graphics.BitmapFactory$Options*/): android.graphics.Bitmap
    static decodeFileDescriptor(arg0: any /*java.io.FileDescriptor*/): android.graphics.Bitmap
    static decodeFileDescriptor(
      arg0: any /*java.io.FileDescriptor*/,
      arg1: android.graphics.Rect,
      arg2: any /*android.graphics.BitmapFactory$Options*/
    ): android.graphics.Bitmap
    static decodeResource(arg0: any /*android.content.res.Resources*/, arg1: int): android.graphics.Bitmap
    static decodeResource(
      arg0: any /*android.content.res.Resources*/,
      arg1: int,
      arg2: any /*android.graphics.BitmapFactory$Options*/
    ): android.graphics.Bitmap
    static decodeResourceStream(
      arg0: any /*android.content.res.Resources*/,
      arg1: any /*android.util.TypedValue*/,
      arg2: java.io.InputStream,
      arg3: android.graphics.Rect,
      arg4: any /*android.graphics.BitmapFactory$Options*/
    ): android.graphics.Bitmap
    static decodeStream(arg0: java.io.InputStream): android.graphics.Bitmap
    static decodeStream(
      arg0: java.io.InputStream,
      arg1: android.graphics.Rect,
      arg2: any /*android.graphics.BitmapFactory$Options*/
    ): android.graphics.Bitmap
    toString(): string
  } // end BitmapFactory

  class Canvas extends java.lang.Object {
    clipOutPath(arg0: android.graphics.Path): boolean
    clipOutRect(arg0: android.graphics.Rect): boolean
    clipOutRect(arg0: android.graphics.RectF): boolean
    clipOutRect(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    clipOutRect(arg0: int, arg1: int, arg2: int, arg3: int): boolean
    clipPath(arg0: android.graphics.Path): boolean
    clipPath(arg0: android.graphics.Path, arg1: any /*android.graphics.Region$Op*/): boolean
    clipRect(arg0: android.graphics.Rect): boolean
    clipRect(arg0: android.graphics.Rect, arg1: any /*android.graphics.Region$Op*/): boolean
    clipRect(arg0: android.graphics.RectF): boolean
    clipRect(arg0: android.graphics.RectF, arg1: any /*android.graphics.Region$Op*/): boolean
    clipRect(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    clipRect(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.Region$Op*/): boolean
    clipRect(arg0: int, arg1: int, arg2: int, arg3: int): boolean
    concat(arg0: any /*android.graphics.Matrix*/): void
    disableZ(): void
    drawARGB(arg0: int, arg1: int, arg2: int, arg3: int): void
    drawArc(arg0: android.graphics.RectF, arg1: float, arg2: float, arg3: boolean, arg4: android.graphics.Paint): void
    drawArc(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: float,
      arg5: float,
      arg6: boolean,
      arg7: android.graphics.Paint
    ): void
    drawBitmap(
      arg0: [int],
      arg1: int,
      arg2: int,
      arg3: float,
      arg4: float,
      arg5: int,
      arg6: int,
      arg7: boolean,
      arg8: android.graphics.Paint
    ): void
    drawBitmap(
      arg0: [int],
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: int,
      arg6: int,
      arg7: boolean,
      arg8: android.graphics.Paint
    ): void
    drawBitmap(arg0: android.graphics.Bitmap, arg1: any /*android.graphics.Matrix*/, arg2: android.graphics.Paint): void
    drawBitmap(
      arg0: android.graphics.Bitmap,
      arg1: android.graphics.Rect,
      arg2: android.graphics.Rect,
      arg3: android.graphics.Paint
    ): void
    drawBitmap(
      arg0: android.graphics.Bitmap,
      arg1: android.graphics.Rect,
      arg2: android.graphics.RectF,
      arg3: android.graphics.Paint
    ): void
    drawBitmap(arg0: android.graphics.Bitmap, arg1: float, arg2: float, arg3: android.graphics.Paint): void
    drawBitmapMesh(
      arg0: android.graphics.Bitmap,
      arg1: int,
      arg2: int,
      arg3: [float],
      arg4: int,
      arg5: [int],
      arg6: int,
      arg7: android.graphics.Paint
    ): void
    drawCircle(arg0: float, arg1: float, arg2: float, arg3: android.graphics.Paint): void
    drawColor(arg0: int): void
    drawColor(arg0: int, arg1: any /*android.graphics.BlendMode*/): void
    drawColor(arg0: int, arg1: any /*android.graphics.PorterDuff$Mode*/): void
    drawColor(arg0: long): void
    drawColor(arg0: long, arg1: any /*android.graphics.BlendMode*/): void
    drawDoubleRoundRect(
      arg0: android.graphics.RectF,
      arg1: [float],
      arg2: android.graphics.RectF,
      arg3: [float],
      arg4: android.graphics.Paint
    ): void
    drawDoubleRoundRect(
      arg0: android.graphics.RectF,
      arg1: float,
      arg2: float,
      arg3: android.graphics.RectF,
      arg4: float,
      arg5: float,
      arg6: android.graphics.Paint
    ): void
    drawGlyphs(
      arg0: [int],
      arg1: int,
      arg2: [float],
      arg3: int,
      arg4: int,
      arg5: any /*android.graphics.fonts.Font*/,
      arg6: android.graphics.Paint
    ): void
    drawLine(arg0: float, arg1: float, arg2: float, arg3: float, arg4: android.graphics.Paint): void
    drawLines(arg0: [float], arg1: android.graphics.Paint): void
    drawLines(arg0: [float], arg1: int, arg2: int, arg3: android.graphics.Paint): void
    drawOval(arg0: android.graphics.RectF, arg1: android.graphics.Paint): void
    drawOval(arg0: float, arg1: float, arg2: float, arg3: float, arg4: android.graphics.Paint): void
    drawPaint(arg0: android.graphics.Paint): void
    drawPatch(arg0: any /*android.graphics.NinePatch*/, arg1: android.graphics.Rect, arg2: android.graphics.Paint): void
    drawPatch(
      arg0: any /*android.graphics.NinePatch*/,
      arg1: android.graphics.RectF,
      arg2: android.graphics.Paint
    ): void
    drawPath(arg0: android.graphics.Path, arg1: android.graphics.Paint): void
    drawPicture(arg0: android.graphics.Picture): void
    drawPicture(arg0: android.graphics.Picture, arg1: android.graphics.Rect): void
    drawPicture(arg0: android.graphics.Picture, arg1: android.graphics.RectF): void
    drawPoint(arg0: float, arg1: float, arg2: android.graphics.Paint): void
    drawPoints(arg0: [float], arg1: android.graphics.Paint): void
    drawPoints(arg0: [float], arg1: int, arg2: int, arg3: android.graphics.Paint): void
    drawPosText(arg0: chararray, arg1: int, arg2: int, arg3: [float], arg4: android.graphics.Paint): void
    drawPosText(arg0: string, arg1: [float], arg2: android.graphics.Paint): void
    drawRGB(arg0: int, arg1: int, arg2: int): void
    drawRect(arg0: android.graphics.Rect, arg1: android.graphics.Paint): void
    drawRect(arg0: android.graphics.RectF, arg1: android.graphics.Paint): void
    drawRect(arg0: float, arg1: float, arg2: float, arg3: float, arg4: android.graphics.Paint): void
    drawRenderNode(arg0: any /*android.graphics.RenderNode*/): void
    drawRoundRect(arg0: android.graphics.RectF, arg1: float, arg2: float, arg3: android.graphics.Paint): void
    drawRoundRect(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: float,
      arg5: float,
      arg6: android.graphics.Paint
    ): void
    drawText(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: float,
      arg4: float,
      arg5: android.graphics.Paint
    ): void
    drawText(arg0: chararray, arg1: int, arg2: int, arg3: float, arg4: float, arg5: android.graphics.Paint): void
    drawText(arg0: string, arg1: float, arg2: float, arg3: android.graphics.Paint): void
    drawText(arg0: string, arg1: int, arg2: int, arg3: float, arg4: float, arg5: android.graphics.Paint): void
    drawTextOnPath(
      arg0: chararray,
      arg1: int,
      arg2: int,
      arg3: android.graphics.Path,
      arg4: float,
      arg5: float,
      arg6: android.graphics.Paint
    ): void
    drawTextOnPath(
      arg0: string,
      arg1: android.graphics.Path,
      arg2: float,
      arg3: float,
      arg4: android.graphics.Paint
    ): void
    drawTextRun(
      arg0: any /*android.graphics.text.MeasuredText*/,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: float,
      arg6: float,
      arg7: boolean,
      arg8: android.graphics.Paint
    ): void
    drawTextRun(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: float,
      arg6: float,
      arg7: boolean,
      arg8: android.graphics.Paint
    ): void
    drawTextRun(
      arg0: chararray,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: float,
      arg6: float,
      arg7: boolean,
      arg8: android.graphics.Paint
    ): void
    drawVertices(
      arg0: any /*android.graphics.Canvas$VertexMode*/,
      arg1: int,
      arg2: [float],
      arg3: int,
      arg4: [float],
      arg5: int,
      arg6: [int],
      arg7: int,
      arg8: [any /*short*/],
      arg9: int,
      arg10: int,
      arg11: android.graphics.Paint
    ): void
    enableZ(): void
    equals(arg0: java.lang.Object): boolean
    getClipBounds(): android.graphics.Rect
    getClipBounds(arg0: android.graphics.Rect): boolean
    getDensity(): int
    getDrawFilter(): any /*android.graphics.DrawFilter*/
    getHeight(): int
    getMatrix(): any /*android.graphics.Matrix*/
    getMatrix(arg0: any /*android.graphics.Matrix*/): void
    getMaximumBitmapHeight(): int
    getMaximumBitmapWidth(): int
    getSaveCount(): int
    getWidth(): int
    isHardwareAccelerated(): boolean
    isOpaque(): boolean
    quickReject(arg0: android.graphics.Path): boolean
    quickReject(arg0: android.graphics.Path, arg1: any /*android.graphics.Canvas$EdgeType*/): boolean
    quickReject(arg0: android.graphics.RectF): boolean
    quickReject(arg0: android.graphics.RectF, arg1: any /*android.graphics.Canvas$EdgeType*/): boolean
    quickReject(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    quickReject(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: any /*android.graphics.Canvas$EdgeType*/
    ): boolean
    restore(): void
    restoreToCount(arg0: int): void
    rotate(arg0: float): void
    rotate(arg0: float, arg1: float, arg2: float): void
    save(): int
    saveLayer(arg0: android.graphics.RectF, arg1: android.graphics.Paint): int
    saveLayer(arg0: android.graphics.RectF, arg1: android.graphics.Paint, arg2: int): int
    saveLayer(arg0: float, arg1: float, arg2: float, arg3: float, arg4: android.graphics.Paint): int
    saveLayer(arg0: float, arg1: float, arg2: float, arg3: float, arg4: android.graphics.Paint, arg5: int): int
    saveLayerAlpha(arg0: android.graphics.RectF, arg1: int): int
    saveLayerAlpha(arg0: android.graphics.RectF, arg1: int, arg2: int): int
    saveLayerAlpha(arg0: float, arg1: float, arg2: float, arg3: float, arg4: int): int
    saveLayerAlpha(arg0: float, arg1: float, arg2: float, arg3: float, arg4: int, arg5: int): int
    scale(arg0: float, arg1: float): void
    scale(arg0: float, arg1: float, arg2: float, arg3: float): void
    setBitmap(arg0: android.graphics.Bitmap): void
    setDensity(arg0: int): void
    setDrawFilter(arg0: any /*android.graphics.DrawFilter*/): void
    setMatrix(arg0: any /*android.graphics.Matrix*/): void
    skew(arg0: float, arg1: float): void
    toString(): string
    translate(arg0: float, arg1: float): void
  } // end Canvas

  class Paint extends java.lang.Object {
    ascent(): float
    breakText(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: boolean,
      arg4: float,
      arg5: [float]
    ): int
    breakText(arg0: chararray, arg1: int, arg2: int, arg3: float, arg4: [float]): int
    breakText(arg0: string, arg1: boolean, arg2: float, arg3: [float]): int
    clearShadowLayer(): void
    descent(): float
    equals(arg0: java.lang.Object): boolean
    equalsForTextMeasurement(arg0: Paint): boolean
    getAlpha(): int
    getBlendMode(): any /*android.graphics.BlendMode*/
    getColor(): int
    getColorFilter(): any /*android.graphics.ColorFilter*/
    getColorLong(): long
    getEndHyphenEdit(): int
    getFillPath(arg0: android.graphics.Path, arg1: android.graphics.Path): boolean
    getFlags(): int
    getFontFeatureSettings(): string
    getFontMetrics(): any /*android.graphics.Paint$FontMetrics*/
    getFontMetrics(arg0: any /*android.graphics.Paint$FontMetrics*/): float
    getFontMetricsInt(): any /*android.graphics.Paint$FontMetricsInt*/
    getFontMetricsInt(arg0: any /*android.graphics.Paint$FontMetricsInt*/): int
    getFontSpacing(): float
    getFontVariationSettings(): string
    getHinting(): int
    getLetterSpacing(): float
    getMaskFilter(): any /*android.graphics.MaskFilter*/
    getOffsetForAdvance(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: boolean,
      arg6: float
    ): int
    getOffsetForAdvance(arg0: chararray, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean, arg6: float): int
    getPathEffect(): any /*android.graphics.PathEffect*/
    getRunAdvance(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: boolean,
      arg6: int
    ): float
    getRunAdvance(arg0: chararray, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean, arg6: int): float
    getShader(): any /*android.graphics.Shader*/
    getShadowLayerColor(): int
    getShadowLayerColorLong(): long
    getShadowLayerDx(): float
    getShadowLayerDy(): float
    getShadowLayerRadius(): float
    getStartHyphenEdit(): int
    getStrikeThruPosition(): float
    getStrikeThruThickness(): float
    getStrokeCap(): any /*android.graphics.Paint$Cap*/
    getStrokeJoin(): any /*android.graphics.Paint$Join*/
    getStrokeMiter(): float
    getStrokeWidth(): float
    getStyle(): any /*android.graphics.Paint$Style*/
    getTextAlign(): any /*android.graphics.Paint$Align*/
    getTextBounds(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int, arg3: android.graphics.Rect): void
    getTextBounds(arg0: chararray, arg1: int, arg2: int, arg3: android.graphics.Rect): void
    getTextBounds(arg0: string, arg1: int, arg2: int, arg3: android.graphics.Rect): void
    getTextLocale(): any /*java.util.Locale*/
    getTextLocales(): any /*android.os.LocaleList*/
    getTextPath(arg0: chararray, arg1: int, arg2: int, arg3: float, arg4: float, arg5: android.graphics.Path): void
    getTextPath(arg0: string, arg1: int, arg2: int, arg3: float, arg4: float, arg5: android.graphics.Path): void
    getTextRunAdvances(
      arg0: chararray,
      arg1: int,
      arg2: int,
      arg3: int,
      arg4: int,
      arg5: boolean,
      arg6: [float],
      arg7: int
    ): float
    getTextRunCursor(
      arg0: any /*java.lang.CharSequence*/,
      arg1: int,
      arg2: int,
      arg3: boolean,
      arg4: int,
      arg5: int
    ): int
    getTextRunCursor(arg0: chararray, arg1: int, arg2: int, arg3: boolean, arg4: int, arg5: int): int
    getTextScaleX(): float
    getTextSize(): float
    getTextSkewX(): float
    getTextWidths(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int, arg3: [float]): int
    getTextWidths(arg0: chararray, arg1: int, arg2: int, arg3: [float]): int
    getTextWidths(arg0: string, arg1: [float]): int
    getTextWidths(arg0: string, arg1: int, arg2: int, arg3: [float]): int
    getTypeface(): any /*android.graphics.Typeface*/
    getUnderlinePosition(): float
    getUnderlineThickness(): float
    getWordSpacing(): float
    getXfermode(): any /*android.graphics.Xfermode*/
    hasGlyph(arg0: string): boolean
    isAntiAlias(): boolean
    isDither(): boolean
    isElegantTextHeight(): boolean
    isFakeBoldText(): boolean
    isFilterBitmap(): boolean
    isLinearText(): boolean
    isStrikeThruText(): boolean
    isSubpixelText(): boolean
    isUnderlineText(): boolean
    measureText(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): float
    measureText(arg0: chararray, arg1: int, arg2: int): float
    measureText(arg0: string): float
    measureText(arg0: string, arg1: int, arg2: int): float
    reset(): void
    set(arg0: Paint): void
    setARGB(arg0: int, arg1: int, arg2: int, arg3: int): void
    setAlpha(arg0: int): void
    setAntiAlias(arg0: boolean): void
    setBlendMode(arg0: any /*android.graphics.BlendMode*/): void
    setColor(arg0: int): void
    setColor(arg0: long): void
    setColorFilter(arg0: any /*android.graphics.ColorFilter*/): any /*android.graphics.ColorFilter*/
    setDither(arg0: boolean): void
    setElegantTextHeight(arg0: boolean): void
    setEndHyphenEdit(arg0: int): void
    setFakeBoldText(arg0: boolean): void
    setFilterBitmap(arg0: boolean): void
    setFlags(arg0: int): void
    setFontFeatureSettings(arg0: string): void
    setFontVariationSettings(arg0: string): boolean
    setHinting(arg0: int): void
    setLetterSpacing(arg0: float): void
    setLinearText(arg0: boolean): void
    setMaskFilter(arg0: any /*android.graphics.MaskFilter*/): any /*android.graphics.MaskFilter*/
    setPathEffect(arg0: any /*android.graphics.PathEffect*/): any /*android.graphics.PathEffect*/
    setShader(arg0: any /*android.graphics.Shader*/): any /*android.graphics.Shader*/
    setShadowLayer(arg0: float, arg1: float, arg2: float, arg3: int): void
    setShadowLayer(arg0: float, arg1: float, arg2: float, arg3: long): void
    setStartHyphenEdit(arg0: int): void
    setStrikeThruText(arg0: boolean): void
    setStrokeCap(arg0: any /*android.graphics.Paint$Cap*/): void
    setStrokeJoin(arg0: any /*android.graphics.Paint$Join*/): void
    setStrokeMiter(arg0: float): void
    setStrokeWidth(arg0: float): void
    setStyle(arg0: any /*android.graphics.Paint$Style*/): void
    setSubpixelText(arg0: boolean): void
    setTextAlign(arg0: any /*android.graphics.Paint$Align*/): void
    setTextLocale(arg0: any /*java.util.Locale*/): void
    setTextLocales(arg0: any /*android.os.LocaleList*/): void
    setTextScaleX(arg0: float): void
    setTextSize(arg0: float): void
    setTextSkewX(arg0: float): void
    setTypeface(arg0: any /*android.graphics.Typeface*/): any /*android.graphics.Typeface*/
    setUnderlineText(arg0: boolean): void
    setWordSpacing(arg0: float): void
    setXfermode(arg0: any /*android.graphics.Xfermode*/): any /*android.graphics.Xfermode*/
    toString(): string
  } // end Paint

  class Path extends java.lang.Object {
    addArc(arg0: android.graphics.RectF, arg1: float, arg2: float): void
    addArc(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
    addCircle(arg0: float, arg1: float, arg2: float, arg3: any /*android.graphics.Path$Direction*/): void
    addOval(arg0: android.graphics.RectF, arg1: any /*android.graphics.Path$Direction*/): void
    addOval(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.Path$Direction*/): void
    addPath(arg0: Path): void
    addPath(arg0: Path, arg1: any /*android.graphics.Matrix*/): void
    addPath(arg0: Path, arg1: float, arg2: float): void
    addRect(arg0: android.graphics.RectF, arg1: any /*android.graphics.Path$Direction*/): void
    addRect(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.Path$Direction*/): void
    addRoundRect(arg0: android.graphics.RectF, arg1: [float], arg2: any /*android.graphics.Path$Direction*/): void
    addRoundRect(
      arg0: android.graphics.RectF,
      arg1: float,
      arg2: float,
      arg3: any /*android.graphics.Path$Direction*/
    ): void
    addRoundRect(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: [float],
      arg5: any /*android.graphics.Path$Direction*/
    ): void
    addRoundRect(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: float,
      arg5: float,
      arg6: any /*android.graphics.Path$Direction*/
    ): void
    approximate(arg0: float): [float]
    arcTo(arg0: android.graphics.RectF, arg1: float, arg2: float): void
    arcTo(arg0: android.graphics.RectF, arg1: float, arg2: float, arg3: boolean): void
    arcTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean): void
    close(): void
    computeBounds(arg0: android.graphics.RectF, arg1: boolean): void
    cubicTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
    equals(arg0: java.lang.Object): boolean
    getFillType(): any /*android.graphics.Path$FillType*/
    incReserve(arg0: int): void
    isConvex(): boolean
    isEmpty(): boolean
    isInverseFillType(): boolean
    isRect(arg0: android.graphics.RectF): boolean
    lineTo(arg0: float, arg1: float): void
    moveTo(arg0: float, arg1: float): void
    offset(arg0: float, arg1: float): void
    offset(arg0: float, arg1: float, arg2: Path): void
    op(arg0: Path, arg1: Path, arg2: any /*android.graphics.Path$Op*/): boolean
    op(arg0: Path, arg1: any /*android.graphics.Path$Op*/): boolean
    quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
    rCubicTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
    rLineTo(arg0: float, arg1: float): void
    rMoveTo(arg0: float, arg1: float): void
    rQuadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
    reset(): void
    rewind(): void
    set(arg0: Path): void
    setFillType(arg0: any /*android.graphics.Path$FillType*/): void
    setLastPoint(arg0: float, arg1: float): void
    toString(): string
    toggleInverseFillType(): void
    transform(arg0: any /*android.graphics.Matrix*/): void
    transform(arg0: any /*android.graphics.Matrix*/, arg1: Path): void
  } // end Path

  class Picture extends java.lang.Object {
    beginRecording(arg0: int, arg1: int): any /*android.graphics.Canvas*/
    draw(arg0: any /*android.graphics.Canvas*/): void
    endRecording(): void
    equals(arg0: java.lang.Object): boolean
    getHeight(): int
    getWidth(): int
    requiresHardwareAcceleration(): boolean
    toString(): string
  } // end Picture

  class Rect /* extends java.lang.Object implements android.os.Parcelable*/ {
    centerX(): int
    centerY(): int
    contains(arg0: Rect): boolean
    contains(arg0: int, arg1: int): boolean
    contains(arg0: int, arg1: int, arg2: int, arg3: int): boolean
    describeContents(): int
    equals(arg0: java.lang.Object): boolean
    exactCenterX(): float
    exactCenterY(): float
    flattenToString(): string
    height(): int
    inset(arg0: any /*android.graphics.Insets*/): void
    inset(arg0: int, arg1: int): void
    inset(arg0: int, arg1: int, arg2: int, arg3: int): void
    intersect(arg0: Rect): boolean
    intersect(arg0: int, arg1: int, arg2: int, arg3: int): boolean
    intersects(arg0: int, arg1: int, arg2: int, arg3: int): boolean
    isEmpty(): boolean
    offset(arg0: int, arg1: int): void
    offsetTo(arg0: int, arg1: int): void
    readFromParcel(arg0: any /*android.os.Parcel*/): void
    set(arg0: Rect): void
    set(arg0: int, arg1: int, arg2: int, arg3: int): void
    setEmpty(): void
    setIntersect(arg0: Rect, arg1: Rect): boolean
    sort(): void
    static intersects(arg0: Rect, arg1: Rect): boolean
    static unflattenFromString(arg0: string): Rect
    toShortString(): string
    toString(): string
    union(arg0: Rect): void
    union(arg0: int, arg1: int): void
    union(arg0: int, arg1: int, arg2: int, arg3: int): void
    width(): int
    writeToParcel(arg0: any /*android.os.Parcel*/, arg1: int): void
  } // end Rect

  class RectF /* extends java.lang.Object implements android.os.Parcelable*/ {
    centerX(): float
    centerY(): float
    contains(arg0: RectF): boolean
    contains(arg0: float, arg1: float): boolean
    contains(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    describeContents(): int
    equals(arg0: java.lang.Object): boolean
    height(): float
    inset(arg0: float, arg1: float): void
    intersect(arg0: RectF): boolean
    intersect(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    intersects(arg0: float, arg1: float, arg2: float, arg3: float): boolean
    isEmpty(): boolean
    offset(arg0: float, arg1: float): void
    offsetTo(arg0: float, arg1: float): void
    readFromParcel(arg0: any /*android.os.Parcel*/): void
    round(arg0: android.graphics.Rect): void
    roundOut(arg0: android.graphics.Rect): void
    set(arg0: RectF): void
    set(arg0: android.graphics.Rect): void
    set(arg0: float, arg1: float, arg2: float, arg3: float): void
    setEmpty(): void
    setIntersect(arg0: RectF, arg1: RectF): boolean
    sort(): void
    static intersects(arg0: RectF, arg1: RectF): boolean
    toShortString(): string
    toString(): string
    union(arg0: RectF): void
    union(arg0: float, arg1: float): void
    union(arg0: float, arg1: float, arg2: float, arg3: float): void
    width(): float
    writeToParcel(arg0: any /*android.os.Parcel*/, arg1: int): void
  } // end RectF

  class Color /* extends java.lang.Object*/ {
    alpha(): float
    blue(): float
    convert(arg0: any /*android.graphics.ColorSpace*/): Color
    equals(arg0: any /*java.lang.Object*/): boolean
    getColorSpace(): any /*android.graphics.ColorSpace*/
    getComponent(arg0: int): float
    getComponentCount(): int
    getComponents(): [float]
    getComponents(arg0: [float]): [float]
    getModel(): any /*android.graphics.ColorSpace$Model*/
    green(): float
    isSrgb(): boolean
    isWideGamut(): boolean
    luminance(): float
    pack(): long
    red(): float
    static HSVToColor(arg0: [float]): int
    static HSVToColor(arg0: int, arg1: [float]): int
    static RGBToHSV(arg0: int, arg1: int, arg2: int, arg3: [float]): void
    static alpha(arg0: int): int
    static alpha(arg0: long): float
    static argb(arg0: float, arg1: float, arg2: float, arg3: float): int
    static argb(arg0: int, arg1: int, arg2: int, arg3: int): int
    static blue(arg0: int): int
    static blue(arg0: long): float
    static colorSpace(arg0: long): any /*android.graphics.ColorSpace*/
    static colorToHSV(arg0: int, arg1: [float]): void
    static convert(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: any /*android.graphics.ColorSpace$Connector*/
    ): long
    static convert(
      arg0: float,
      arg1: float,
      arg2: float,
      arg3: float,
      arg4: any /*android.graphics.ColorSpace*/,
      arg5: any /*android.graphics.ColorSpace*/
    ): long
    static convert(arg0: int, arg1: any /*android.graphics.ColorSpace*/): long
    static convert(arg0: long, arg1: any /*android.graphics.ColorSpace$Connector*/): long
    static convert(arg0: long, arg1: any /*android.graphics.ColorSpace*/): long
    static green(arg0: int): int
    static green(arg0: long): float
    static isInColorSpace(arg0: long, arg1: any /*android.graphics.ColorSpace*/): boolean
    static isSrgb(arg0: long): boolean
    static isWideGamut(arg0: long): boolean
    static luminance(arg0: int): float
    static luminance(arg0: long): float
    static pack(arg0: float, arg1: float, arg2: float): long
    static pack(arg0: float, arg1: float, arg2: float, arg3: float): long
    static pack(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.ColorSpace*/): long
    static pack(arg0: int): long
    static parseColor(arg0: string): int
    static red(arg0: int): int
    static red(arg0: long): float
    static rgb(arg0: float, arg1: float, arg2: float): int
    static rgb(arg0: int, arg1: int, arg2: int): int
    static toArgb(arg0: long): int
    static valueOf(arg0: [float], arg1: any /*android.graphics.ColorSpace*/): Color
    static valueOf(arg0: float, arg1: float, arg2: float): Color
    static valueOf(arg0: float, arg1: float, arg2: float, arg3: float): Color
    static valueOf(arg0: float, arg1: float, arg2: float, arg3: float, arg4: any /*android.graphics.ColorSpace*/): Color
    static valueOf(arg0: int): Color
    static valueOf(arg0: long): Color
    toArgb(): int
    toString(): string
  } // end Color

  class Typeface /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    getStyle(): int
    getWeight(): int
    isBold(): boolean
    isItalic(): boolean
    static create(arg0: Typeface, arg1: int): Typeface
    static create(arg0: Typeface, arg1: int, arg2: boolean): Typeface
    static create(arg0: string, arg1: int): Typeface
    static createFromAsset(arg0: any /*android.content.res.AssetManager*/, arg1: string): Typeface
    static createFromFile(arg0: java.io.File): Typeface
    static createFromFile(arg0: string): Typeface
    static defaultFromStyle(arg0: int): Typeface
    toString(): string
  } // end Typeface
} // end namespace android.graphics
