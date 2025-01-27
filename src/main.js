import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/common.scss'
import '@/styles/element-common.scss'
import axios from 'axios'
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$axios=axios;
Vue.prototype.$echarts=echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
