<template>
    <div class="shopping__cart__table">
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Descripcion</th>
                    <th>talla</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td class="product__cart__item" align="center">
                        <div class="product__cart__item__pic">
                            <img :src="require(`../../assets/img/product/${item.img}`)" alt="" style="width:65%">
                        </div>
                    </td>
                    <td class="quantity__item">
                        {{item.text}}
                    </td>
                    <td class="quantity__item">
                        //todo talla
                    </td>
                    <td class="quantity__item">
                        <div class="quantity">
                            <div class="pro-qty-2">
                                <input type="text" :value="originalCart.filter(ele => ele.id == item.id ).length"  :id="`quantity-${item.id}`">
                            </div>
                        </div>
                    </td>
                    <td class="cart__price">${{item.price}}</td>
                    <td class="cart__close" @click="RemoveItem(item.id)" ><i class="fa fa-close"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="continue__btn">
                <a href="#">Continue Shopping</a>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="continue__btn update__btn">
                <a href="#"><i class="fa fa-spinner"></i> Update cart</a>
            </div>
        </div>
    </div> 
    </div> -->        
</template>

<script>
import { useCart } from '@/store'

export default {
    data(){
        return{
            originalCart: useCart().cart,
            cart: this.groupCart( useCart().cart ),
            test: 1
        }
    },
    // mounted(){
    //     groupCart()
    // },
    methods:{
        groupCart(cart){
            const unicos = []
            return cart.filter( item =>{
                const isUnique = unicos.includes(item.id)
                
                if(!isUnique ){
                    unicos.push(item.id)
                    return true
                }
                    return false
            })
                
        },
        RemoveItem(id){
            useCart().removeItemToCart(id)
            this.cart = this.groupCart(useCart().cart)
            this.$forceUpdate()
        }
    },


}
</script>
