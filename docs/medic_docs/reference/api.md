# Api 参考

### addAt()

#### 说明

添加@消息，用于合并不同的消息，不会立即发送，通过调用 send 发送存储的消息

#### 参数列表

| 参数 | 类型 |   描述   |
| :--: | :--: | :------: |
| uin  | long | 用户 QQ  |
| nick |      | 用户昵称 |

#### 返回值

无

#### 示例

```java
// 添加@呼叫，不会立即发送，直到调用send
Api->addAt(@uin\, @nick)
```

### addImg()

#### 说明

添加图片消息，用于合并不同的消息，不会立即发送，通过调用 send 发送存储的消息

#### 参数列表

| 参数 |  类型  |        描述        |
| :--: | :----: | :----------------: |
| img  | String | 图片本地路径或网址 |

#### 返回值

无

#### 示例

```java
// 添加图片消息，不会立即发送，直到调用send
Api->addImg(img)
```

### addText()

#### 说明

添加文本消息，用于合并不同的消息，不会立即发送，通过调用 send 发送存储的消息

#### 参数列表

| 参数 |  类型  |     描述     |
| :--: | :----: | :----------: |
| text | String | 文本消息内容 |

#### 返回值

无

#### 示例

```java
// 添加文本消息，不会立即发送，直到调用send
Api->addText(text)
```

### checkAdmin()

#### 说明

检查超级管理员, 同 UI 界面

#### 参数列表

| 参数 | 类型 |  描述   |
| :--: | :--: | :-----: |
| uin  | long | 用户 QQ |

#### 返回值

boolean

#### 示例

```java
// 检查超级管理员同UI界面
Api->checkAdmin(@uin)
```

### deleteMember()

#### 说明

删除群成员，需要管理员权限

#### 参数列表

|   参数   | 类型 |  描述   |
| :------: | :--: | :-----: |
| groupId  | long |  群号   |
| memberId | long | 用户 QQ |

#### 返回值

无

#### 示例

```java
// 删除群成员，需要管理员权限
Api->deleteMember(@uin)
```

### getAcct()

#### 说明

获取当前登录账号，同 `@robot`

#### 参数列表

无

#### 返回值

long

#### 示例

```java
// 获取当前登录账号
Api->getAcct()
```

### getAt()

#### 说明

获取当前消息@的对象，注意一条消息可以@多个人

#### 参数列表

| 参数  | 类型 |    描述     |
| :---: | :--: | :---------: |
| index | int  | 获取第几个@ |

#### 返回值

JsonArray[id,name], index 为第几个@

#### 示例

```java
// 获取当前消息@的对象，index为序号（从0开始），注意一条消息可以@多个人
Api->getAt(0)
```

### getAtCnt()

#### 说明

获取艾特人数

#### 参数列表

无

#### 返回值

int

#### 示例

```java
// 获取艾特人数
Api->getAtCnt()
```

### getBatteryLevel()

#### 说明

获取电池电量

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取电池电量
Api->getBatteryLevel()
```

### getBatteryStatus()

#### 说明

获取充电状态

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取充电状态
Api->getBatteryStatus()
```

### getCode()

#### 说明

获取当前消息 code，同 `@code`

#### 参数列表

无

#### 返回值

long

#### 示例

```java
// 获取当前消息 code，同 `@code`
Api->getCode()
```

### getGroup()

#### 说明

获取当前消息的来源群，同 `@group`

#### 参数列表

无

#### 返回值

long

#### 示例

```java
// 获取当前消息的来源群，同 `@group`
Api->getGroup()
```

### getGroupName()

#### 说明

获取当前消息的来源群名，同 `@groupName`

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取当前消息的来源群名，同 `@groupName`
Api->getGroupName()
```

### getImageMsg()

#### 说明

获取消息中图片的文件名

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取消息中图片的文件名
Api->getImageMsg()
```

### getJsonMsg()

#### 说明

获取消息中 JSON 的内容，如果没有则返回空文本

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取消息中 JSON 的内容，如果没有则返回空文本
Api->getJsonMsg()
```

### getXmlMsg()

#### 说明

获取消息中 xml 的内容，如果没有则返回空文本

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取消息中 xml 的内容，如果没有则返回空文本
Api->getXmlMsg()
```

### getMachineCode()

#### 说明

获取当前设备的信息，需要权限 `手机信息`

#### 参数列表

无

#### 返回值

JsonObject

#### 示例

```java
// 获取当前设备的信息，需要权限 `手机信息`
Api->getMachineCode()
```

### getMark()

#### 说明

