import { defineStore } from 'pinia'
import jsonProducts from '@/assets/data/product.js'

export const useProductsStore = defineStore('products', {
    state: () => {
      return { products: jsonProducts }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })