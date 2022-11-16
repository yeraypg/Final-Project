/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import SpotView from '../views/SpotView.vue'
import FlopView from '../views/FlopView.vue'
import ExampleView from '../views/ExampleView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/main',
        name: 'main',
        component: MainView
    },
    {
        path: '/spot',
        name: 'spot',
        props: true,
        component: SpotView
    },
    {
        path: '/flop',
        name: 'flop',
        props: true,
        component: FlopView
    },
    {
        path: '/example',
        name: 'example',
        props: true,
        component: ExampleView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
