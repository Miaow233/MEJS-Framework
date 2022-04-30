// @ts-nocheck
export const VERSION = 'v1.2.9'
export const LOGO = `
// ╔═╗╔═╦═══╗─╔╦═══╗
// ║║╚╝║║╔══╝─║║╔═╗║
// ║╔╗╔╗║╚══╗─║║╚══╗
// ║║║║║║╔══╬╗║╠══╗║
// ║║║║║║╚══╣╚╝║╚═╝║
// ╚╝╚╝╚╩═══╩══╩═══╝
当前 MEJS 版本: ${VERSION}
`
export class Logger {
  static timeMap = new Map<string, number>()
  static timeEnd(label: string) {
    if (!this.timeMap.has(label)) return
    console.log(`${label} 耗时: ${Date.now() - this.timeMap.get(label)}ms`)
    this.timeMap.delete(label)
  }
  static time(label: string) {
    this.timeMap.set(label, Date.now())
  }
  static log(...args: any[]) {
    console.log(...args)
  }
  static error(...args: any[]) {
    let Toolkit = Java.type('app.yashiro.medic.app.dic.Toolkit')
    Toolkit.log('e', args.toString())
  }
  static warn(...args: any[]) {
    let Toolkit = Java.type('app.yashiro.medic.app.dic.Toolkit')
    Toolkit.log('w', args.toString())
  }
}
