---
sidebar: auto
---

# VuePress

- [VuePress官方文档](https://vuepress.vuejs.org/) 
- [VitePress官方文档](https://vitepress.vuejs.org/) 


## vuepress-plugin-fulltext-search

[vuepress-plugin-fulltext-search](https://github.com/leo-buneev/vuepress-plugin-fulltext-search)是一个VuePress的搜索插件，使用[Flexsearch](https://github.com/nextapps-de/flexsearch)库为VuePress提供全文搜索功能

### 用法

**安装插件**

```bash
npm i vuepress-plugin-fulltext-search -D
#or
yarn add vuepress-plugin-fulltext-search -D
```

在 `docs/.vuepress/config.js`中添加以下内容：

```js
// docs/.vuepress/config.js
module.exports = {
  // ...
  plugins: ['fulltext-search'],
}
```
插件已经安装完成，编译后即可查看效果

### 搜索参数

示例如下：

```none
https://your-website.com?query=hello+world
```

### 从搜索中排除页面

如果不想让某页面在搜索时出现，可以在该页面的开头添加`search: false` 

示例如下：

```none
---
search: false
---
```

##  VitePress快速部署

### 1. **创建项目**

创建并更改为新目录
```sh
mkdir vitepress-starter && cd vitepress-starter
```

然后，初始化包管理器

```sh
yarn init
```
### 2. **安装VitePress**

添加 VitePress 和 Vue 作为项目的开发依赖项
```sh
yarn add --dev vitepress vue
```


### 3. **启动开发环境**

创建一个文档，用于测试

```sh
mkdir docs && echo '# Hello VitePress' > docs/index.md
```
在项目根目录中创建文件`package.json`

```
.
├─ docs
│  └─ index.md
└─ package.json
```

在文件`package.json`中添加

```json
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs",
    "deploy": "bash deploy.sh"
  },
```

通过本地服务器展示文档

```sh
yarn docs:dev
```

通过访问链接`http://localhost:5173`查看网页

### 4. **配置文件**

在`docs`目录中创建一个名称为`.vitepress`目录，并在`.vitepress`中创建文件`config.js`

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

在文件`config.js`中添加一些基本信息

```js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

### 5. **部署到GitHub**

在GitHub中创建一个新项目，并在项目的设置中开启GitHub Pages

新建文件`deploy.sh`，并把以下内容填写在文件中

```sh
#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#以下内容需要填写新建项目的SSH

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

如果项目名称不是`youname.github.io`这样的形式，就需要在`config.js`文件中配置base，如下

```js
export default {
   base:'/docs/'
}
```

最后，部署到GitHub上

```sh
yarn deploy
```

更多请参考[官方文档](https://vitepress.vuejs.org/) 

## 问题

### PWA更新缓慢问题

在**VuePress**中可以通过安装**PWA插件**，使网页可以**离线访问**。但我在使用一段时间后发现了PWA的一些问题，每次提交新的内容后打开网页，都需要**等待一段时间才会弹出更新弹窗**，甚至有时候等好长时间都无法弹出更新弹窗

**首先确定网站是否可以正常访问**
::: warning 注意
由于PWA会使浏览器缓存网页从而实现离线访问，所以无法直接判断网站是否可以访问。可以使用其他浏览器或设备访问网站，从而判断网站是否可以访问。由于浏览器的隐私模式不会保存网页缓存，所以我们也可以利用这一特性访问网页，判断网页是否可以正常访问。
:::
**如果网页可以正常访问，继续判断是否是`Service Workers`出现了问题**

在`service-worker.js`中有一行代码是；

```js
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
```

有可能是代码中的**链接无法访问**的导致的，使用浏览器访问该[链接](https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js)，查看是否可以访问。

该链接中的内容如下：

::: details workbox-sw.js
```js
!(function () {
  "use strict";
  try {
    self["workbox:sw:4.3.1"] && _();
  } catch (t) {}
  const t = "https://storage.googleapis.com/workbox-cdn/releases/4.3.1",
    e = {
      backgroundSync: "background-sync",
      broadcastUpdate: "broadcast-update",
      cacheableResponse: "cacheable-response",
      core: "core",
      expiration: "expiration",
      googleAnalytics: "offline-ga",
      navigationPreload: "navigation-preload",
      precaching: "precaching",
      rangeRequests: "range-requests",
      routing: "routing",
      strategies: "strategies",
      streams: "streams",
    };
  self.workbox = new (class {
    constructor() {
      return (
        (this.v = {}),
        (this.t = {
          debug: "localhost" === self.location.hostname,
          modulePathPrefix: null,
          modulePathCb: null,
        }),
        (this.s = this.t.debug ? "dev" : "prod"),
        (this.o = !1),
        new Proxy(this, {
          get(t, s) {
            if (t[s]) return t[s];
            const o = e[s];
            return o && t.loadModule(`workbox-${o}`), t[s];
          },
        })
      );
    }
    setConfig(t = {}) {
      if (this.o)
        throw new Error(
          "Config must be set before accessing workbox.* modules"
        );
      Object.assign(this.t, t), (this.s = this.t.debug ? "dev" : "prod");
    }
    loadModule(t) {
      const e = this.i(t);
      try {
        importScripts(e), (this.o = !0);
      } catch (s) {
        throw (console.error(`Unable to import module '${t}' from '${e}'.`), s);
      }
    }
    i(e) {
      if (this.t.modulePathCb) return this.t.modulePathCb(e, this.t.debug);
      let s = [t];
      const o = `${e}.${this.s}.js`,
        r = this.t.modulePathPrefix;
      return (
        r &&
          "" === (s = r.split("/"))[s.length - 1] &&
          s.splice(s.length - 1, 1),
        s.push(o),
        s.join("/")
      );
    }
  })();
})();
//# sourceMappingURL=workbox-sw.js.map
```
:::

如果链接正常可以尝试切换网络重试，如果链接不能正常访问，可能是DNS出现了问题。例如，DNS劫持或DNS污染，可以更换网络后再尝试，或者使用代理或VPN的方式解决
