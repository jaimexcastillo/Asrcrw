import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useLoader = defineStore('loader', {
    state: () => {
      return { 
        loader : false
      }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      setLoader(val){
        this.loader = val
      },
      async setProducts(){
          console.log('===');
           await useProductsStore().getProdcuts()
      }
    },
  })