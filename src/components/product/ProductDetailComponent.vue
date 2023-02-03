<template>
<section class="shop-details">
    <div class="product__details__pic">
        <div class="container">

            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-1.png">
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-2.png">
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-3.png">
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-4.png">
                                    <i class="fa fa-play"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-9">
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                            <div class="product__details__pic__item" >
                                <!-- <img :src="'data:image/jpeg;base64,'+product.img_default"  alt=""> -->
                                <vue-inner-zoom-component :src="'data:image/jpeg;base64,'+product.img_default"  alt=""> </vue-inner-zoom-component>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="tabs-4" role="tabpanel">
                            <div class="product__details__pic__item">
                                <img src="img/shop-details/product-big-4.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <cart-setter-component></cart-setter-component>

    <window-info-component :product='product' ></window-info-component>

</section>
</template>

<script>
import { useProductsStore , useCart } from '@/store'

export default {
    props:['products'],
    data(){
        return{
            clicked: false,
            product: useProductsStore().products.filter(produc => produc.title === this.$route.params.title.replace(/-/g,' ') )[0],
            category: [],
            cuantity: 1,
            colors: ['negro', 'verde', 'rosa', 'amarillo', 'gris', 'blanco', 'morado', 'rojo', 'azul'],
            color: null,
            imgActice: null,
            cartStore: useCart(),
            sizes : ['s', 'm', 'l', 'xl', '2xl'],
            size: null,
            coincidencias: null,
            sizeCoincidencias: null
        }
    },
    mounted(){
            // window.scrollTo(0,0);
            // this.sizes.forEach(size =>{
            //     this.product.items.find(item => item.size == size) ? '' : document.getElementById(`size-${size}`).disabled= true 
            // })
            
    },
    // methods:{
    //     setSize(size){ 
    //         if(this.size){
    //             this.sizes.forEach(size =>{
    //                 document.getElementById(`size-${size}`).classList.remove('category-selected-box') 
    //             })
    //         }
    //         document.getElementById(`size-${size}`).classList.add('category-selected-box')
    //         this.size= size
    //     },
    //     addToCart(){
    //         console.log(this.cuantity);
    //         // pasar el producto especidfico
    //         let itemToCart = {... this.product}
    //         itemToCart.items =[]
    //         itemToCart.selectedSize= this.size;

    //         for (let i = 0; i < this.cuantity; i++) {
    //             itemToCart.items.push({size: this.size, color: this.color})
    //         }
    //         // console.log(itemToCart);
    //         this.cartStore.addItemToCart(itemToCart)                
    //     },
    //     setCategory(category){
    //         this.category= [];
    //         if(!this.category.find(cat => cat == category)){
    //             this.category.push(category)
    //         }else{
    //             this.category = this.category.filter(cat => cat != category)
    //             this.category == undefined ? this.category = [] : 0
    //         }
            
    //     },
    //     setColor(color){
    //         console.log(color);
    //         this.color= [];
    //         if(!this.color.find(cat => cat == color)){
    //             this.color.push(color)
    //         }else{
    //             this.color = this.color.filter(cat => cat != color)
    //             this.color == undefined ? this.color = [] : 0
    //         }
    //     },
    //     // setMin(){
    //     //     this.cuantity < 1 ? this.cuantity = 1 : 0
    //     // }
    // },
    // watch:{
    //     size(newval, oldval){
    //         this.color = null

    //         if(newval){
    //             let coincidencias = this.product.items.filter(item =>{

    //                 if(item.size == newval)
    //                 return item

    //             })
    //            this.coincidencias = coincidencias
    //            this.sizeCoincidencias = coincidencias
    //         }
    //     },
    //     color(newval, oldval){
    //         if(newval &&  this.size){
    //             let coincidencias = this.product.items.filter(item =>{

    //                 if(item.size == this.size && item.color == newval)
    //                 return item

    //             })
    //            this.coincidencias = coincidencias
    //         }
    //     },
    // }

}
</script>
