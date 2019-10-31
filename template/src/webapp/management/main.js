import Vue from 'vue';
import App from './App';
import '@/plugins/vue-cookies';
import router from '@/webapp/tenant/router';
import '@/plugins';
import '@/e9_components';
import '@/scss/style.scss';
import {store} from '@/webapp/tenant/store';

import ApiService from '@/services/ApiService';

Vue.config.productionTip = false;

if (Vue.cookies.get('token')) {
    const moment = require('moment');
    Vue.prototype.ENDPOINT = window.endpoint;
    Vue.prototype.moment = moment;
    ApiService.init();
    window.$ = require('jquery');
    new Vue({
        render: (h) => h(App),
        router,
        store
    }).$mount('#app');
} else {
    window.location.href = '/index.html';
}
