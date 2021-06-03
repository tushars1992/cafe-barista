import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faChevronUp,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { capitalize, formatAmount } from '@/utilities/filters';

library.add(faChevronDown);
library.add(faChevronUp);
library.add(faExclamationTriangle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('capitalize', capitalize);
Vue.filter('amount', formatAmount);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
