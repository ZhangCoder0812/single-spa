import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';

// vue3的项目 会使用vue-cli-single-plugin改写应用的入口
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        a: this.a // 拿到传的数据  base中注册vue-app的时候传的
      });
    },
  },
  handleInstance(app) {
    app.use(router);
  },
});

// 要求返回 bootstrap mount unmount 钩子
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
