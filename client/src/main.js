import Vue from 'vue';
import VueMeta from 'vue-meta';
import { sync } from 'vuex-router-sync';

import router from './routes';
import store from './store';

import App from './App.vue';
import './registerServiceWorker';
import '../node_modules/bulma/css/bulma.min.css';
import './assets/styles/main.scss';

Vue.use(VueMeta);

sync(store, router);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
