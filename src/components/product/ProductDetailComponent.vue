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
                                <!-- <img :src="require(`@/assets/img/product/${product.img_default}`)"  alt=""> -->
                                <vue-inner-zoom-component :src="require(`@/assets/img/product/${product.img_default}`)"  alt=""> </vue-inner-zoom-component>
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

   
    <div class="row">
        <div class="col-lg-12">
            <div class="product__details__tab">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tabs-5"
                        role="tab">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                        Previews(5)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                        information</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tabs-5" role="tabpanel">
                        <div class="product__details__tab__content">
                            <p class="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                            pharetras loremos.</p>
                            <div class="product__details__tab__content__item">
                                <h5>Products Infomation</h5>
                                <p>A Pocket PC is a handheld computer, which features many of the same
                                    capabilities as a modern PC. These handy little devices allow
                                    individuals to retrieve and store e-mail messages, create a contact
                                    file, coordinate appointments, surf the internet, exchange text messages
                                    and more. Every product that is labeled as a Pocket PC must be
                                    accompanied with specific software to operate the unit and must feature
                                a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC
                                    was substantial during is early release. For approximately $700.00,
                                    consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                    These days, customers are finding that prices have become much more
                                    reasonable now that the newness is wearing off. For approximately
                                $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div class="product__details__tab__content__item">
                                <h5>Material used</h5>
                                <p>Polyester is deemed lower quality due to its none natural qualits. Made
                                    from synthetic materials, not natural like wool. Polyester suits become
                                    creased easily and are known for not being breathable. Polyester suits
                                    tend to have a shine to them compared to wool and cotton suits, this can
                                    make the suit look cheap. The texture of velvet is luxurious and
                                    breathable. Velvet is a great choice for dinner party jacket and can be
                                worn all year round.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-6" role="tabpanel">
                        <div class="product__details__tab__content">
                            <div class="product__details__tab__content__item">
                                <h5>Products Infomation</h5>
                                <p>A Pocket PC is a handheld computer, which features many of the same
                                    capabilities as a modern PC. These handy little devices allow
                                    individuals to retrieve and store e-mail messages, create a contact
                                    file, coordinate appointments, surf the internet, exchange text messages
                                    and more. Every product that is labeled as a Pocket PC must be
                                    accompanied with specific software to operate the unit and must feature
                                a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC
                                    was substantial during it early release. For approximately $700.00,
                                    consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                    These days, customers are finding that prices have become much more
                                    reasonable now that the newness is wearing off. For approximately
                                $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div class="product__details__tab__content__item">
                                <h5>Material used</h5>
                                <p>Polyester is deemed lower quality due to its none natural qualit. Made
                                    from synthetic materials, not natural like wool. Polyester suits become
                                    creased easily and are known for not being breathable. Polyester suits
                                    tend to have a shine to them compared to wool and cotton suits, this can
                                    make the suit look cheap. The texture of velvet is luxurious and
                                    breathable. Velvet is a great choice for dinner party jacket and can be
                                worn all year round.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-7" role="tabpanel">
                        <div class="product__details__tab__content">
                            <p class="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                            pharetras loremos.</p>
                            <div class="product__details__tab__content__item">
                                <h5>Products Infomation</h5>
                                <p>A Pocket PC is a handheld computer, which features many of the same
                                    capabilities as a modern PC. These handy little devices allow
                                    individuals to retrieve and store e-mail messages, create a contact
                                    file, coordinate appointments, surf the internet, exchange text messages
                                    and more. Every product that is labeled as a Pocket PC must be
                                    accompanied with specific software to operate the unit and must feature
                                a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC
                                    was substantial during i early release. For approximately $700.00,
                                    consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                    These days, customers are finding that prices have become much more
                                    reasonable now that the newness is wearing off. For approximately
                                $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div class="product__details__tab__content__item">
                                <h5>Material used</h5>
                                <p>Polyester is deemed lower quality due to its none natural qualits. Made
                                    from synthetic materials, not natural like wool. Polyester suits become
                                    creased easily and are known for not being breathable. Polyester suits
                                    tend to have a shine to them compared to wool and cotton suits, this can
                                    make the suit look cheap. The texture of velvet is luxurious and
                                    breathable. Velvet is a great choice for dinner party jacket and can be
                                worn all year round.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
