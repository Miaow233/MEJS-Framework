# 内置模块 System
这个模块必须用 `System`，用于接收系统消息

标准写法 `System`

可以获取的参数：
- @c1=requestId
- @c2=null|操作人 
- @c3=null|操作人昵称 
- @c4=消息类型 
- @group=群ID 
- @groupName=群名 
- @uin=申请人ID 
- @uinName=申请人昵称
- @time=消息时间

需要注意的是，系统并不是实时的，也不是每次只有一条的，System有可能被多次调用，如机器人不在期间的消息会被一次性的获取到，这往往不是我们希望看到的，所以在词条内部，需要对消息的时间进行过滤

例: 获取当前系统时间
```java
T:ToolKit->time(format)
T:calc(@T - @time) // (1)
goto(@T < 3000)>>1 // (2)
return 
Api->joinRequest(@group\,@uin\,@c1\,0) // (3)
```

1.  计算当前时间和消息发送时间的差值
2.  处理3秒以内的消息
3.  处理消息内容