# 工具库（Compat）

compat封装了一些io读取操作，如访问文件和网络

compat 的所有方法如下：

compat.path 获取手机存储根目录

> 下面所有方法加上 await 才会有返回值（不需要返回值的可以不写，不影响使用）

|方法|说明|
|-|-|
|writeConfig(path,key,val)|写入键值对，参数为：本地全路径，键，值；无返回|
|writeData(path,byte[])|写入字节数据，参数为：本地全路径，字节组；返回布尔值|
|writeText(path,text)|写入文本数据，参数为：本地全路径，文本；返回布尔值|
|readConfig(path,key,val)|读取键值对，参数为：本地全路径，键，默认值；返回字符串|
|readData(path)|读取字节数据，参数为：本地全路径；返回字节组|
|readText(path)|读取文本数据，参数为：本地全路径；返回字符串|
|access(url)|GET访问网络，参数为：网址，返回键值对的数组|
|access(url，param)|POST访问网络，参数为：网址，post内容(字符串或字节组)，返回键值对的数组|
|access(url,head)|GET访问网络，参数为：网址,请求头（js中键值对的数组），返回键值对的数组;
|access(url, head，param)|POST访问网络，参数为：网址, 请求头（js中键值对的数组），post内容(字符串或字节组)，返回键值对的数组|