获取消息标记，用于撤回消息

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取消息标记，用于撤回消息
Api->getMark()
```

### getSkey()

#### 说明

获取 QQSkey

#### 返回值

String

#### 示例

```java
// 获取 QQSkey
Api->getSkey()
```

### getPSkey()

#### 说明

获取 QQPSkey

#### 返回值

JsonObject

#### 示例

```java
// 获取 QQSkey
Api->getPSkey()
```

#### 返回示例

```json
{
    "office.qq.com": "BklfedOwfwpVd0t9Tfw-QnEVJyfRXuLcz8pHWlQ96jk_",
    "qun.qq.com": "P1KcswP6wOpY6zO29-5cqMMWVEgtWiYUszMRfixYOog_",
    "gamecenter.qq.com": "*JW*fcXekLLoIIpPZBnR1e6FRE8WjIxz1mCUFAPbTAI_",
    "docs.qq.com": "gpQseG6U8bM9iuHX-8JF6MZ0*4hsxgEycNJvCAyNE50_",
    "mail.qq.com": "zrxuT9-TyqSBVdRGvBcWKlET4Cwl06SzbW31DmA61jg_",
    "ti.qq.com": "4yEDLFqlg9e6G4F8iKO3QUuva24dgLKxwA5q6jC6L6k_",
    "vip.qq.com": "*N9neS-sAQDUbj7fAH7pg4rFm8IZrQMzHF2ukMbZrQg_",
    "tenpay.com": "uFwua23XkdMYK2fZllH9HpfG*W3IrXPzmi2WDPd5owA_",
    "qqweb.qq.com": "lHU3VjJCjU4CIEv5rngffJPQWetcgovxPny4yB*Dhw0_",
    "qzone.qq.com": "tjLrnSRyRYqHZbpKNayJCkAYGLJiqqmrcnF8zPi4uts_",
    "mma.qq.com": "j2d3qFltIf52P9-uVOFF5N1vXDHr2qiBU31KINsfpWM_",
    "game.qq.com": "UV6SQGUBcamDITIzS-QyNAxIVNiDUvvIAOO8BH*x8vg_",
    "openmobile.qq.com": "qcF9-bJkWHUApdDSUeMjJq6tmtcwNHeOPwLMux6lumo_",
    "connect.qq.com": "zCgkCk0aLDAgV8izWHE5cScRYRGqfMkmQ3S930W3C7w_"
}
```

### getClientKey()

#### 说明

获取 QQClientKey

#### 返回值

String

#### 示例

```java
// 获取 QQClientKey
Api->getClientKey()
```

### getReplyMsg()

#### 说明

获取被回复的文本消息

#### 返回值

String

#### 示例

```java
// 获取被回复的文本消息
Api->getReplyMsg()
```

### getRunTimes()

#### 说明

获取运行时间，返回秒

#### 返回值

long

#### 示例

```java
// 获取运行时间，返回秒
Api->getRunTimes()
```

### getTextMsg()

#### 说明

获取消息中文本内容，对于 xml 和 json 消息，获取的内容例子`[名片分享]你的QQ版本不支持查看该名片分享内容，请下载最新版本。`

#### 返回值

String

#### 示例

```java
// 获取消息中文本内容，对于 xml 和 json 消息，获取的内容例子`[名片分享]你的QQ版本不支持查看该名片分享内容，请下载最新版本。`
Api->getTextMsg()
```

### getTime()

#### 说明

用指定格式格式化当前消息的发送时间，直接填写 format 为消息时间戳 单位毫秒 同@time

#### 参数列表

|  参数  |  类型  |                      描述                       |
| :----: | :----: | :---------------------------------------------: |
| format | String | 时间格式化文本，y 年 M 月 d 日 H/h 时 m 分 s 秒 |

#### 返回值

String

#### 示例

```java
// 用指定格式格式化当前消息的发送时间，直接填写format为消息时间戳 单位毫秒 同@time
Api->getTime(format)
```

### getTitle()

#### 说明

获取群头衔，同 `@title`

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取群头衔，同 `@title`
Api->getTitle()
```

### getTroopList()

#### 说明

获取群列表

#### 参数列表

无

#### 返回值

JsonArray

#### 示例

```java
// 获取群列表
Api->getTroopList()
```

### getTroopMemberList()

#### 说明

获取群成员列表可一次获取多个群

#### 参数列表

|  参数   | 类型 | 描述 |
| :-----: | :--: | :--: |
| groupId | long | 群号 |

#### 返回值

JsonObject

#### 示例

```java
// 获取群成员列表可一次获取多个群
Api->getTroopMemberList(@group)
```

### getTroopSwicth()

#### 说明

检查群是否开启

#### 参数列表

|  参数   | 类型 | 描述 |
| :-----: | :--: | :--: |
| groupId | long | 群号 |

#### 返回值

boolean

#### 示例

```java
// 检查群是否开启
Api->getTroopSwitch(@group)
```

### getUin()

#### 说明

