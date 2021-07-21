/* 

创建spa应用：
  npm i create-single-spa -g
  create-single-spa 项目名

1-  先创建一个根应用
  create-single-spa base 
    Select type to generate (Use arrow keys)
        single-spa application / parcel  创建公共组件 模块的应用
        in-browser utility module (styleguide, api cache, etc)  创建公共方法 工具的应用
       > single-spa root config 创建根应用

    Which package manager do you want to use?
        yarn
        > npm
        pnpm

    Will this project use Typescript? (y/N) n

    Would you like to use single-spa Layout Engine (Y/n) n

组织名
Organization name (can use letters, numbers, dash or underscore) zf

2- 创建一个react应用 
    create-single-spa react-app

   ? Select type to generate single-spa application / parcel
   ? Which framework do you want to use? react
   ? Which package manager do you want to use? npm
   ? Will this project use Typescript? No
   ? Organization name (can use letters, numbers, dash or underscore) zf 要和根应用组织名一样
   ? Project name (can use letters, numbers, dash or underscore) react
 


3- 创建一个vue应用  
    create-single-spa vue-app
    ? Select type to generate single-spa application / parcel
    ? Which framework do you want to use? vue
    ? Organization name (can use letters, numbers, dash or underscore) zf


    Vue CLI v4.5.13
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, Router
    ? Choose a version of Vue.js that you want to start the project with 3.x
                                    选vue3兼容性不好 没法抽离 externals支持不好
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
    ? Save this as a preset for future projects? (y/N) n
    创建vue项目没有要求选项目名 默认使用上面脚手架后面跟着的那个名字 vue-app


 新建个文件夹 将上面创建的3个项目放进去
 

  @zf/root-config 组织名+项目名 加载一个应用
    vue3项目名字在package.json中的name字段 其他的在webpack.config.js中

    这几个项目默认没有关系 需要自己构建关联

    vue项目也可以单独运行 npm run serve:standalone package.json中的
    接入的base的时候运行还是 npm run serve 运行 
    vue 路由也要改写 要加前缀 /vue-app

    react项目默认没有安装react-router 自己安装下 npm i react-router-dom
    要在webpack.config.js中将 react-router-dom 使用externals抽离出去
    在 base/index.ejs 和 single-spa 一起以cdn形式引入

    接入react项目的时候 要添加react的cdn 因为默认会把react react-dom 打包成 system.js 
    进行抽离
    cdn 和  "imports": {
          "single-spa 放在一起


   实现微前端 现在主要用 qiankun ，single-spa很少用了 因为SymtemJS不好 坑多 
   SystemJS原理就是JSONP的原理 script标签

   qiankun用的不是 SymtemJS 

*/