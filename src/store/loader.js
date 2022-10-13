import { defineStore } from 'pinia'

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
      }
    },
  })