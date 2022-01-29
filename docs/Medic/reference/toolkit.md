# Toolkit 参考
## readFile(path,key,defval) 
说明：从指定路径(path)文件，的指定键值(key)上读取保存数据，需要提供默认值(defval)，读取失败或键值不存在时返回默认值(defval)

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    path  |   String   |    文件路径  |
|   key   |   String   |  键    |
|defval||默认值|


返回值：String

## writeFile(path,key,val) 
说明：将指定值(val)保存至指定文件(path)的指定键值(key)上

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   path   |   String   |   文件路径   |
|    key  |   String   | 键     |
|val||值 |


返回值：无 

## time(format) 
说明：格式化获取当前系统时间，填写format时返回时间戳

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   format   |      |   时间格式化文本, y年M月d日H/h时m分s秒   |


返回值：String

## replaceAll(content,src,dst) 
说明：将指定文本(content)中的指定值(src支持正则表达式)替换为指定目标(dst)

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    content  |   String   |    文本内容  |
|     src |      |   待替换的文字/正则表达式   |
|dst|String|替换成的字符|


返回值：String 

## random(min,max) 
说明：获取一个最小值(min)到最大值(max)之间的随机数，**包含**头尾

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    min   |   int   |   最小值   |
|     max |    int  |    最大值  |


返回值：int

## randomText(text...) 
说明：随机获取参数中的一个文本
参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    text  |   String   |    待随机的文本  |


返回值：String

## getJsonObject(json,key,defval) 
说明：获取json文本中的指定键值，失败返回默认值 
参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   json   |   String   |   内容字符串   |
|    key  |   String   |   键   |
|defval||默认值|


返回值：String 

## getJsonArrayLength(json) 
说明：获取json数组的长度，失败返回-1

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   json   |   String   |  内容字符串     |


返回值：int

## access(url,data=null) 
说明：访问网络，只填写url时为GET方式，有data时为POST方式

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    url  |   String   |    网址  |
|  data    |     |    提交参数  |


返回值：String 

## log(type,msg) 
说明：向主程序日志页面打印一条日志,type为日志类型e/w/i,分别对应错误红色,警告黄色,信息绿色,type可以省略

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    type  |      |   日志等级   |
|    msg  |   String   |   日志内容   |


返回值：无 


## sleep(time) 
说明：休眠延迟,单位毫秒,1000毫秒=1秒

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   time   |   int   |  时间    |


返回值：无 


## length(msg) 
说明：检测文本字数

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  msg    |   String   | 文本     |


返回值：int 


## subString(msg,head,tail)
说明：(引索版)取中间

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  msg    |    String  |   文本   |
|     head |   int   |  第几个字开始    |
|tail||第几个字结束|


返回值：String

## middle(msg,head,tail) 
说明：取中间

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
| msg     |   String   |   文本   |
|  head    |    String  | 需要去掉的头部     |
|tail||为需要去掉的尾部|


返回值：String 


## indexOf(msg,head)
说明：取首次出现的位置，没有搜索到返回0

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|    msg  |   String   |  文本    |
|    head  |   String   | 需要搜索的文本     |


返回值：int


## lastIndexOf(msg,tail)
说明：取最后出现的位置，没有搜索到返回0

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|   msg   |   String   |  文本 |
|     tail    |   String   | 需要搜索的文本     |


返回值：int


## download(url,path)
说明：下载文件

参数列表：
| 参数 | 类型 | 描述 |
| :--: | :--: | :--: |
|  url    |      |   下载地址   |
|    path  |      |  下载后的绝对路径    |


返回值：String
