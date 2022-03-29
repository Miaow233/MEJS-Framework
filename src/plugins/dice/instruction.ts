'use strict'

class Instruction {
  pattern: any
  command: any
  constructor({ pattern, command }) {
    this.pattern = pattern
    this.command = command
  }

  match(string) {
    //检测是否存在匹配
    //true or false
    if (this.pattern != undefined) {
      return this.pattern.test(string) || string == this.command
    } else {
      return string == this.command
    }
  }

  getValue(string) {
    return this.pattern.exec(string)
  }

  checkValueisEmpty(any) {
    return any == '' || any == undefined
  }
}

export { Instruction }
