import Vue from 'vue'
import VueRouter from 'vue-router'
import { publicPath } from '/vue.config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    props: { NewCategories: [] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/hombres',
    name: 'ShopHombres',
    props: { NewCategories: ['hombres'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/mujeres',
    name: 'ShopMujeres',
    props: { NewCategories: ['mujeres'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/ninos',
    name: 'ShopNinos',
    props: { NewCategories: ['ninos'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/accesorios',
    name: 'ShopAccesorios',
    props: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/product/:title',
    name: 'ProductDetails',
    // params: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // params: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes
})

export default router
