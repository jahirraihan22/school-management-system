require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './admin/app.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App
    },
    
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router
});
 