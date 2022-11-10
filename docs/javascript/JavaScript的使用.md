---
tags:
  - z/js/
---

# JavaScript的使用

## 介绍

- JavaScript 是一种轻量级的脚本语言
- JavaScript 可以插入 HTML 页面（网页），浏览器会执行它
- JavaScript（简称“JS”）是一种具有函数优先的轻量级解释型语言，在程序的运行过程中逐行进行解释，主要用于Web开发，但也可以用在其他环境中
- JavaScript是弱类型语言，使用时，对数据类型没有严格的要求

## 用法

### `<script>` 标签

我们可以使用`<script>` 标签在html文件中插入JavaScript代码，在浏览器中执行

你可以把`<script>`标签放在`<body>`标签或`<head>`标签中

```html
<script>
alert("hello,world");
</script>
```

### 使用外部js文件

你也可以通过这种方式把外部的js文件导入网页中

```html
<script src="myScript.js"></script>
```

这样在网页中就可以使用这个文件里的代码，相对于把代码直接嵌入网页，引入外部js文件的方式更安全

