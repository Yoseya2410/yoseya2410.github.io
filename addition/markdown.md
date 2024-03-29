---
sidebar: auto
---

# Markdown

## 标题

```md
# 这是 <h1> 一级标题

## 这是 <h2> 二级标题

### 这是 <h3> 三级标题

#### 这是 <h4> 四级标题

##### 这是 <h5> 五级标题

###### 这是 <h6> 六级标题
```

## 斜体

```md
*这个是 斜体 的文字*
_这也是 斜体 的文字_
```
**演示**：

*这个是 斜体 的文字*

_这也是 斜体 的文字_

## 粗体

```md
**这个是 粗体 的文字**
__这也是 粗体 的文字__
```
**演示**：

**这个是 粗体 的文字**

__这也是 粗体 的文字__


## 划去文本
```md
~~这个文字将会被横线删除~~
```

**演示**：

~~这个文字将会被横线删除~~

## 下划线

```md
<u>带下划线文本</u>
```

**演示**：

<u>带下划线文本</u>

## 列表

**无序列表**

```md
* 第一项
* 第二项
* 第三项
```

**演示**：

* 第一项
* 第二项
* 第三项


除了这种方式还可以用`+`和`-`

```md

* 方法1
+ 方法2
- 方法3
```

**演示**：

* 方法1
+ 方法2
- 方法3


**有序列表**

```md
1. 第一项
2. 第二项
3. 第三项
```

**演示**：

1. 第一项
2. 第二项
3. 第三项

虽然看起来好像没什么变化，但这个并不是普通的文本，而是经过markdown排布的

## 区块

```md
> 这是一个区块


> 这是一个大区块
> 
> 若要在区块里换行
> 
> 行之间要用`>`联系起来
```

> 这是一个区块

**区块换行**：

> 这是一个大区块
> 
> 若要在区块里换行
> 
> 行之间要用用`>`联系起来


**区块嵌套**：

```md
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

## 插入图片

```md
![logo](/img/logo.png)
```

`[]`里是图片名称`()`里是图片路径

## 链接

```md
[GitHub](https://github.com)
```

`[]`里是链接文本`()`里是链接

**演示**：

[GitHub](https://github.com)



## 分割线

以下三种方式都可以表示分割线

```md
---
***
___
```

**演示**：

---

这就是分割线

## 行内代码

```md
`scanf("%d", &price); `
```

**演示**：

`scanf("%d", &price); `

## 代码块

在Markdown中，我们可以通过这样的方式使用代码块

<pre class="language-text">
<code>```
这里填写代码
```</code>
</pre>

如果代码要显示高亮，可以加上代码的类型，例如语言类型为JavaScript时就填写`javascript`或者`js`

<pre class="language-text">
<code>```js
这里填写代码
```</code>
</pre>

**显示效果：**

```c
#include <stdio.h>
int main()
{
    printf("%d",100-1);
    return 0;
}
```

## 公式

我们可以在Markdown中使用LaTeX来编写公式，要在LaTeX代码前后写上`$$`

```latex
$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}\tag{1.1}
$$
```

**演示**：

$$
f(x) = \begin{cases}
\lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
\pi, & x=3 \\
\int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
\end{cases}\tag{1.1}
$$

## 行内公式

要在一行文本中添加公式时，要在LaTeX代码前后写上`$`

```latex
表达式$f(x) = \log_{a}{b}-c$是一个对数函数
```

**演示**：

表达式$f(x) = \log_{a}{b}-c$是一个对数函数

## 表格

| 标题   | 标题   | 标题   |
| ------ | ------ | ------ |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

在markdown中表格的单元间要用`|`隔开，第一行目录要用`| ------ |`和后面的表格隔开

```md
| 标题   | 标题   | 标题   |
| ------ | ------ | ------ |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

## 注释

```md
<!--注释-->
```

在Markdown中使用注释和HTML一样

## 补充

* 在Markdown中还**可以使用html标签**，你可通过html标签来添加一些Markdown原本没有的内容，例如按钮，视频等
* Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用`\`转义特殊字符

例如`*`在markdown中用来表示列表，如果要像文本一样的输出它就要在符号前加上`\`，就像这样`\*`，那么`*`就会像文本一样在段落中显示


### 使用VScode编写Markdown

**插件推荐**

* Markdown All in One

它能让你正确的编写markdown，自动帮你自动填写序号，并且支持快捷键功能和命令，让你编写更快捷，不仅如此，当你编写Latex公式时还会弹出选项，以免你忘记那些表示符号的代码，如果你要插入链接，你只需要选中要插入的文本然后把链接粘贴上就行他会自动帮你处理

**快捷键**

| 快捷键               | Command          |
| -------------------- | ---------------- |
| Ctrl/Cmd + B         | 切换粗体         |
| Ctrl/Cmd + I         | 切换斜体         |
| Alt+S (on Windows)   | 切换删除线       |
| Ctrl/Cmd + M         | 切换LaTeX公式    |
| Ctrl/Cmd + Shift + F | 格式化           |
| Ctrl/Cmd + K V       | 将预览切换到一侧 |

**命令**

* **Markdown All in One: Print current document to HTML**
  
将当前文档打印为 HTML

* **Markdown All in One: Print documents to HTML**

将目录下的所有文档打印为 HTML

以上这两个命令最实用，除此之外还有其他命令，使用**Ctrl + Shift + P**，然后在搜索框输入插件名称就可以看到命令，不需要输入全部名称一般输入markdown就可以看到命令
