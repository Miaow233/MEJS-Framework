# Toolkit 参考

## readFile()

### 说明

从指定路径(path)文件的指定键值(key)上读取保存数据，需要提供默认值(defval)，读取失败或键值不存在时返回默认值(defval)

### 参数列表

|  参数  |  类型  |   描述   |
| :----: | :----: | :------: |
|  path  | String | 文件路径 |
|  key   | String |    键    |
| defval |        |  默认值  |

### 返回值

String

### 示例

```java
// 从指定路径(path)文件的指定键值(key)上读取保存数据，需要提供默认值(defval)，读取失败或键值不存在时返回默认值(defval)
Toolkit->readFile(@path/DIC/test.xml\,key\,val)
```

## writeFile()

### 说明

将指定值(val)保存至指定文件(path)的指定键值(key)上

### 参数列表

| 参数 |  类型  |   描述   |
| :--: | :----: | :------: |
| path | String | 文件路径 |
| key  | String |    键    |
| val  |        |    值    |

### 返回值

无

### 示例

```java
// 将指定值(val)保存至指定文件(path)的指定键值(key)上
Toolkit->writeFile(@path/DIC/test.xml\,key\,val)
```

## time()

### 说明

格式化获取当前系统时间，填写 format 时返回时间戳

### 参数列表

|  参数  | 类型 |                      描述                       |
| :----: | :--: | :---------------------------------------------: |
| format |      | 时间格式化文本, y 年 M 月 d 日 H/h 时 m 分 s 秒 |

### 返回值

String

### 示例

```java
// 格式化获取当前系统时间，填写 format 时返回时间戳
Toolkit->time(format)
```

## replaceAll()

### 说明

将指定文本(content)中的指定值(src 支持正则表达式)替换为指定目标(dst)

### 参数列表

|  参数   |  类型  |          描述           |
| :-----: | :----: | :---------------------: |
| content | String |        文本内容         |
|   src   |        | 待替换的文字/正则表达式 |
|   dst   | String |      替换成的字符       |

### 返回值

String

### 示例

```java
// 将指定文本(content)中的指定值(src 支持正则表达式)替换为指定目标(dst)
Toolkit->replaceAll(123456\,3\,7)
```

## random()

### 说明

获取一个最小值(min)到最大值(max)之间的随机数，**包含**头尾

### 参数列表

| 参数 | 类型 |  描述  |
| :--: | :--: | :----: |
| min  | int  | 最小值 |
| max  | int  | 最大值 |

### 返回值

int

### 示例

```java
// 获取一个最小值(min)到最大值(max)之间的随机数，**包含** 头尾
Toolkit->random(3\,7)
```

## randomText()

### 说明

随机获取参数中的一个文本

### 参数列表

| 参数 |  类型  |     描述     |
| :--: | :----: | :----------: |
| text | String | 待随机的文本 |

### 返回值

String

### 示例

```java
// 随机获取参数中的一个文本
Toolkit->randomText(A\,B\,C)
```

## getJsonObject()

### 说明

获取 json 文本中的指定键值，失败返回默认值

### 参数列表

|  参数  |  类型  |    描述    |
| :----: | :----: | :--------: |
|  json  | String | 内容字符串 |
|  key   | String |     键     |
| defval |        |   默认值   |

### 返回值

String

### 示例

```java
// 获取 json 文本中的指定键值，失败返回默认值
Toolkit->getJsonObject({"name":"XXXX"}\,name\,A)
```

## getJsonArrayLength()

### 说明

获取 json 数组的长度，失败返回-1

### 参数列表

| 参数 |  类型  |    描述    |
| :--: | :----: | :--------: |
| json | String | 内容字符串 |

### 返回值

int

### 示例

```java
// 获取 json 数组的长度，失败返回-1
Toolkit->getJsonArrayLength(["name","XXXX"])
```

## access()

### 说明

访问网络，只填写 url 时为 GET 方式，有 data 时为 POST 方式

