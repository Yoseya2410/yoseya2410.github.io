---
sidebar: auto
---

# VuePress

- [VuePress官方文档](https://vuepress.vuejs.org/) 
- [VitePress官方文档](https://vitepress.vuejs.org/) 

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

**首先，我确定网站是可以正常访问的**（注意，由于浏览器中有PWA缓存的缘故所以无法判断网站是否可以访问，可以使用其他浏览器或设备访问网站，来判断网站是否可以访问。由于浏览器的隐私模式是不保存网页缓存，所以我们也可以利用这一性质，使用浏览器的隐私模式来访问。）

经过分析后发现是**Service Workers**出现了问题，在**service-worker.js**中有一行代码是

```js
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
```
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

我猜测可能是代码中的**链接无法访问**的缘故，通过[站长工具](https://tool.chinaz.com/speedtest/storage.googleapis.com) 找一个可以访问的**解析IP**，把这个**IP**写入**hosts文件**,格式如下

```
142.251.42.240              storage.googleapis.com
```

回到浏览器打开**开发者工具**，查看**Service Workers**的状态和`service-worker.js`是否正常，如果还是不能访问，也有可能是DNS出现了问题。例如，DNS劫持或DNS污染，可以尝试使用代理或VPN的方式解决

在浏览器中想要删除网页PWA的缓存时，不要使用清除浏览器缓存的方式，这大概率是并不会成功，可以通过注销该网页的**Service Workers**来清除

操作：打开浏览器**开发者工具** → **应用程序** → **Service Workers** → 注销

**如果不需要PWA时**，可以使用浏览器的**隐私模式**访问网页，隐私模式**不会保存缓存**，下次打开网站时还是通过直接访问的方式打开网页，而不是访问离线缓存的内容
