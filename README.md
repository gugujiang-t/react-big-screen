**通知：最新的低代码大屏系统GoView已开源，详见：[https://gitee.com/MTrun/go-view](https://gitee.com/MTrun/go-view)**

![输入图片说明](https://gitee.com/MTrun/go-view/raw/master/readme/logo-t-y.png)

## 一、项目描述

- 本项目是基于 React、zustand、DataV、ECharts 框架的 " **数据大屏项目** "。支持数据动态刷新渲染、屏幕适配、数据请求模拟、局部样式、图表自由替换/复用等功能。与旧版的区别在于使用了函数式编程，旧版则使用了Class写法。
- [**React Class写法版本请点击这里查看**](https://gitee.com/MTrun/react-big-screen)
- [**Vue3 版本请点击这里查看，使用 Hooks+TypeScript 实现，全新内容等你探索!**](https://gitee.com/MTrun/vue-big-screen-plugin)
- [**Vue2 版本请点击这里查看，也很不错的(o ﾟ v ﾟ)ノ**](https://gitee.com/MTrun/big-screen-vue-datav)
- 项目需要全屏展示（按 F11）。
- 项目环境：react^18.2.0、vite^5.2.0、npm^9.8.1、node^18.18, zustand^4.5.2。
- 请拉取 master 分支的代码，其余是开发分支。
- 项目各依赖包版本较低，如有影响请自行升级。
- 需要其它地图数据的，请查看我的其它项目（有一个地图合集）

友情链接：

1.  [React 官方文档](https://react.docschina.org/docs/introducing-jsx.html)
2.  [zustand官方文档](https://zustand-demo.pmnd.rs/)
3.  [DataV 官方文档](http://datav-react.jiaminghi.com/guide/)
4.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API文档](https://echarts.apache.org/zh/api.html#echarts)
5.  [styled-components 官方文档](https://styled-components.com/)，[思否相关教学文章](https://segmentfault.com/a/1190000014682665)
6.  [项目 gitee 地址（国内速度快）](https://gitee.com/MTrun/react-big-screen-plugin)

项目界面图：
![界面展示](https://images.gitee.com/uploads/images/2020/0927/205317_db15e619_4964818.gif '界面展示.gif')

## 二、文件目录介绍

```shell
Project
├── mock 模拟数据
├── src
│  │  ├── assets 静态资源
│  │  ├── components 各个模块组件
│  │  ├── store zustand 状态管理
│  │  ├── routes 路由主界面定义
│  │  ├── services 异步获取函数
│  │  ├── style 全局样式
│  │  └── utils 工具函数
│  │
│  ├── index.js 主函数文件
│  └── router.jsx 路由定义文件
│
└── .roadhogrc.mock.js 导出模拟数据
```

## 三、详情介绍

### 启动项目

需要提前安装好 `nodejs` 与 `npm`,下载项目后在项目主目录下运行 `pnpm install` 拉取依赖包，使用命令 `npm run dev` 启动项目，启动项目后需要手动全屏（按 F11）进行查看。

### 数据请求模拟

项目模拟数据方式，数据放置在 `mock` 文件夹中

### 图表组件

图表组件主要使用了 ECharts 和 DataV 可视化框架来进行开发。图表文件在 `components/*/charts` 中，配置文件在 `charts/options.js` 里，动态数据由各个 `page/index.js` 进行接受和导入。ECharts 渲染函数统一封装在了 `utils/chart.js` 中。

### 样式编写

样式编写使用了 `styled-components` 插件，通过样式组件化实现类似 Vue 中的 scoped 功能，界面中的样式不会互相影响，最简单的例子如下：

样式文件 style：

```js
import styled from 'styled-components';

// 生成 div 标签
export const Index = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
```

使用方式：

```js
import { Index } from './style';

//......

 render() {
   return (
    //  编译之后内容被 div 标签包裹
     <Index> 内容 </Index>
   )
 }
```
`styled-components` 还拥有传参、继承、定义属性等功能，如有需要请前往官网深度学习。

全局样式通过 `styled-components —> createGlobalStyle` 引入到了 router.jsx 中并注册到全局，具体参考下方 `icon` 引入方式。

### icon 文件

icon 文件使用 `iconfont` 图标，同样使用 `styled-components` 进行注册，需要多一个处理步骤。

- 下载 `unicode` 文件到项目中如 `assets/icon`，删除多余 `demo*` 和 `iconfont.js`。
- 将 `iconfont.css` 文件修改后缀为 `iconfont.js`。
- 打开 `iconfont.css` 文件修改为以下格式：

```js
import { createGlobalStyle } from 'styled-components';

// 使用 styled-components 全局注册函数包裹内容并导出
export const Iconstyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  ......
`
- 与全局样式一样在 `router.jsx` 中进行注册。
```

### 屏幕适配

本项目借助了 `utils/flexible.js` 插件，通过改变 rem 的值来进行适配，原设计为 1920px。 ，适配区间为：1366px ~ 2560px，本项目有根据实际情况进行源文件的更改，小屏幕（如:宽为 1366px）需要自己舍弃部分动态组件进行适配，如'动态文字变换组件'会影响布局，需要手动换成一般节点，

```js
// flexible文件位置: `common/flexible.js`,修改部分如下
function refreshRem() {
  var width = docEl.getBoundingClientRect().width;
  // 最小1366px，最大适配2560px
  if (width / dpr < 1366) {
    width = 1366 * dpr;
  } else if (width / dpr > 2560) {
    width = 2560 * dpr;
  }
  // 原项目是1920px我设置成24等份，这样1rem就是80px
  var rem = width / 24;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
}
```

## 五、反馈

QQ群：495755841

<img src="public/QQ2.png" width="200px"/>

## 六、其余

这个项目是个人的作品，难免会有问题和 BUG，如果有问题请进行评论，我也会尽力去更新，自己也在前端学习的路上，欢迎交流，非常感谢！
