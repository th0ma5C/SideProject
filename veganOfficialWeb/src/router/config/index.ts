import Home from '@pages/Home/index.vue'
import Questionnaire from '@pages/Questionnaire/index.vue'
import Menu from '@pages/Menu/index.vue'
import About from '@pages/About/index.vue'
import Cart from '@pages/Cart/index.vue'
import Profile from '@pages/Profile/index.vue'
import Product from "@/pages/Menu/product/Product.vue";
import type { RouteLocationNormalized } from 'vue-router'


export default [
    {
        path: '/',
        alias: ['/home'],
        // redirect: '/home',
        component: Home,
        name: 'Home',
    },
    // {
    //     path: '/home',
    //     component: Home
    // },
    {
        path: '/questionnaire',
        component: Questionnaire
    },
    {
        path: '/menu',
        component: Menu,
    },
    {
        name: 'Product',
        component: Product,
        path: '/product',
        props(route: RouteLocationNormalized) {
            return route.query
        },
        meta: {
            keepAlive: true
        }

    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },

]