# MEJS-Framework

## 关于本框架
MEJS Framework 是为 Medic 设计的 JS 词库开发框架. 基于 J2V8, 使用 TS 编写, 提供了丰富的 API 功能.

## 特性
- 符合直觉的接口
- 丰富的 API 功能
- 对常用功能进行了封装, 便于简化操作
- 使用 ES6 语法
- 易于开发

## API 参考
```text
./hdic.js                 词库主文件

./cache.js
  getCache                缓存 URL 并获得内容

./utils/commander.js      命令解析器

./utils/draw.js           画图示例
  saveBitmap              保存图片
  drawPanel               绘制棋盘面板

./utils/sqlite.js         sqlite 数据库操作
  db.query                执行查询命令
  db.exec                 执行 sql 语句
  db.close                保存并关闭数据库

./utils/util.js
  fetchApi                用于访问 QQ Api 接口
  getCookie               获取 cookie
  getCSRFToken            获取 bkn

./utils/api.js
  addAnnounce             发送群公告
  getAnnounce             获取群公告
  getEssence              获取群精华
  getFriend               获取一个好友实例[废弃]
  getFriendInfo           获取好友信息
  getFriends              获取好友列表
  getGroup                获取一个群组实例[废弃]
  getGroupHonor           获取群荣誉
  getGroupInfo            获取群信息
  getGroupJoinUrl         获取加群链接
  getGroups               获取成员列表
  getGroupSetting         获取群设置
  getMembersInfo          获取群成员活动信息
  getQQLevelInfo          获取 QQ 成长信息
  getSysMsg               获取群操作记录[废弃]
  setAnonySwitch          设置群匿名开关
  setGroupAdmin           设置管理员

./utils/database.js[废弃]      
  clean                   清理数据库
  get                     获取数据
  has                     键的存在性
  includes                值的存在性
  init                    初始化数据库
  push                    插入数据
  remove                  删除数据
  set                     设置数据
  update                  更新数据
  write                   写入数据库

./utils/merge.js[废弃]
  merge                   合并数据

./utils/tools.js[废弃]
  filterWordsByRegex      根据正则过滤匹配的子串
  getRandomInt            返回随机整数
  getWordByRegex          根据正则获取匹配的子串
  guessPossibleNames      猜测字符串数组中哪些元素等价于某个名字
  hamming                 计算两个 simhash 的汉明距离
  isPossibleName          猜测字符串数组是否有元素等价于某个名字
  matchBracket            获得匹配的闭括号
  randomString            返回随机字符串
  segment                 简单的词语拆分
  simhash                 计算 simhash
  similarity              计算两个字符串的相似度
  similarityMaxValue      字符串相似的最大值

./utils/yaml.js[废弃]
  loadYML                 读取 YAML 配置文件
```