<template>
    <div class="shopping__cart__table">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                            <img :src="require(`../../assets/img/product/${item.img}`)" alt="" style="width:50%">
                        </div>
                        <div class="product__cart__item__text">
                            <h6>{{item.text}}</h6>
                            <h5>${{item.price}}</h5>
                        </div>
                    </td>
                    <td class="quantity__item">
                        <div class="quantity">
                            <div class="pro-qty-2">
                                <input type="text" value="1">
                            </div>
                        </div>
                    </td>
                    <td class="cart__price">${{item.price}}</td>
                    <td class="cart__close"><i class="fa fa-close"></i></td>
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
            cart: useCart().cart
        }
    }    

}
</script>
