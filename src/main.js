import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugin/amap";


Vue.config.productionTip = false;

// 全局组件
import "./components/back";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
