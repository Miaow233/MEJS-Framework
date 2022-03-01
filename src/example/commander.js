// 命令解析
import { cli } from './utils/commander.js' // 引入命令解析
let msg = 'hello world' // 假设你收到这样一条消息
let argv = cli(msg) // 解析命令
console.log(JSON.stringify(argv, null, '\n')) // 输出解析结果
