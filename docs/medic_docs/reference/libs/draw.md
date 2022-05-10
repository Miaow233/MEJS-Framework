# Draw 画图库

请记住前面的序号后面介绍会用到

带序号的都是有返回值的

注意！！！！！！！

ax\,ay\,bx\,by 分别表示: 起点 x，起点 y，终点 x，终点 y

- ①newBitmap(路径或者链接) 新建图像
- ②newCanvas(bitmap) 里面的参数就是上面 new 出来的
- ③newCanvas(x,y) x 为长，y 为宽
- ④newPaint() 新建画笔，后续设置画笔属性需要
- ⑤newRect(ax\,ay\,bx\,by) 上面有关于参数的介绍
- ⑥getColor(a\,r\,g\,b)
- ⑦getColor(r\,g\,b)
- ⑧getColor(#默认颜色)

> \#默认颜色(黑色，蓝色，青色，深灰，灰色，绿色，浅灰，洋红，红色，透明，白色，黄色)

addImg(canvas 或 bitmap) 参数为 ①②③ 方法创建的任意一个

接下来的就比较复杂了

## 对画笔设置颜色

```java
setColor(a\,r\,g\,b\,④)
setColor(r\,g\,b\,④)
setColor(⑥|⑦|⑧\,④)
setColor(#默认颜色\,④)
```

## 划线

```java
drawLine(②|③\,ax\,ay\,bx\,by\,④)
drawLine(②|③\,⑤\,④)
```

## 画圆

```java
drawCircle(②|③\,x\,y\,半径\,④)
```

## 画图

```java
drawBitmap(②|③\,x\,y\,①)
drawBitmap(②|③\,⑤\,①) ⑤为需要把图片画到的位置
drawBitmap(②|③\,⑤\,⑤\,①) 第一个⑤为①需要画进去的范围，第二个⑤同上
```

## 画方

```java
drawRect(②|③\,⑤\,④)
drawRect(②|③\,ax\,ay\,bx\,by\,④)
//参数内容和划线是一样的
```

## 画点

```java
drawPoint(②|③\,x\,y\,④)
```

## 写文本

```java
drawText(②|③\,x\,y\,文本\,④)
```

## 设置画笔大小（效果就是文本大小）

```java
setSize(大小\,④)
```

## 设置画笔宽度（效果就是各种图形的大小）

```java
setWidth(宽度\,④)
```

## 设置画笔风格

```java
setStyle(填充|描边|加粗\,④)
```

```java title="画图示例"
//下面这些直接复制进去就可以直接用了
画图
//加载bitmap，参数为链接或本地图片
//b:Draw->newBitmap(@c1)
//创建画布240*240
a:Draw->newCanvas(240\,240)
//还可以用bit创建画布
//a:Draw->newCanvas(@b)
//创建画笔，必须
p:Draw->newPaint()
//设置画笔颜色rgb
Draw->setColor(150\,150\,150\,@p)
//画圆
Draw->drawCircle(@a\,120\,120\,80\,@p)
Draw->setColor(100\,100\,100\,@p)
//画线，四个数字分别为:起点xy坐标，终点xy坐标
Draw->drawLine(@a\,0\,0\,120\,120\,@p)
Draw->setColor(50\,50\,50\,@p)
//画图片
//Draw->drawBitmap(@a\,120\,120\,@b)
//创建方形(四点位置)
r:Draw->newRect(0\,0\,120\,120)
Draw->setColor(0\,0\,0\,@p)
//画方形
Draw->drawRect(@a\,@r\,@p)
Draw->drawRect(@a\,180\,180\,240\,240\,@p)
//设置文字大小
Draw->setSize(25\,@p)
//写文字
Draw->drawText(@ca\,180\,180\,测试文本\,@p)
//将图片添加，参数为canvas或bitmap
Draw->addImg(@a)
Api->send()
```
