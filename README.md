# React-Admin-Template-Pro
- <font size=4 >[在线预览](https://www.cloudshadow.xyz)</font>
-  <font size=4 >[疑问和建议请在这提交](https://github.com/MelodyFish/react-admin-template-pro/issues)</font>
## 前言
> 在做这个系统前，我调查了一番，发现和React后台模板相关的项目有以下特点：技术栈老旧、项目不完整、文档缺失、组件不灵活(写死的居多)。同时也为了方便初级程序员找到一个合适的练手项目，方便全栈工程师能够利用该系统快速搭建项目，方便前端工作人员直接写业务代码避免重复性工作，出于这个目的写了这个系统。
## 简介
&emsp;&emsp;该系统是基于`React Hooks`和 `React-Router V6` 开发的后台管理系统模板，整个系统采用的技术栈都比较新并且以组件化的方式搭建而成，涵盖了`登录\注销`, `主题切换`, `动态路由侧边栏`, `动态面包屑`, `响应式收缩侧边栏`, `鉴权路由`, `权限路由`等功能，详细功能请移步至此, 平均每个组件 **60** 行代码量，方便食用。

&emsp;&emsp;如果遇到不想用的功能，可直接移除掉即可，各模块耦合度非常低是**可插拔式**的。

&emsp;&emsp;开源维护不易，如果真的帮助到你，真的很开心。点击右上角的 **Star** 鼓励一下作者吧~
## 功能
- 登录/注销
- 主题切换
- 动态侧边栏
  - 根据路由表配置自动生成
  - 支持多级嵌套路由
  - 自适应收缩侧边栏
  - 根据权限动态显示
- 动态面包屑
- Axios再封装
  - 实例配置
  - 请求&响应拦截
  - 全局网络状态码处理
- 鉴权组件：未登录的用户无法进入该组件
- 权限组件：没有权限的角色无法进入该组件
- 懒加载组件
- less&sass适配
- 404页面
- Proxy代理配置解决跨域
- 未来会增加的功能
  - 拖拽
  - 富文本
  - 次世代UI
  - 全局加载
  - 导入导出Excel

## 技术栈
- `React@18 Hooks` 基于 React 最新版本，全面拥抱Hooks
- `React-Router@6.x` 只需配置路由表即可自动生成
- `Antd@4.23.x` 国内最火的React-CSS库
- `Mobx@6.x` 全局状态管理，语法简单，功能强大，完虐dva, 5分钟轻松入手
- `ECharts@5.x` 前端必备的数据可视化库
- `Axios@0.27.x` 基于Promise封装的网络请求库，99%的前端用了都说好
- `Less&Sass` 提供更加强大的语法

## 目录结构
```
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ pages                  # 路由组件
│   ├─ service                # 所有网络请求
│   ├─ store                  # 全局状态管理
│   ├─ utils                  # 全局公用方法
|   ├─ App.css                # 入口页面样式
│   ├─ App.jsx                # 入口页面
|   ├─ index.css              # 全局样式文件
|   ├─ index.js               # 源码入口
|   ├─ route.js               # 路由表配置文件
|   └─ setupProxy.js          # 代理配置
└── package.json              # package.json
```
## 部分功能展示
### 主题切换
![主题切换](https://pic.imgdb.cn/item/6374dcee16f2c2beb15c52bb.gif)

### 自适应收缩侧边栏
![自适应侧边栏](https://pic.imgdb.cn/item/63758fe716f2c2beb18a16b1.gif)

### 根据权限动态显示侧边栏
#### 当你以管理员的身份进入时，会显示Dashboard下“分析页”，但以普通用户的身份时则不会显示。
![权限路由](https://pic.imgdb.cn/item/637d892416f2c2beb180caa7.png)

![权限路由](https://pic.imgdb.cn/item/637d8a5016f2c2beb1821ab0.png)
#### 即使你知道该路由的路径，想通过改变浏览器URL强行进入时，也会因为没有权限而被阻挡,效果如下图所示：
![权限路由](https://pic.imgdb.cn/item/637d92a216f2c2beb18eb5ce.gif)

## 安装&启动
```
  克隆项目
  1. git clone https://github.com/MelodyFish/react-admin-template-pro.git
  进入目录
  2. cd react-admin-template-pro
  安装依赖
  3. npm install    ||   yarn install
  启动
  4. npm run start  ||   yarn start
```
