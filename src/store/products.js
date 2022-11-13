import { defineStore } from 'pinia'
import jsonProducts from '@/assets/data/product.js'

export const useProductsStore = defineStore('products', {
    state: () => {
      return { products: [] }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      async getProdcuts(){
        const url = process.env.VUE_APP_URL_SERVER + '/details'
        console.log(url);
        const result = await fetch(url)
        const data = await result.json()
        this.products = data.data;
        // setTimeout(() => {
        //   this.products = data.data
        // }, 1000);
      }
    },
  })