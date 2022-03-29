import FileOutputStream from "../../java/io/FileOutputStream.js"

/** Bitmap */
export default class Bitmap {
  /**  */
  static createScaledBitmap(src: Bitmap, width: number, height: number, filter: boolean) {
    let Bitmap = Java.type('android.graphics.Bitmap')
    return Bitmap.createScaledBitmap(src, width, height, filter)
  }
  /** 以src为原图生成不可变的新图像 */
  static createBitmapFromSource(src: Bitmap) {
    let Bitmap = Java.type('android.graphics.Bitmap')
    return Bitmap.createBitmapFromFile(src)
  }
  /**  */
  static createBitmap(width: number, height: number, config: any) {
    let Bitmap = Java.type('android.graphics.Bitmap')
    return new Bitmap.createBitmap(width, height, config)
  }
  static Config: any
  constructor() {
    let Bitmap = Java.type('android.graphics.Bitmap')
    return new Bitmap()
  }
  compress(format, quality: number, out: FileOutputStream) {
    this.compress(format, quality, out)
  }
  getWidth() {
    return this.getWidth()
  }
  getHeigth() {
    return this.getHeigth()
  }
  /** 是否可修改 */
  isMutable() {
    return this.isMutable()
  }
}