### 参数列表

| 参数 |  类型  |   描述   |
| :--: | :----: | :------: |
| url  | String |   网址   |
| data |        | 提交参数 |

### 返回值

String

### 示例

```java
// 访问网络，GET方式
Toolkit->access(url)
// 访问网络，POST方式
Toolkit->access(url\,data)
```

## log()

### 说明

向主程序日志页面打印一条日志,type 为日志类型 e/w/i,分别对应错误红色,警告黄色,信息绿色,type 可以省略

### 参数列表

| 参数 |  类型  |   描述   |
| :--: | :----: | :------: |
| type |        | 日志等级 |
| msg  | String | 日志内容 |

### 返回值

无

### 示例

```java
// 向主程序日志页面打印一条日志,type 为日志类型 e/w/i,分别对应错误红色,警告黄色,信息绿色
Toolkit->log(i\,这是一条log)
//type 可以省略
Toolkit->log(这是一条log)
```

## sleep()

### 说明

休眠延迟,单位毫秒,1000 毫秒=1 秒

### 参数列表

| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
| time | int  | 时间 |

### 返回值

无

### 示例

```java
// 休眠延迟,单位毫秒,1000 毫秒=1 秒
Toolkit->sleep(1000)
```

## length(str)

### 说明

检测文本字数

### 参数列表

| 参数 |  类型  | 描述 |
| :--: | :----: | :--: |
| str  | String | 文本 |

### 返回值

int

### 示例

```java
// 检测文本字数
Toolkit->length(text)
```

## subString()

### 说明

(引索版)取中间，同[字符串截取](../basic/dic.md#词库语法)

### 参数列表

| 参数 |  类型  |     描述     |
| :--: | :----: | :----------: |
| msg  | String |     文本     |
| head |  int   | 第几个字开始 |
| tail |  int   | 第几个字结束 |

### 返回值

String

### 示例

```java
// (引索版)取中间
Toolkit->subString(text\,1\,3)
```

## middle()

### 说明

取中间

### 参数列表

| 参数 |  类型  |       描述       |
| :--: | :----: | :--------------: |
| msg  | String |       文本       |
| head | String |  需要去掉的头部  |
| tail | String | 为需要去掉的尾部 |

### 返回值

String

### 示例

```java
// 取中间
Toolkit->middle(5154234\,1\,3)
```

## indexOf()

### 说明

取首次出现的位置，没有搜索到返回 0

### 参数列表

| 参数 |  类型  |      描述      |
| :--: | :----: | :------------: |
| msg  | String |      文本      |
| head | String | 需要搜索的文本 |

### 返回值

int

### 示例

```java
// 取首次出现的位置，没有搜索到返回 0
Toolkit->indexOf(5154234\,1)
```

## lastIndexOf()

### 说明

取最后出现的位置，没有搜索到返回 0

### 参数列表

| 参数 |  类型  |      描述      |
| :--: | :----: | :------------: |
| msg  | String |      文本      |
| tail | String | 需要搜索的文本 |

### 返回值

int

### 示例

```java
// 取最后出现的位置，没有搜索到返回 0
Toolkit->lastIndexOf(5154234\,3)
```

## download()

### 说明

下载文件到指定位置

### 参数列表

| 参数 |  类型  |       描述       |
| :--: | :----: | :--------------: |
| url  | String |     下载地址     |
| path | String | 下载后的绝对路径 |

### 返回值

无

### 示例

```java
// 下载文件到指定位置
Toolkit->download(url\,path)
```

## split()

### 说明

分割文本,支持[正则表达式](https://www.runoob.com/java/java-regular-expressions.html)

### 参数列表

| 参数  |  类型  |       描述       |
| :---: | :----: | :--------------: |
| text  | String |  需要分割的文本  |
| regex | String | 分隔符(支持正则) |

### 返回值

JsonArray

### 示例

```java
// 分割文本，支持正则
Toolkit->split(1,2,3,4\,,)
```
