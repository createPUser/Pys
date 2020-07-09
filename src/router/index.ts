import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes: Array<RouteConfig> = [
    {
        path: '',
        redirect: '/Home',
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/Category',
        name: 'Category',
        component: Category
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
