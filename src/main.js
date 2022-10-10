import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
Vue.component('off-header-component',() => import('@/components/base/OffsetHeaderComponent.vue') )
Vue.component('header-component',() => import('@/components/base/HeaderComponent.vue') )

Vue.component('carousel-component',() => import('@/components/CarouselComponent.vue') )
Vue.component('banner-component',() => import('@/components/BannerComponent.vue') )
Vue.component('quick-store-component',() => import('@/components/QuickStoreComponent.vue') )
Vue.component('product-card-component',() => import('@/components/product/ProductCardComponent.vue') )
Vue.component('instagram-component',() => import('@/components/InstagramComponent.vue') )

Vue.component('shop-component',() => import('@/components/shop/ShopComponent.vue') )
Vue.component('filter-shop-component',() => import('@/components/shop/FilterShopComponent.vue') )

Vue.component('product-detail-component',() => import('@/components/product/ProductDetailComponent.vue') )

Vue.component('list-item-component',() => import('@/components/cart/ListItemComponent.vue') )
Vue.component('total-buy-component',() => import('@/components/cart/TotalBuyComponent.vue') )


Vue.component('footer-component',() => import('@/components/base/FooterComponent.vue') )


new Vue({
  router,
  pinia,
  render: function (h) { return h(App) }
}).$mount('#app')
