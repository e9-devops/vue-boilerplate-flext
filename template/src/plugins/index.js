import Vue from 'vue';

import { ModalPlugin, NavPlugin } from 'bootstrap-vue';
import VueCookies from 'vue-cookies';
import VueSweetalert2 from 'vue-sweetalert2';
import InfiniteLoading from 'vue-infinite-loading';

// Configure options here
Vue.use(InfiniteLoading);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueCookies);
