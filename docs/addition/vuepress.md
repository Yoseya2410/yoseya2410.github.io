# vuepress

##  Vitepress快速部署

[官方文档](https://vitepress.vuejs.org/) 

1. **创建项目**

创建并更改为新目录
```sh
mkdir vitepress-starter && cd vitepress-starter
```

然后，初始化包管理器

```sh
yarn init
```
2. **安装VitePress**

添加 VitePress 和 Vue 作为项目的开发依赖项
```sh
yarn add --dev vitepress vue
```


3. **启动开发环境**

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

4. **配置文件**

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

5. **部署到GitHub pages**

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

最后，部署到GitHub pages上

```sh
yarn deploy
```

更多请参考[官方文档](https://vitepress.vuejs.org/) 