获取当前消息的发送者，同 `@uin`

#### 参数列表

无

#### 返回值

long

#### 示例

```java
// 获取当前消息的发送者，同 `@uin`
Api->getUin()
```

### getUinName()

#### 说明

获取当前消息发送者昵称，同 `@nick`

#### 参数列表

无

#### 返回值

String

#### 示例

```java
// 获取当前消息发送者昵称，同 `@nick`
Api->getUinName()
```

### putVariable()

#### 说明

设置全局变量，一个参数且为 clear 时清空全局变量，可一次传入多个键值对

#### 参数列表

| 参数 |  类型  |    描述    |
| :--: | :----: | :--------: |
| key  | String | 全局变量键 |
| val  | String |  变量内容  |

#### 返回值

无

#### 示例

```java
// 设置全局变量，一个参数且为clear时清空全局变量，可一次传入多个键值对
Api->putVariable(k\,v)
```

### getVariable()

#### 说明

获取全局变量的某个键的值

#### 参数列表

| 参数 |  类型  |    描述    |
| :--: | :----: | :--------: |
| key  | String | 全局变量键 |

#### 返回值

String

#### 示例

```java
// 获取全局变量的某个键的值
Api->getVariable(k)
```

### invokeMod()

#### 说明

调用指定模块获取返回结果，同 `Mod()`

#### 参数列表

| 参数 |  类型  |  描述  |
| :--: | :----: | :----: |
| mod  | String | 模块名 |

#### 返回值

String

#### 示例

```java
// 调用指定模块获取返回结果，同 `Mod()`
Api->invokeMod(mod)
```

### joinRequest()

#### 说明

同意/拒绝入群申请，需要管理员权限，此函数仅在[内置模块 System](../basic/mod.md)中有效,requestId 获取请使用@c1,agree 为 0 时表示同意

#### 参数列表

|   参数    |  类型  |          描述          |
| :-------: | :----: | :--------------------: |
|  groupId  |  long  |          群号          |
| memberId  |  long  |        用户 QQ         |
| requestId |        | 系统消息 ID(请使用@c1) |
|   agree   |  int   |    是否同意（0/-1）    |
|   info    | String |        拒绝原因        |

#### 返回值

无

#### 示例

```java
// 同意/拒绝入群申请，需要管理员权限，此函数仅在[内置模块 System]中有效,requestId获取请使用@c1,agree为0时表示同意
Api->joinRequest(@group\,@uin\,@c1\,0)
```

### pokeAvatar()

#### 说明

戳一戳

#### 参数列表

| 参数 | 类型 |   描述   |
| :--: | :--: | :------: |
| uin  | long | 被戳用户 |

#### 返回值

无

#### 示例

```java
// 戳一戳
Api->pokeAvatar(@uin)
```

### reload()

#### 说明

重载词库

#### 参数列表

无

#### 返回值

无

#### 示例

```java
// 重载词库
Api->reload()
```

### reloadTroopList()

#### 说明

刷新群列表

#### 参数列表

无

#### 返回值

无

#### 示例

```java
// 刷新群列表
Api->reloadTroopList()
```

### send()

#### 说明

发送储存的消息

#### 参数列表

无

#### 返回值

无

#### 示例

```java
// 发送储存的消息
Api->send()
```

### sendJson()

#### 说明

不做检查直接发送 JSON 消息，如果内容不是 JSON 将发送失败

#### 参数列表

| 参数 |  类型  |    描述    |
| :--: | :----: | :--------: |
| json | String | 消息字符串 |

#### 返回值

无

#### 示例

```java
// 不做检查直接发送 JSON 消息，如果内容不是 JSON 将发送失败
Api->sendJson(json)
```

### sendXml()

#### 说明

不做检查直接发送 xml 消息，如果内容不是 xml 将发送失败

#### 参数列表

| 参数 |  类型  |    描述    |
| :--: | :----: | :--------: |
| xml  | String | 消息字符串 |

#### 返回值

无

#### 示例

```java
// 不做检查直接发送 xml 消息，如果内容不是 xml 将发送失败
Api->sendXml(xml)
```

### sendPtt()

#### 说明

发送语音消息，参数为直链网址或本地路径

#### 参数列表

| 参数 |  类型  |              描述              |
| :--: | :----: | :----------------------------: |
| ptt  | String |     本地语音文件路径或网址     |
| time |  int   | （参数可选）显示播放时长单位秒 |

#### 返回值

无

#### 示例

```java
// 发送语音消息，参数为直链网址或本地路径
Api->sendPtt(ptt)
```

### sendMsg()

#### 说明

发送参数中的消息，自动识别 xml,json

#### 参数列表

| 参数 |  类型  |      描述      |
| :--: | :----: | :------------: |
| msg  | String | 发送的消息内容 |

