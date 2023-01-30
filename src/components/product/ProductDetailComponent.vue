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
                                <img :src="require(`@/assets/img/product/${product.img_default}`)"  alt="">
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
    <div class="product__details__content">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="product__details__text">
                        <h4>{{product.title}}</h4>
                        <!-- <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <span> - 5 Reviews</span>
                        </div> -->
                        <!-- {{product.sale.percent}} -->
                        <h3 v-if="product.sale.sale"> ${{(product.price - (product.price * product.sale.percent/100) ).toFixed(2)}} <span>{{product.price}}</span></h3>
                        <h3 v-if="!product.sale.sale"> ${{product.price}} </h3>
                        <!-- <p>{{product?.desc}}</p> -->
                        <div class="product__details__option">
                            <div class="product__details__option__size">
                                <span>Talla:</span>
                                <button  for="xs" id="size-xs" @click="setSize('xs')"  v-bind:class="[ category.find(ele => ele == 'xs' )  ? 'category-selected-box' : '']" class="select-category">xs
                                    <!-- <input type="radio" id="xs"> -->
                                </button>
                                <button for="sm" id="size-s" @click="setSize('s')" v-bind:class="[ category.find(ele => ele == 's' )  ? 'category-selected-box' : '']" class="select-category">s
                                    <!-- <input type="radio" id="sm"> -->
                                </button>
                                <button for="md" id="size-m" @click="setSize('m')" v-bind:class="[ category.find(ele => ele == 'm' )  ? 'category-selected-box' : '']" class="select-category">m
                                    <!-- <input type="radio" id="md"> -->
                                </button>
                                <button for="l" id="size-l" @click="setSize('l')" v-bind:class="[ category.find(ele => ele == 'l' )  ? 'category-selected-box' : '']" class="select-category">l
                                    <!-- <input type="radio" id="xl"> -->
                                </button>
                                <button for="xl" id="size-xl" @click="setSize('xl')" v-bind:class="[ category.find(ele => ele == 'xl' )  ? 'category-selected-box' : '']" class="select-category">xl
                                    <!-- <input type="radio" id="2xl"> -->
                                </button>
                                <button for="2xl" id="size-2xl" @click="setSize('2xl')" v-bind:class="[ category.find(ele => ele == '2xl' )  ? 'category-selected-box' : '']" class="select-category">2xl
                                    <!-- <input type="radio" id="2xl"> -->
                                </button>
                            </div>
                            <div v-if="size" class="product__details__option__color">
                                <span>Color:</span>

                                <label v-for="item in sizeCoincidencias.filter((v,i,a)=>a.findIndex(v2=>(v2.color===v.color))===i)"  :ref="item.color" :key="item.color" v-if="colors.find(ele => ele == item.color && size == item.size )"  v-bind:class="[item.color, item.color == color ? 'active': 0]"  @click="color = item.color"  for="sp-1" >
                                   
                                    <!-- <input type="radio" id="sp-1"> -->
                                </label>
                            </div>
                        </div>
                        <div class="product__details__cart__option">
                            <div class="quantity" v-if="coincidencias && color && size">
                                <div class="pro-qty">
                                    <!-- <input type="number" value="1" v-model="cuantity" @change="setMin()"> -->
                                    <select name="cantidad"  v-model="cuantity" id="cantidad-items" >
                                        <option  :value="index+1" v-for="(item, index) in coincidencias" :key="index">{{index+1}} </option>
                                    </select>
                                </div>
                            </div>
                            <button class="primary-btn" @click="addToCart(), clicked = true" v-if="!clicked">añadir al carrito</button>
                            <Transition>
                                <button  v-if="clicked" class="primary-btn mt-3"> <router-link to="/cart"> Proceder al pago </router-link></button>
                            </Transition>
                        </div>
                        <div class="product__details__btns__option">
                            <a href="#"><i class="fa fa-heart" ></i> add to wishlist</a>
                            <!-- <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a> -->
                        </div>
                        <div class="product__details__last__option">
                            <h5><span>Guaranteed Safe Checkout</span></h5>
                            <img src="@/assets/img/shop-details/details-payment.png" alt="">
                            <ul>
                                <li><span>SKU:</span> 3812912</li>
                                <li><span>Categories:</span> Clothes</li>
                                <li><span>Tag:</span> Clothes, Skin, Body</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
            sizes : ['xs', 's', 'm', 'l', 'xl', '2xl'],
            size: null,
            coincidencias: null,
            sizeCoincidencias: null
        }
    },
    mounted(){
            window.scrollTo(0,0);
            this.sizes.forEach(size =>{
                this.product.items.find(item => item.size == size) ? '' : document.getElementById(`size-${size}`).disabled= true 
            })
            
    },
    methods:{
        setSize(size){ 
            if(this.size){
                this.sizes.forEach(size =>{
                    document.getElementById(`size-${size}`).classList.remove('category-selected-box') 
                })
            }
            document.getElementById(`size-${size}`).classList.add('category-selected-box')
            this.size= size
        },
        addToCart(){
            console.log(this.cuantity);
            // pasar el producto especidfico
            // this.product.category.push
            
            for (let i = 0; i < this.cuantity; i++) {

                    
                    this.product.selectedSize = this.category
                    console.log('talla', this.product);
                    this.cartStore.addItemToCart(this.product)                
            }
        },
        setCategory(category){
            this.category= [];
            if(!this.category.find(cat => cat == category)){
                this.category.push(category)
            }else{
                this.category = this.category.filter(cat => cat != category)
                this.category == undefined ? this.category = [] : 0
            }
            
        },
        setColor(color){
            console.log(color);
            this.color= [];
            if(!this.color.find(cat => cat == color)){
                this.color.push(color)
            }else{
                this.color = this.color.filter(cat => cat != color)
                this.color == undefined ? this.color = [] : 0
            }
        },
        // setMin(){
        //     this.cuantity < 1 ? this.cuantity = 1 : 0
        // }
    },
    watch:{
        size(newval, oldval){
            this.color = null

            if(newval){
                let coincidencias = this.product.items.filter(item =>{

                    if(item.size == newval)
                    return item

                })
               this.coincidencias = coincidencias
               this.sizeCoincidencias = coincidencias
            }
        },
        color(newval, oldval){
            if(newval &&  this.size){
                let coincidencias = this.product.items.filter(item =>{

                    if(item.size == this.size && item.color == newval)
                    return item

                })
               this.coincidencias = coincidencias
            }
        },
    }

}
</script>
