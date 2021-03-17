require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './admin/app.vue';
import Student from './admin/student.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard',
        component: App
    },
    {
        path: '/student',
        component: Student
    }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router
});
 