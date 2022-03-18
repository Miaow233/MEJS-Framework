import { File } from './java.js'

class FileOutputStream {
  path: string
  constructor(file: File) {
    let FileOutputStream = Java.type('java.io.FileOutputStream')
    return new FileOutputStream(file)
  }
  write(data) {
    this.write(data)
  }
  close() {
    this.close()
  }
}
/** 通过文件创建Bitmap */
function getBitmapFromFile(pathName: string): Bitmap {
  let BitmapFactory = Java.type('android.graphics.BitmapFactory')
  return BitmapFactory.decodeFile(pathName);
}

/** Bitmap */
export class Bitmap {
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

export class Paint {
  setColor(color: any) {
    this.setColor(color)
  }
  setStrokeWidth(strokeWidth: number) {
    this.setStrokeWidth(strokeWidth)
  }
  constructor() {
    let Paint = Java.type('android.graphics.Paint')
    return new Paint()
  }
}

export class Canvas {
  drawARGB(a: number, r: number, g: number, b: number) {
    this.drawARGB(a, r, g, b)
  }
  drawLine(ax: number, ay: number, bx: number, by: number, paint: Paint) {
    this.drawLine(ax, ay, bx, by, paint)
  }
  constructor(bitmap: Bitmap) {
    let Canvas = Java.type('android.graphics.Canvas')
    return new Canvas(bitmap)
  }
}

export class Color {
  static argb(a: number, r: number, g: number, b: number): Color {
    let Color = Java.type('android.graphics.Color')
    return Color.argb(a, r, g, b)
  }
  constructor() {
    let Color = Java.type('android.graphics.Color')
    return new Color()
  }
}

/**
 * 将位图保存成图片文件
 * @param {Bitmap} bitmap
 * @param {string} path
 */
function saveBitmap(bitmap: Bitmap, path: string): void {
  //let FileOutputStream = Java.type('java.io.FileOutputStream')
  let CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
  let file = new File(path)
  if (file.exists()) {
    file.delete()
  }
  file.createNewFile()
  let out = new FileOutputStream(file)
  bitmap.compress(CompressFormat.PNG, 80, out)
  out.close()
}

/**
 * 生成画布大小
 * @param {number} x 行数
 * @param {number} y 列数
 * @returns {object}
 */
function getSize(x: number, y: number): { width: number; heidth: number; boder; spacing } {
  let boder = 60 // 外留边距
  let spacing = 80 // 行间距
  return {
    width: boder * 2 + spacing * x,
    heidth: boder * 2 + spacing * y,
    boder: boder,
    spacing: spacing,
  }
}

/** 绘制扫雷 */
function drawPanel(x: number, y: number) {
  let { width, heidth, boder, spacing } = getSize(x, y)

  let img = Bitmap.createBitmap(width, heidth, Bitmap.Config.ARGB_8888) // 图片对象
  let paint = new Paint() // 画笔
  let canva = new Canvas(img) // 画布

  paint.setStrokeWidth(5)
  paint.setColor(Color.argb(255, 255, 153, 204)) // 画笔颜色
  canva.drawARGB(255, 255, 255, 255) // 画布背景色

  // 绘制格子
  for (let i = 1; i < x; i++) {
    canva.drawLine(boder, boder + spacing * i, width - boder, boder + spacing * i, paint) // x
  }
  for (let i = 1; i < y; i++) {
    canva.drawLine(boder + spacing * i, boder, boder + spacing * i, heidth - boder, paint) // y
  }

  // 添加边框
  canva.drawLine(boder, boder, width - boder, boder, paint) // x
  canva.drawLine(boder, boder, boder, heidth - boder, paint) // y
  canva.drawLine(boder, heidth - boder, width - boder, heidth - boder, paint) // x
  canva.drawLine(width - boder, boder, width - boder, heidth - boder, paint) // y
  saveBitmap(img, '/sdcard/DIC/data/cache/temp.png')
}

export class ImageWriter {
  bitmap: Bitmap
  constructor() {}
  drawLine(ax: number, ay: number, bx: number, by: number) {}
  drawCircle(x: number, y: number, r) {}
  drawRect(ax, ay, bx, by) {}
  drawBitmap(bitmap, x, y) {}
  drawText(text, x, y) {}
  drawPoint(x, y) {}
}
export { saveBitmap, drawPanel }
