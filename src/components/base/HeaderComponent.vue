<template>
  <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li v-bind:class="[active === '/'?  'active' : '']" @click="active ='/' "><router-link to="/">Home</router-link></li>
                            <li v-bind:class="[active === '/shop'?  'active' : '']" @click="active ='/shop' "><router-link to="/shop">Tienda</router-link>
                                <ul class="dropdown">
                                    <li><router-link to="/shop">Todos</router-link></li>
                                    <li><router-link to="/shop/hombres">Hombres</router-link></li>
                                    <li><router-link to="/shop/mujeres">Mujeres</router-link></li>
                                    <li><router-link to="/shop/ninos">Niños</router-link></li>
                                    <li><router-link to="/shop/accesorios">Accesorios</router-link></li>
                                </ul>
                            </li>
                            <li v-bind:class="[active === '/about'?  'active' : '']" @click="active ='/about' " ><router-link to="/about">About</router-link></li>
                            <!-- <li><a href="./blog.html">Blog</a></li> -->
                            <!-- <li><a href="./contact.html">Contacts</a></li> -->
                        </ul>
                    </nav>
                </div>
                 <div class="">
                    <div class="header__logo mx-auto">
                        <router-link to="/"><img src="../../assets/img/logo.jpg" alt=""></router-link>
                    </div>
                </div>
                <div class="">
                    <div class="header__nav__option">
                        <a href="#" class="search-switch"><img src="../../assets/img/icon/search.png" alt=""></a>
                        <a href="#"><img src="../../assets/img/icon/heart.png" alt=""></a>
                        <router-link to="/cart"><img src="../../assets/img/icon/cart.png" alt=""> <span>{{cartQuantity.getCartQuantityItems}}</span></router-link>
                        <div class="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
</template>

<script>
import { useCart } from '@/store'

export default {
    data(){
        return{
            active: this.$router?.currentRoute?.fullPath,
            cartQuantity: useCart()
        }
    },
    watch:{
        useCart:{
            inmediatre: true,
            handler(newVal, oldVal){
                console.log('update');
                this.cartQuantity = newVal.getCartQuantityItems
                this.$forceUpdate()
            }
        }
    }
}
</script>