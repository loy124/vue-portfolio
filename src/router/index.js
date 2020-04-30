import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Toasted from 'vue-toasted';
import VueTypeJs from 'vue-typed-js';
import VueKinesis from 'vue-kinesis';
import vueScrollto from 'vue-scrollto';

Vue.use(VueKinesis);
Vue.use(Toasted);
Vue.use(VueRouter);
Vue.use(VueTypeJs);
Vue.use(vueScrollto);

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;