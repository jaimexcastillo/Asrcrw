<template>
  <div id="app">
    <off-header-component /> 
    <header-component />
    
    <router-view/>
    <vue-loader-component v-if="loader.loader" />

    <footer-component />
  </div>
</template>

<script>
import {useLoader} from '@/store'

export default {
  data(){
    return{
      loader: useLoader()
    }
  },
  beforeMount(){
    this.loader.setLoader(true)
  },
  mounted(){
    let self = this
    setTimeout(function() {
            self.loader.setLoader(false);
      }, 2000);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
