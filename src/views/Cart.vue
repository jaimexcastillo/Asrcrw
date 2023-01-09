<template>
    <section class="shopping-cart spad" style="min-height: 80vh">
            <div class="container">
                <div class="row" v-if="cart?.length > 0">
                    <div class="col-lg-8 col-8">
                        <list-item-component />
                    </div>
                    <div class="col-4 col-lg-4">
                        <total-buy-component  @numeroOrden="getNumberOrder"/>
                        <div id="paypal-button-container"></div>
                    </div>
                </div>
                <div class="row" v-if="cart?.length == 0 && !orderNumber"> 
                    <div>
                        no hay nada por aqui
                        <router-link to="/shop"> regresar a comprar</router-link>
                    </div>
                </div>
                <div class="row" v-if="orderNumber">
                    gracias por tu compra tu numero de orden es {{orderNumber}}
                </div>
            </div>
    </section>
</template>

<script>
import { useCart} from '@/store'

export default {
    data(){
        return {
            cart: useCart().cart,
            orderNumber: null
        }
    },
    methods:{
        getNumberOrder(id){
            this.orderNumber = id
            this.cart = useCart().cart
            this.$forceUpdate()
        }
    }
}
</script>
