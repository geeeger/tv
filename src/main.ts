import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import 'flag-icon-css/css/flag-icon.css';
import 'video.js/dist/video-js.css';

// import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
