import Vue from 'vue'
import vueRouter from 'vue-router'
let Profile = ()=> import('./views/Profile.vue');
let Home = ()=> import('./views/Home.vue')



Vue.use(vueRouter);

export default new vueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/profile',
            name:'profile',
            component:Profile
        }
    ]
})