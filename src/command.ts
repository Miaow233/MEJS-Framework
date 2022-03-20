import EventEmitter from './extensions/events'
import parser from './extensions/commander.js'
let Event = new EventEmitter()
class Command {
  command: any
  compulsory: any
  optional: any[]
  constructor(cmd) {
    this.command = cmd
    this.compulsory = []
    this.optional = []
  }
  option(value: string, tag: string, defaultValue?: string) {
    return this
  }
  action(callback: Function) {
    Event.on('message.group', async (session) => {
      await callback()
    })
  }
  prase(cmd: string) {
    return parser(cmd)
  }
}
function command(cmd) {}
