# HTML

HTML 是用来描述网页的一种语言,其目的是**描述网页**的内容，**HTML 文件 = 网页**，文件包含 HTML 标签和纯文本，文件的后缀名为.html或.htm

- HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)
- HTML 不是一种编程语言，而是一种**标记语言** (markup language)
- HTML 使用像`<p>`的标签来描述网页，这些标签构成了网页最基本的内容

HTML 标记标签通常被称为 HTML 标签 (HTML tag)

- HTML 标签是由**尖括号**包围的关键词，比如`<html>`
- HTML 标签通常是**成对出现**的，比如`<b>`和`</b>`，也有单独出现的，例如`<img>`
- 标签对中的开头标签是**开始标签**，结尾标签是**结束标签**(也被称为开放标签和闭合标签)



## **<!DOCTYPE> 声明**

`<!DOCTYPE>`声明有助于浏览器中正确显示网页，用来告知 Web 浏览器页面使用了哪种 HTML 版本。(DOCTYPE 声明是不区分大小写)`<!DOCTYPE>` 标签没有结束标签。

在HTML 4.01 中，`<!DOCTYPE>` 声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML（Standard Generalized Markup Language 标准通用标记语言）。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

HTML5 不是基于 SGML，因此不要求引用 DTD

```html
<!DOCTYPE html>
```

## **网页编码**

对于中文网页需要使用 `<meta charset="utf-8">` 声明编码，否则会出现乱码。有的浏览器使用的是GBK编码，则你需要设置为 `<meta charset="gbk">`，一般情况下统一使用utf-8编码

## 注释

在HTML中注释用`<!--注释内容-->`表示，但在`<script>`脚本标签中不能用HTML的注释方式，

要用`/*注释内容*/`表示

## 头部

```html
<!DOCTYPE html>
<html>

<head> 
<meta charset="utf-8"> 
<title>文档标题</title>
</head>
 
<body>
文档内容......
</body>
 
</html>
```

这是一个html最基本的结构，其中`<head>` 标签包含了所有的头部标签元素。在 `<head>`元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种关于html文件的基本信息信息。

可以添加在头部区域的元素标签为: 

**`<title>`, `<style>`, `<meta>`, `<link>`, `<script>`，`<noscript>`，`<base>`**

这些标签内容不会直接显示在网页上，它们用于定义网页的基本信息，例如图标，标题，样式，网页的描述，关键词，文件的最后修改时间，作者等

## `<title>`

`<title>`标签定义了不同文档的标题。

- 定义了网页在浏览器标签页上的标题
- 当网页添加到收藏夹时，显示在收藏夹中的标题
- 显示在搜索引擎结果页面的标题

示例：

```html
<title>文档标题</title>
```

## `<base>`

`<base>`标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接

- 一个页面最多只能使用一个base元素,用来提供一个指定的默认目标
- 如果base标签指定了目标,浏览器将通过这个目标来解析当前文档中的所有相对路径,包括的标签有(a、img、link、form),也就是说,浏览器解析时会在路径前加上base给的目标而页面中的相对路径也都转换成了绝对路径。
- 使用了base标签就应带上href属性和target属性。

示例：

```html
<base href="http://www.yoseya.top" target="_blank">
```

## `<link>`

`<link>`标签定义了文档与外部资源之间的关系。

`<link>`标签通常用于链接到样式表(CSS):

```html
<link rel="stylesheet" type="text/css" href="stylename.css">
```

我们还可以通过`<link>`标签定义网页的logo

```html
<link rel="shortcut icon" href="图片的url">
```

## `<style>`

`<style>` 标签可以用来定义HTML文档的样式文件引用地址，你也可以把网页样式(CSS代码)直接写在`<style>`标签里

示例：

```html
<style type="text/css">
body {
    background-color:yellow;
}
p {
    color:blue
}
</style>
```

## `<meta>`

`<meta>` 标签通常用于指定网页的描述，关键词，文件的最后修改时间，作者等信息，它可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。

关键词：（关键词之间用`,`隔开）

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
```

描述网页：

```html
<meta name="description" content="这是一个很好的网页">
```

作者：

```html
<meta name="author" content="钢铁直男釉色鸭">
```

每30秒钟刷新当前页面:

```html
<meta http-equiv="refresh" content="30">
```

## `<script>`

我们可以通过`<script>`标签为网页编写程序

```html
<script>
document.write("Hello World!");
</script>
```

我们还可以通过它来引入外部的javascript程序

```html
<script type="text/javascript" src="aidea/js/aidea.js"></script>
```

## `<noscript>`

`<noscript>` 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时。