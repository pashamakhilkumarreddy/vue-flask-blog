import Vue from 'vue';
import VueMeta from 'vue-meta';
import {
  sync,
} from 'vuex-router-sync';
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';

import router from '@/routes';
import store from '@/store';

import App from './App.vue';
import Loader from './components/globals/Loader.vue';
import './registerServiceWorker';
import '../node_modules/bulma/css/bulma.min.css';
import './assets/styles/main.scss';
import './utils/validations';

Vue.use(VueMeta);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('loader', Loader);

sync(store, router);
setInteractionMode('lazy');

Vue.config.productionTip = false;

Vue.prototype.$navigateTo = function navigateTo(route) {
  this.$router.push(route);
};

Vue.prototype.$checkObjectProps = (obj = {
  test: '',
}) => Object.values(obj).every((val) => val);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
