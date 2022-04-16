import { saveBitmap } from '../../extensions/draw.js'
import { Bitmap, Canvas, Color, Paint, Rect, Typeface } from '../../packages/android.js'
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
  is_mine: boolean
  is_mined: boolean
  is_marked: boolean
  row: number
  column: number
  is_checked: boolean

  constructor(is_mine: boolean, row = 0, column = 0, is_mined = false, is_marked = false) {
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

// 扫雷主体类
export class MineSweeper {
  row: number
  column: number
  mines: number
  startTime: Date
  actions: number
  font: android.graphics.Typeface
  panel: Array<Array<Cell>>
  state: number
  img: android.graphics.Bitmap

  constructor(row: number, column: number, mines: number) {
    if (row > 26 || column > 26) throw Error('暂不支持这么大的游戏盘')
    if (mines >= row * column || mines == 0) throw Error('非法操作')
    if (mines < column - 1 || mines < row - 1) throw Error('就不能来点难的吗')
    this.row = row
    this.column = column
    this.mines = mines
    this.startTime = new Date()
    this.actions = 0
    this.font = Typeface.create('00TT.TTF.', 40)
    this.panel = new Array(column).fill([])
    for (let c = 0; c < column; c++) {
      for (let r = 0; r < row; r++) {
        this.panel[c][r] = new Cell(false, r, c)
      }
    }
    this.state = GameState.PREPARE
  }

  static #get_count_text_color(count: number): number {
    if (count == 1) return Color.rgb(124, 252, 0) // green
    if (count == 2) return Color.rgb(255, 165, 0) // orange
    if (count == 3) return Color.rgb(255, 0, 0) // red
    if (count == 4) return Color.rgb(139, 0, 0) // darkred
    return Color.rgb(0, 0, 0) // black
  }

  static parse_input(input_text: string) {
    if (input_text.length != 2) new Error('非法位置')
    return [
      COLUMN_NAME.indexOf(input_text[0].toLocaleUpperCase()),
      COLUMN_NAME.indexOf(input_text[1].toLocaleUpperCase()),
    ]
  }

  #is_valid_location(row: number, column: number): boolean {
    if (row > this.row - 1 || column > this.column - 1 || row < 0 || column < 0) return false
    return true
  }

  // 字面量输出
  toString() {
    return `[MineSweeper] ${this.mines} in ${this.row}*${this.column}`
  }

  // 绘制棋盘
  draw_panel(): void {
    let Config = Java.type('android.graphics.Bitmap$Config')
    let start = new Date().getTime()
    this.img = Bitmap.createBitmap(
      this.column * 80,
      this.row * 80,
      // @ts-ignore
      Config.ARGB_8888
    ) // 图片对象
    this.#draw_split_line(this.img)
    this.#draw_cell_cover(this.img)
    this.#draw_cell(this.img)
    saveBitmap(this.img, '/sdcard/DIC/data/cache/minesweeper.png')
    console.log(`draw spend ${new Date().getTime() - start}ms at ${this}`)
  }

  // 绘制分割线
  #draw_split_line(img: android.graphics.Bitmap) {
    let paint = new Paint() // 画笔
    let canva = new Canvas(img) // 画布

    paint.setStrokeWidth(5)
    paint.setColor(Color.argb(241, 148, 138, 0.5)) // 画笔颜色
    canva.drawARGB(255, 255, 255, 255) // 画布背景色

    for (let i = 0; i < this.row; i++) {
      canva.drawLine(0, i * 80, this.column * 80, i * 80, paint)
    }
    for (let i = 0; i < this.column; i++) {
      canva.drawLine(i * 80, 0, i * 80, this.row * 80, paint)
    }
  }

  // 绘制标记
  #draw_cell_cover(img: android.graphics.Bitmap) {
    let draw = new Canvas(img)
    let paint = new Paint()
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; i < this.column; i++) {
        let cell = this.panel[i][j]
        if (this.state == GameState.FAIL && cell.is_mine) {
          paint.setColor(Color.rgb(255, 0, 0))
          draw.drawRect(j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1, paint)
          continue
        }
        if (cell.is_marked) {
          paint.setColor(Color.rgb(0, 0, 255))
          draw.drawRect(j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1, paint)
          continue
        }
        if (!cell.is_mined) {
          paint.setColor(Color.rgb(211, 211, 211))
          draw.drawRect(j * 80 + 1, i * 80 + 1, (j + 1) * 80 - 1, (i + 1) * 80 - 1, paint)
        }
      }
    }
  }

  #draw_cell(img: android.graphics.Bitmap) {
    let draw = new Canvas(img)
    draw.drawRect(0, 0, this.column * 80, this.row * 80, new Paint())
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        let cell = this.panel[i][j]
        if (!cell.is_mined) {
          let font_size = this.font.getWeight()
          let index = `${COLUMN_NAME[i]}${COLUMN_NAME[j]}`
          let center = (80 * (j + 1) - font_size[0] / 2 - 40, 80 * (i + 1) - 40 - font_size[1] / 2)
          // draw.text(center, index, fill=black"), font=this.font)
        } else {
          let count = this.count_around(i, j)
          if (count == 0) continue
          let font_size = this.font.getWeight()
          let center = (80 * (j + 1) - font_size[0] / 2 - 40, 80 * (i + 1) - 40 - font_size[1] / 2)
          // draw.text(center, str(count), fill=this.#get_count_text_color(count), font=this.font)
        }
      }
    }
  }

  mine(row: number, column: number) {
    if (!this.#is_valid_location(row, column)) throw new Error('非法操作')
    let start = new Date().getTime()
    let cell = this.panel[row][column]
    if (cell.is_mined) throw Error('你已经挖过这里了')
    cell.is_mined = true
    if (this.state == GameState.PREPARE) this.#gen_mine()
    if (this.state != GameState.GAMING) throw Error('游戏已结束')
    this.actions += 1
    if (cell.is_mine) {
      this.state = GameState.FAIL
      return
    }
    this.#reset_check()
    this.#spread_not_mine(row, column)
    //this.#win_check()
    console.log(`mine spend ${new Date().getTime() - start}ms at ${String(this.panel)}`)
  }

  tag(row: number, column: number) {
    let cell = this.panel[row][column]
    let start = new Date().getTime()
    if (cell.is_mined) throw Error('你不能标记一个你挖开的地方')
    if (this.state != GameState.GAMING && this.state != GameState.PREPARE) throw Error('游戏已结束')
    this.actions += 1
    if (cell.is_marked) cell.is_marked = false
    else cell.is_marked = true
    console.log(`tag spend ${new Date().getTime() - start}ms at ${String(this)}`)
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  #gen_mine() {
    let count = 0
    while (count < this.mines) {
      let row = this.randomInt(0, this.row - 1)
      let column = this.randomInt(0, this.column - 1)
      if (this.panel[row][column]?.is_mine || this.panel[row][column]?.is_mined) continue
      this.panel[row][column].is_mine = true
      count += 1
      this.state = GameState.GAMING
    }
  }

  #spread_not_mine(row: number, column: number) {
    if (!this.#is_valid_location(row, column)) return
    let cell = this.panel[row][column]
    if (cell.is_checked) return
    if (cell.is_mine) return
    cell.is_mined = true
    cell.is_checked = true
    let count = this.count_around(row, column)
    if (count > 0) return
    this.#spread_not_mine(row + 1, column)
    this.#spread_not_mine(row - 1, column)
    this.#spread_not_mine(row, column + 1)
    this.#spread_not_mine(row, column - 1)
    if (count == 0) {
      this.#spread_not_mine(row + 1, column + 1)
      this.#spread_not_mine(row - 1, column - 1)
      this.#spread_not_mine(row + 1, column - 1)
      this.#spread_not_mine(row - 1, column + 1)
    }
  }

  #reset_check() {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        this.panel[i][j].is_checked = false
      }
    }
  }

  #win_check() {
    let mined = 0
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.panel[i][j].is_mined) mined += 1
      }
    }
    if (mined == this.column * this.row - this.mines) this.state = GameState.WIN
  }

  count_around(row: number, column: number) {
    let count = 0
    for (let r = row - 1; r < row + 2; r++) {
      for (let c = column - 1; c < column + 2; c++) {
        if (!this.#is_valid_location(r, c)) continue
        if (this.panel[r][c].is_mine) count += 1
        if (this.panel[row][column].is_mine) count -= 1
        return count
      }
    }
  }
}

let game = new MineSweeper(9, 9, 10)
console.log(game)
game.mine(0, 0)
game.tag(0, 4)
game.draw_panel()
