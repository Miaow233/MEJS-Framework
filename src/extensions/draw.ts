/**
 * 将位图保存成图片文件
 * @param {Bitmap} bitmap
 * @param {string} path
 */

/**  */
class FileOutputStream {
  path: string
  constructor(file: File) {
    let FileOutputStream = Java.type('java.io.FileOutputStream')
    return new FileOutputStream(file)
  }
  write(data) {
    let file = new File(this.path)
    if (file.exists()) {
      file.delete()
    }
    file.createNewFile()
    let out = new FileOutputStream(file)
    out.write(data)
    out.close()
  }
  close() {
    throw new Error('Method not implemented.')
  }
}

/**  */
export class Bitmap {
  static createBitmap: any
  static Config: any
  constructor() {
    let Bitmap = Java.type('android.graphics.Bitmap')
    return new Bitmap()
  }
  compress(format, quality: number, out: FileOutputStream) {
    throw new Error('Method not implemented.')
  }
}

export class Paint {
  setColor(arg0: any) {
    throw new Error('Method not implemented.')
  }
  setStrokeWidth(arg0: number) {
    throw new Error('Method not implemented.')
  }
  constructor() {
    let Paint = Java.type('android.graphics.Paint')
    return new Paint()
  }
}

export class Canvas {
  drawARGB(arg0: number, arg1: number, arg2: number, arg3: number) {
    throw new Error('Method not implemented.')
  }
  drawLine(boder: number, arg1: number, arg2: number, arg3: number, paint: Paint) {
    throw new Error('Method not implemented.')
  }
  constructor(bitmap: Bitmap) {
    let Canvas = Java.type('android.graphics.Canvas')
    return new Canvas(bitmap)
  }
}

export class Color {
  static argb(arg0: number, arg1: number, arg2: number, arg3: number): any {
    throw new Error('Method not implemented.')
  }
  constructor() {
    let Color = Java.type('android.graphics.Color')
    return new Color()
  }
}

import { File } from './java.js'
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
 * 获取画布大小
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

function drawPanel(x: number, y: number) {
  let { width, heidth, boder, spacing } = getSize(x, y)
  //let Bitmap = Java.type('android.graphics.Bitmap')
  //let Paint = Java.type('android.graphics.Paint')
  //let Canvas = Java.type('android.graphics.Canvas')
  //let Color = Java.type('android.graphics.Color')
  //let Config = Java.type('android.graphics.Bitmap$Config')

  let img = new Bitmap.createBitmap(width, heidth, Bitmap.Config.ARGB_8888) // 图片对象
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

export { saveBitmap, drawPanel }
