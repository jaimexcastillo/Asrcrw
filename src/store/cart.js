import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// import jsonProducts from '@/assets/data/product.js'

export const useCart = defineStore('cart', {
    state: () => {
        return { 
            cart: useStorage('cart',[]) ,
            total: 0
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        addItemToCart(item){
            this.cart.push(item)
        },
        removeItemToCart(id){
           this.cart = this.cart.filter(item => parseInt(item.id) != id )
        }
    },
    getters:{
        getCartQuantityItems: (state) => state.cart.length,
        getTotal:state =>{
            state.total = 0
            state.cart.forEach( item =>{
            state.total = item.price + state.total
            // console.log(state.total);
            })
            return state.total.toFixed(2)
        }
    }
  })