import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'

const routes = [
    { path: '/posts', component: AppPosts },
    { path: '/post/:id', component: SinglePost}
]

export const router = new VueRouter({
    routes: routes,
    mode: 'history'
})