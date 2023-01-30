import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// import jsonProducts from '@/assets/data/product.js'

export const useCart = defineStore('cart', {
    state: () => {
        return { 
            cart: useStorage('cart',[]) ,
            total: 0,
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
        },
        removeAllItems(){
            this.cart = []
        },
        async savePurchase(orderData){
            console.log('guardando');
            const url = process.env.VUE_APP_URL_SERVER + '/save'
            console.log(url);
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(orderData)
            })
            const data = await result.json()
            console.log('se guardo la informacion?',data);
          }
    },
    getters:{
        getCartQuantityItems: (state) =>{
            console.log();
            let totalQuantity = 0
            state.cart.forEach( product => {
                totalQuantity += product.items.length 
            })
            return totalQuantity
        },
        getTotal:state =>{
            state.total = 0
            state.cart.forEach( product =>{
                product.items.forEach(item =>{
                    state.total = product.price + state.total
                })
            // console.log(state.total);
            })
            return state.total.toFixed(2)
        }
    }
  })