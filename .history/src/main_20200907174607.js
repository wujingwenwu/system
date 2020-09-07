import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './bus'
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  echarts from 'echarts';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts;
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
