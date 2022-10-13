import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// import jsonProducts from '@/assets/data/product.js'

export const useCart = defineStore('cart', {
    state: () => {
        return { 
            cart: useStorage('cart',[]) 
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        addItemToCart(item){
            this.cart.push(item)
        },
        removeItemToCart(id){
           this.cart = this.cart.filter(item => item.id != id )
        }
    },
    getters:{
        getCartQuantityItems: (state) => state.cart.length
    }
  })