<template>
    <TransitionGroup class="row" tag="div"> 

        <div 
            class="mix new-arrivals" 
            v-for="(product) in products" :key="product.id" 
            :class="clases"
            v-if="product.category.find( ele => categories.includes(ele))  || categories.length == 0 "
        >   
            <div class="product__item"  v-bind:class="[ product.sale.sale ? 'sale' : 0 ]">
                <router-link :to=" '/product/'+product.text.replace(/ /g,'-')" > 
                    <div class="product__item__pic set-bg" data-setbg="" v-bind:style="{ backgroundImage: 'url(' + require('../../assets/img/product/'+product.img ) + ')' }">
                        <span v-if="product.new"  class="label">Nuevo</span>
                        <span v-if="product.sale.sale" class="label">Oferta</span>

                        <ul class="product__hover z-index-up">
                            <li><a href="#"><img src="../../assets/img/icon/heart.png" alt=""></a></li>
                            <!-- <li><a href="#"><img src="../assets/img/icon/compare.png" alt=""> <span>Compare</span></a></li> -->
                            <!-- <li><a href="#"><img src="../assets/img/icon/search.png" alt=""></a></li> -->
                        </ul>
                    </div>
                </router-link>

                    <div class="product__item__text z-index-up">
                        <h6>{{product.text}}</h6>
                        <a href="#" class="add-cart">+ Añadir al carrito</a>


                        <!-- todo: sistema de estrellas -->
                        <!-- <div class="rating">
                            <i v-for="index in product.stars"  :key="index" class="mx-1 fa" v-bind:class="[ index < product.stars ?  'fa-star' : 'fa-star-o']"></i>
                        </div> -->
                        
                        <h5>${{product.price}}</h5>
                        <div class="product__color__select">
                            <label  
                                v-for="category in product.category"  :key="category"  
                                for="pc-4" 
                                v-if="colors.find(ele => ele == category)"
                                v-bind:class="category"

                            >
                                <input type="radio" id="pc-4">
                            </label>
                            
                        </div>
                    </div>
            </div>
            
        </div>
    </TransitionGroup>
</template>

<script>
import { useProductsStore } from '../../store'

export default {
    props: ['categorySelected', 'clases', 'filteredCategories'],
    data(){
        return {
            products:useProductsStore().products,
            test: ['camisas'],
            colors: ['negro', 'verde', 'rosa', 'amarillo', 'gris', 'blanco', 'morado', 'rojo', 'azul'],
            categories: this.filteredCategories ?? []
            
        }
    },
    watch:{
        //este es para el landing
        categorySelected: {
            immediate: true, 
            handler (category, oldVal){
                this.products = useProductsStore().products

                category == 'best' ? this.products = this.products.filter( product => product.best) : 0
                category == 'new'  ? this.products = this.products.filter( product => product.new) : 0
                category == 'sale' ? this.products = this.products.filter( product => product.sale.sale) : 0

            }
        },
        //este es para elshop
        filteredCategories:{
            handler(newVal, oldval){
                this.categories = newVal;
            }
        }
    },
    created(){
    }
}
</script>