require('./bootstrap');

import Vue from 'vue';
import App from './admin/app.vue';

const app = new Vue({
    el: '#app',
    components: { App }
});
