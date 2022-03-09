export { default as http } from './extensions/http.js'
export * as fs from './extensions/fs.js'
export * as app from './utils/api.js'
export {
  reply,
  sendFriendMessage,
  sendGroupMessage,
  Text,
  Image,
  At,
} from './message.js'
export { Group, Friend, Temp } from './target.js'
export { db } from './extensions/sqlite.js'
export { getCSRFToken, getCookie, fetchApi } from './utils/util.js'
export { saveBitmap, drawPanel } from './extensions/draw.js'
export { default as cli } from './extensions/commander.js'
export { getGroupImageUrl, escapeXml } from './common.js'
// 关于本框架的用法请参考 hdic.example.js
// 阅读 README.md 可以看到所有接口的说明
// 文档说明 https://docs.nekohouse.cafe
