## 

``` bash
# 安装依赖
cnpm install
或
yarn install

# 开发环境
npm run dev
或
yarn dev

# 生产环境
npm run build
或
yarn build
```


## 目录结构

```
└─src                               // 源代码目录
│    ├─pages                        // 页面
│    │  ├─about                     // demo 关于我们
│    │  │      about.html
│    │  │      about.js
│    │  │      about.scss
│    │  └─home                      // demo 首页
│    │          index.html
│    │          index.js
│    │          index.scss
│    │
│    └─tools                        // 工具库
│            utils.js
│
│  .babelrc                         // babel的配置文件
│  .eslintignore                    // eslint忽略配置文件
│  .eslintrc.js                     // eslint的配置文件
│  .gitignore                       // git忽略配置文件
│  ecosystem.config.js              // pm2发布配置文件
│  package.json                     // npm项目配置文件
│  page.config.js                   // 页面配置文件
│  README.md                        // 说明
│  webpack.config.dev.js            // 开发环境的webpack配置文件
│  webpack.config.prod.js           // 生产环境的webpack配置文件

```

## 开发流程

- 新增页面：
1. 在pages中新增一个文件夹
2. 在page.config.js中添加这个页面的信息即可

例如：添加设置页面
```
  {
    name: 'setting',
    html: 'setting/setting.html',
    jsEntry: 'setting/setting.js'
  }

- 通过pm2 deploy发布
  - waiting...
