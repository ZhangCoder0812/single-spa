import { registerApplication, start } from "single-spa";

// 核心方法 registerApplication start
// 当路径匹配到后去加载对应的子应用模块 来实现微前端

// 注册应用 
registerApplication({
  name: "@single-spa/welcome", // 应用名字 随便取
  app: () => // 当路劲匹配的时候 执行这个方法
    System.import( // 加载了一个远程模块 这个模块会暴露3个钩子 bootstrap mount unmount 
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // activeWhen: ["/"], // 当路径为 /开头 的时候加载应用
  activeWhen: location => location.pathname == '/' // 绝对匹配 /vue-app 也包含/ 方式有问题
});

//  配置vue-app应用
registerApplication({
  name: "@zf/vue-app",
  app: () => System.import('@zf/vue-app'), // 这个名字要在 index.ejs中注册一下
                                          // 会找 systemjs-importmap 中的匹配路径去加载
  activeWhen: ["/vue-app"], // 以/vue-app开头的应用 
  customProps: { a: '我是base传来的数据 vue' } // 可以传数据 任何类型的数据 给vue-app传数据
});

//  配置react-app应用
registerApplication({
  name: "@zf/react-app",
  app: () => System.import('@zf/react-app'), 
  activeWhen: ["/react-app"], 
  customProps: { a: '我是base传来的数据 react' }  
});

// 启动应用
start({
  urlRerouteOnly: true, // 全部交给single-spa来管理路径 默认的 没关系
});
