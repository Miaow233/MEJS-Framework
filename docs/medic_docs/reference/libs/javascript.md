# JavaScript 支持库

1.4.0 版本起，词条支持以 JS 脚本运行

在相应的关键字下一行标记 JS 或者 JavaScript 运行 JS 模式

> 自 2.1.5 版本 JS2 更新为独立的 MEJS，完整说明详见[使用文档](../../../mejs2/README.md)

JavaScript 词条交流 QQ 群: `410351186`

相关语法请参考 [MeJS](http://mejs.ceclin.top:9102)

例:

```js
[词条]
测试
JS
$addText('MEJS消息');
$send();
```

## MEJS 参考

JS 函数调用, 例: `Api.send()`, `Toolkit.log()`

MEJS 内置函数调用, 例: `$send()`

## Api

| js/Medic             | MEJS 内置函数        | 函数说明                                          |
| -------------------- | -------------------- | ------------------------------------------------- |
| send()               | $send()              | 发送                                              |
| sendMsg()            | $sendMessage()       | 发送消息                                          |
| setId()              | 无                   | 发送消息到别的群                                  |
| setCode()            | 无                   | 设置群 Code，发送群临时消息给成员时需要设置这个值 |
| setUin()             | 无                   | 设置消息发送目标                                  |
| addText()            | $addText()           | 添加文本                                          |
| addImg()             | $addImage()          | 添加图片                                          |
| addAt()              | $addAt()             | 添加@消息                                         |
| sendJson()           | $sendJson()          | 发送 json                                         |
| sendXml()            | $sendXml()           | 发送 xml                                          |
| sendPtt()            | $sendPtt()           | 发送语音                                          |
| withDrawMsg()        | $withdraw()          | 撤回                                              |
| getMark()            | $mark                | 消息标记                                          |
| getAcct()            | $robot               | 机器人 QQ                                         |
| getGroup()           | $group               | 群号                                              |
| getGroupName()       | $groupName           | 群名                                              |
| getUin()             | $uin                 | 获取 QQ                                           |
| getUinName()         | $nick                | 获取昵称                                          |
| getTime()            | $messageTime()       | 消息时间                                          |
| @time                | $currentTime         | 获取时间戳                                        |
| getTitle()           | $title               | 获取消息标题                                      |
| getCode()            | $code                | 获取当前消息 code，同@code                        |
| getAtCnt()           | $atCount             | 艾特人数                                          |
| getAt()              | $at()                | 获取艾特内容                                      |
| getMachineCode()     | $machineCode         | 获取设备信息                                      |
| sendRedPacket()      | $targetedRedPacket() | 发送专属红包                                      |
| joinRequest()        | $joinRequest()       | 处理加群申请                                      |
| deleteMember()       | $deleteMember()      | 踢群成员                                          |
| shotup()             | $mute()              | 禁言                                              |
| setMemberCard()      | $modifyMemberCard()  | 修改群成员名片                                    |
| getSkey()            | $skey                | 获取 skey                                         |
| getPSkey()           | $pskey               | 获取 pskey                                        |
| getTextMsg()         | $text                | 获取消息文本                                      |
| getJsonMsg()         | $jsonText            | 获取 json                                         |
| getXmlMsg()          | $xmlText             | 获取 xml                                          |
| getImageMsg()        | $imageName           | 获取图片 MD5                                      |
| setContinue(true)    | $enableNext()        | 词条继续                                          |
| setContinue(false)   | $disableNext()       | 词条不继续                                        |
| @c-1,@c0,@c1         | $arg()               | 参数                                              |
| reload()             | $reload()            | 重载词库                                          |
| checkAdmin()         | $isAdmin()           | 检查是否为超级管理                                |
| setAdmin()           | $setAdmin()          | 设置超级管理                                      |
| getTroopList()       | $groupList           | 获取群列表                                        |
| getTroopMemberList() | $membersOf()         | 获取群成员                                        |
| putVariable()        | $setVariable()       | 设置可变变量                                      |
| getVariable()        | $getVariable()       | 调用可变变量                                      |
| invokeMod()          | $mod()               | 调用模块                                          |

### 备注

- `$membersOf(group)` 函数返回一个 JS 数组, 每个数组元素是一个对象, 拥有四个属性, 分别是 nick, uin(数字类型), title, card。

## Toolkit

| JS/Medic             | MEJS 内置函数                     | 函数说明                   |
| -------------------- | --------------------------------- | -------------------------- |
| readFile()           | $getProperty()                    | 读取                       |
| writeFile()          | $setProperty()                    | 写入                       |
| time()               | $currentTime()                    | 获取当前时间               |
| replaceAll()         | 'string'.replace(/regexp/g,'str') | 替换                       |
| random()             | \_.random(min,max)                | 随机数                     |
| randomText()         | \_.sample(['a','b','c','d'])      | 随机文本                   |
| getJsonObject()      | 见备注                            | 获取 JSON 文本中的指定键值 |
| getJsonArrayLength() | 见备注                            | 获取 JSON 数组的长度       |
| access()             | $access()                         | 访问                       |
| log()                | $log()                            | 打印到日志                 |
| sleep()              | $sleep()                          | 延迟                       |

### 备注

- `Toolkit.time()` 是一个函数并且支持传参
- `$currentTime` 不是函数, 其值为当前的时间戳, 单位为毫秒
- JSON 请使用 JS 内置函数, `JSON.stringify()` 把 JS 对象转换为 JSON 文本, `JSON.parse()` 把文本解析为 JSON 对象。

## MEJS 函数

| Medic | MEJS 内置函数       | 函数说明                       |
| ----- | ------------------- | ------------------------------ |
| 无    | $md5(内容)          | 对内容进行 md5 加密            |
| 无    | $Urlendcode(内容)   | 对内容进行 url 编码            |
| 无    | $Urldecode(内容)    | 对内容进行 url 解码            |
| 无    | $Base64encode(内容) | 对内容进行 base64 加密         |
| 无    | $Base64decode(内容) | 对内容进行 base64 解密         |
| 无    | $Hex2Str(内容)      | 将十六进制字符串内容转为字符串 |
