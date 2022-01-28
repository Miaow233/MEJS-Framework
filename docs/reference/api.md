# Api 参考
## setTroopSwicth(group,true/false)
说明：设置群开关

参数列表：
|    参数    |  类型   |        描述         |
| :--------: | :-----: | :-----------------: |
|   group    |  long   |        群号         |
| true/false | boolean | true开启，false关闭 |


返回值：无


## getTroopSwicth(group)
说明：检查群是否开启

参数列表：
| 参数  | 类型 | 描述 |
| :---: | :--: | :--: |
| group | long | 群号 |


返回值：boolean


## send()
说明：发送储存的消息

参数列表：无

返回值：无


## sendMsg(msg)
说明：发送参数中的消息，自动识别xml,json

参数列表：
| 参数 | 类型 |      描述      |
| :--: | :--: | :------------: |
| msg  |      | 发送的消息内容 |


返回值：无


## setId(id)
说明：设置群ID，非特殊情况(发送消息到别的群)此方法无需调用，默认为消息来源群

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   id   |      |  群号    |


返回值：无


## setCode(code)
说明：设置群Code，发送群临时消息给成员时需要设置这个值

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   code   |      |  群代码    |


返回值：无


## setUin(uin)
说明：设置消息发送目标，发送群临时消息时需要设置这个值

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    uin  |   long   |  用户QQ号    |


返回值：无


## addText(text)
说明：添加文本消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息

参数列表：


| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   text   |   String   |  文本消息内容	    |
返回值：无


## addImg(img)
说明：添加图片消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   img   |      |    图片本地路径或网址  |


返回值：无


## addAt(id,name)
说明：添加@消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    id  |      |  用户QQ    |
|name||用户昵称|


返回值：无


## sendJson(json)
说明：不做检查直接发送JSON消息，如果内容不是JSON将发送失败

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   json   |      | 消息字符串     |


返回值：无


## sendXml(xml)
说明：不做检查直接发送xml消息，如果内容不是xml将发送失败

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    xml  |      |   消息字符串   |


返回值：无


## sendPtt(ptt,time=-1)
说明：发送语音消息，参数为直链网址或本地路径

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    ptt  |      |    本地语音文件路径或网址  |
|time||（参数可选）显示播放时长单位秒	|


返回值：无


## withDrawMsg(groupId=getGroup(),mark=getMark())
说明：撤回消息，需要登录账号在群内是管理员，默认撤回当前消息，可设置群号和消息mark撤回特定消息

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    groupId  |      |  群号    |
|mark||消息标记|


参数都可省略

返回值：无


## getMark()
说明：获取消息标记，用于撤回消息

参数列表：无

返回值：int


## getAcct()
说明：获取当前登录账号，同@robot

参数列表：无

返回值：long


## getGroup()
说明：获取当前消息的来源群，同@group

参数列表：无

返回值：long


## getGroupName()
说明：获取当前消息的来源群名，同@groupName

参数列表：无

返回值：String


## getUin()
说明：获取当前消息的发送者，同@uin

参数列表：无


## getUinName()	String
参数列表：无	获取当前消息发送者昵称，同@nick

返回值：long


## getTime(format)
说明：用指定格式格式化当前消息的发送时间，直接填写为消息时间戳 单位毫秒 同@time

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    format  |      |    时间格式化文本，y年M月d日H/h时m分s秒  |


返回值：String


## getTitle()
说明：获取消息标题，同@title

参数列表：无

返回值：String


## getCode()
说明：获取当前消息code，同@code

参数列表：无

返回值：long


## getAt(index)
说明：获取当前消息@的对象，注意一条消息可以@多个人

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|      |      |      |


返回值：JsonArray[id,name]	index为第几个@


## getMachineCode()
说明：获取当前设备的信息，需要权限：手机信息

参数列表：无

返回值：JsonObject

## sendRedPacket(group,title,money,qq...)
说明：发送专属红包，需要权限：发送红包 并设置支付密码

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  group    |      |  群号    |
|title||红包标题|
|money||红包金额(单位分)|
|qq||允许领取红的用户(可以多人)|


返回值：无


## joinRequest(groupid,memberid,requestId,agree)
说明：同意/拒绝入群申请，需要管理员权限，此函数仅在[内置模块System](guide/mod.md)中有效

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  groupid    |      |    群号  |
|memberid||用户QQ|
|requestid||系统消息ID(请使用@c1)|
|agree||是否同意（0/-1）|


返回值：无


## deleteMember(group,member)
说明：删除群成员，需要管理员权限

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   group   |      |   群号   |
|member||用户QQ|


返回值：无


## shotup(group,member,time)
说明：	禁言群成员，如果member为-1则表示群禁言，time=0时表示解除禁言

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   group   |      | 群号     |
|member||用户QQ|
|time||禁言时间(单位秒)|


返回值：无


## setMemberCard(group,member,card)
说明：设置群成员名片

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   group   |      |  群号    |
|member||用户QQ|
|card||群名片|


返回值：无


## getSkey()
说明：获取QQSkey，此参数可以用于登录QQ空间等

参数列表：无

返回值：JsonObject


## getPSkey()
说明：同上

参数列表：无

返回值：JsonObject


## getTextMsg()
说明：获取消息中文本内容，对于xml和json消息，获取的内容例子：[名片分享]你的QQ版本不支持查看该名片分享内容，请下载最新版本。

参数列表：无

返回值：String


## getJsonMsg()
说明：获取消息中JSON的内容，如果没有则返回空文本

参数列表：无

返回值：String


## getXmlMsg()
参数列表：无

说明：获取消息中xml的内容，如果没有则返回空文本

返回值：String


## getImageMsg()
参数列表：无

说明：获取消息中图片的文件名，自动通过接口获取图片

返回值：String


## checkAdmin(uin)
说明：检查超级管理员, 同UI界面

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  uin    |  long    |   用户QQ   |

返回值：boolean


## setAdmin(uin,isSet=true)
说明：设置超级管理员

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    uin  |   long   |   用户QQ   |
|isSet|boolean|设置/取消(true/false)|

返回值：无


## reload()
说明：重载词库

参数列表：无

返回值：无


## getTroopList()
说明：获取群列表

参数列表：无

返回值：JsonArray


## getTroopMemberList(groupid)
说明：返回群成员列表可一次获取多个群

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   groupig   |      |   群号   |


返回值：JsonObject


## invokeMod(mod)
说明：调用指定模块获取返回结果

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    mod  |      |  模块名    |


返回值：String	


## setContinue(boolean)
说明：设置当前词条结束后是否继续执行后面的词条

参数列表：
|  参数   |  类型  |         描述          |
| :-----: | :----: | :-------------------: |
| boolean | boolean | 继续/终止(true/false) |


返回值：无


## putVariable(key,msg)
说明：设置可变变量

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|key||可变变量|
|msg||变量内容	|


返回值：无


## getVariable(key)
说明：获取可变变量

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|key||可变变量	|


返回值：String