#### 返回值

无

#### 示例

```java
// 发送参数中的消息，自动识别 xml,json
Api->sendMsg(text)
```

### sendRedPacket()

#### 说明

发送专属红包，需要权限: 发送红包 并设置支付密码

#### 参数列表

|  参数   |  类型  |            描述            |
| :-----: | :----: | :------------------------: |
| groupId |  long  |            群号            |
|  title  | String |          红包标题          |
|  money  |  int   |      红包金额(单位分)      |
|   qq    |  long  | 允许领取红的用户(最多五人) |

#### 返回值

<String\>发送结果

#### 示例

```java
// 发送专属红包，需要权限: 发送红包 并设置支付密码
Api->sendRedPacket(@group\,红包\,1\,@uin)
```

### setAdmin()

#### 说明

设置超级管理员,同 UI 界面

#### 参数列表

| 参数  |  类型   |         描述          |
| :---: | :-----: | :-------------------: |
|  uin  |  long   |        用户 QQ        |
| isSet | boolean | 设置/取消(true/false) |

#### 返回值

无

#### 示例

```java
// 设置超级管理员,同UI界面
Api->setAdmin(@uin\,true)
```

### setCode()

#### 说明

设置群 Code，发送群临时消息给成员时需要设置这个值

#### 参数列表

| 参数 |  类型  |  描述  |
| :--: | :----: | :----: |
| code | String | 群代码 |

#### 返回值

无

#### 示例

```java
// 设置超级管理员,同UI界面
Api->setCode(@code)
```

### setContinue()

#### 说明

设置当前词条结束后是否继续执行后面的词条

#### 参数列表

|  参数   |  类型   |         描述          |
| :-----: | :-----: | :-------------------: |
| boolean | boolean | 继续/终止(true/false) |

#### 返回值

无

#### 示例

```java
// 设置当前词条结束后是否继续执行后面的词条
Api->setContinue(true)
```

### setId()

#### 说明

设置群 ID，非特殊情况(发送消息到别的群)此方法无需调用，默认为消息来源群

#### 参数列表

| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  id  | long | 群号 |

#### 返回值

无

#### 示例

```java
// 设置群 ID，非特殊情况(发送消息到别的群)此方法无需调用，默认为消息来源群
Api->setId(@group)
```

### setMemberCard()

#### 说明

设置群成员名片

#### 参数列表

|   参数   |  类型  |  描述   |
| :------: | :----: | :-----: |
| groupId  |  long  |  群号   |
| memberId |  long  | 用户 QQ |
|   card   | String | 群名片  |

#### 返回值

无

#### 示例

```java
// 设置群成员名片
Api->setMemberCard(@group\,@uin\,名片)
```

### setReply()

#### 说明

设置回复消息

#### 参数列表

| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  id  | long | 群号 |

#### 返回值

无

#### 示例

```java
// 设置回复消息
Api->setReply()
```

### setTroopSwicth()

#### 说明

设置群开关

#### 参数列表

|    参数    |  类型   |         描述          |
| :--------: | :-----: | :-------------------: |
|   group    |  long   |         群号          |
| true/false | boolean | true 开启，false 关闭 |

#### 返回值

无

#### 示例

```java
// 开启群开关
Api->setTroopSwitch(group\,true)
```

### setUin()

#### 说明

设置消息发送目标，发送群临时消息时需要设置这个值

#### 参数列表

| 参数 | 类型 |    描述    |
| :--: | :--: | :--------: |
| uin  | long | 用户 QQ 号 |

#### 返回值

无

#### 示例

```java
// 设置消息发送目标，发送群临时消息时需要设置这个值
Api->setUin(@uin)
```

### shutup()

#### 说明

禁言群成员，如果 member 为 -1 则表示群禁言，time=0 时表示解除禁言

#### 参数列表

|   参数   | 类型 |       描述       |
| :------: | :--: | :--------------: |
| groupId  | long |       群号       |
| memberId | long |     用户 QQ      |
|   time   | int  | 禁言时间(单位秒) |

#### 返回值

无

#### 示例

```java
// 禁言群成员,time=0 时表示解除禁言
Api->shutup(@group\,@uin\,60)
//全体禁言
Api->shutup(@group\,-1\,1)
```

### withDrawMsg()

#### 说明

撤回消息，需要登录账号在群内是管理员，默认撤回当前消息，可设置群号和消息 mark 撤回特定消息

#### 参数列表

|  参数   |  类型  |   描述   |
| :-----: | :----: | :------: |
| groupId |  long  |   群号   |
|  mark   | String | 消息标记 |

    参数都可省略

#### 返回值

无

#### 示例

```java
// 撤回当前消息
Api->withDrawMsg()
//撤回指定消息
Api->withDrawMsg(@group\,mark)
```
