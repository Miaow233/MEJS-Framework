# 客户端（Client）

client 用于构造消息，bot.send()的参数就是client

client来自于message.message，你只能在接收到message后获取client

message.client 的所有方法如下：

|方法|说明|
|-|-|
|addText(text)|添加文本，参数为文本|
|addImg(img)|添加图片，参数为本地路径或网址；还可以是字节组|
|addAt(uin,nick)|添加艾特，参数为QQ号和昵称|
|setReply()|添加回复，无参数|