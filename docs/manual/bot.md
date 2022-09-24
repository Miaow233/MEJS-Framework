# Bot

bot是一个全局对象，具有控制机器人行为的能力。

bot的所有属性如下：

|属性|说明|
|-|-|
|batteryStatus|获取电池状态|
|batteryLevel|获取电池电量|
|machineCode|获取设备信息，返回json字符串，需自行解析|
|uin|获取机器人账号|

bot的所有方法如下：

|方法|说明|
|-|-|
|reload()|重载词库|
|send(client)|发送消息，参数就是message.client|
|getSkey()|获取skey|
|getPSkey()|获取pskey|
|getClientKey()|获取clientkey|
|setAdmin(uin,boolean)|设置主人，参数为：QQ号和布尔值|
|checkAdmin(long uin)|检查主人状态，返回布尔值|
|shutup(group,uin,time)|禁言群员，参数为：群号，Q号，时间|
|shutupAll(group,boolean)|群禁言，参数为：群号，布尔值|
|setTroopSwicth(group,boolean)|设置群开关，参数为：群号，布尔值|
|getTroopSwicth(group)|获取群开关，参数为：群号，，返回布尔值|
|withDrawMsg(group,mark)|撤回消息，参数为：群号和消息标记|
|setMemberCard(group,uin,card)|设置群名片，参数为：群号，QQ，新名片|
|pokeAvatar(group,uin)|戳一戳，参数为：群号，QQ|
|deleteMember(group,uin)|踢出群员，参数为：群号，QQ|
|await bot.sendRedPacket(group,title,howmuch,uin...)|发送红包，参数为：群号，红包标题，总金额（单位：分），QQ（可以传递最多五个QQ号）,返回结果|
|await bot.getTroopList()|获取群列表，返回json字符串，需自行解析|
|await bot.getTroopMemberList(group...)|获取群成员，参数为：group（可以多个群号）|


