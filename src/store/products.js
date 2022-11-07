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
        const url = 'http://localhost:3001/details'
        const result = await fetch(url)
        const data = await result.json()
        console.log('response: ',data.data);
        this.products = data.data;
        console.log('productos: ',this.products);
        setTimeout(() => {
          this.products = data.data
        }, 1000);
      }
    },
  })