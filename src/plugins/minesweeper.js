// 自定义列提示字母
const COLUMN_NAME = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// 状态类
export const GameState = {
  PREPARE: 1,
  GAMING: 2,
  WIN: 3,
  FAIL: 4,
}

// 单个格子
class Cell {
  constructor(is_mine, row = 0, column = 0, is_mined = false, is_marked = false) {
    this.is_mine = is_mine
    this.is_mined = is_mined
    this.is_marked = is_marked
    this.row = row
    this.column = column
    this.is_checked = false
  }
  toString() {
    return `[Cell] is_mine:${this.is_mine} is_marked:${this.is_marked} is_mined:${this.is_mined}`
  }
}

// 图片类，暂时不用
class Image {
  constructor(width, heidth) {
    this.width = width
    this.heidth = heidth
  }
}

// 扫雷主体类
export default class MineSweeper {
  constructor(row, column, mines) {
    if (row > 26 || column > 26) throw ValueError('暂不支持这么大的游戏盘')
    if (mines >= row * column || mines == 0) throw ValueError('非法操作')
    if (mines < column - 1 || mines < row - 1) throw ValueError('就不能来点难的吗')
    this.row = row
    this.column = column
    this.mines = mines
    this.startTime = new Date()
    this.actions = 0
    this.font = ''
    // this.font = ImageFont.truetype("00TT.TTF.", 40)
    // this.panel = [[Cell(False, row=r, column=c) for c in range(column)] for r in range(row)]
    this.panel = new Array(column).fill([])
    for (let c = 0; c < column; c++) {
      for (let r = 0; r < row; r++) {
        this.panel[c][r] = new Cell(false, (row = r), (column = c))
      }
    }
    this.state = GameState.PREPARE
  }

  // 字面量输出
  toString() {
    return `[MineSweeper] ${this.mines} in ${this.row}*${this.column}`
  }

  // 绘制棋盘
  draw_panel() {
    let Bitmap = Java.type('android.graphics.Bitmap')
    let Config = Java.type('android.graphics.Bitmap$Config')
    let start = new Date()
    this.img = Bitmap.createBitmap(this.column * 80, this.row * 80, Config.ARGB_8888) // 图片对象
    this.#draw_split_line(this.img)
    this.#draw_cell_cover(this.img)
    saveBitmap(this.img, '/sdcard/DIC/data/cache/minesweeper.png')
  }

  // 内部方法：绘制分割线
  #draw_split_line(img) {
    let Paint = Java.type('android.graphics.Paint')
    let Canvas = Java.type('android.graphics.Canvas')
    let Color = Java.type('android.graphics.Color')
    let paint = new Paint() // 画笔
    let canva = new Canvas(img) // 画布

    paint.setStrokeWidth(5)
    paint.setColor(Color.argb(241, 148, 138, 0.5)) // 画笔颜色
    canva.drawARGB(255, 255, 255, 255) // 画布背景色

    for (let i = 0; i < this.row; i++) {
      canva.drawLine(0, i * 80, this.column * 80, i * 80)
    }
    for (let i = 0; i < this.column; i++) {
      canva.drawLine(i * 80, 0, i * 80, this.row * 80)
    }
  }
  // 绘制标记
  #draw_cell_cover(img) {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; i < this.column; i++) {
        cell = self.panel[i][j]
        if (this.state == GameState.FAIL && cell.is_mine) {
          draw.rectangle(
            (j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1),
            (fill = ImageColor.getrgb('red'))
          )
          continue
        }
        if (cell.is_marked) {
          draw.rectangle(
            (j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1),
            (fill = ImageColor.getrgb('blue'))
          )
          continue
        }
        if (!cell.is_mined) {
          draw.rectangle(
            (j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1),
            (fill = ImageColor.getrgb('gray'))
          )
        }
      }
    }
  }
}

// 将 Bitmap 保存为图片
function saveBitmap(bitmap, path) {
  let File = Java.type('java.io.File')
  let FileOutputStream = Java.type('java.io.FileOutputStream')
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
