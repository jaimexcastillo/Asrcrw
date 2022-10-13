<template>
    <div>
        <div class="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
                <input type="text" placeholder="Coupon code">
                <button type="submit">Apply</button>
            </form>
        </div>
        <div class="cart__total">
            <h6>Cart total</h6>
            <ul>
                <li>Subtotal <span>$ 169.50</span></li>
                <li>Total <span>$ {{total.getTotal}}</span></li>
            </ul>
            <a href="#" class="primary-btn">Proceed to checkout</a>
        </div>
    </div>
</template>

<script>
import { useCart } from '@/store'

export default {
    data(){
        return{
            cart: useCart().cart,
            total: useCart()
        }
    },
    mounted(){
        // this.getTotal()
    },
    methods:{
        // getTotal(){
        //     this.total = 0
        //     useCart().cart.map(ele => {
        //        this.total = this.total + ele.price 
        //     })
        //     return this.total
        // }
    },
    watch:{
        useCart:{
            inmediatre: true,
            handler(newVal, oldVal){
                console.log('update');
                this.total = newVal.getTotal
            }
        }
    }
}
</script>

<style>

</style>