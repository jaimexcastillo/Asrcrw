<template>
<div>
  <div class="shadow-container"></div>
  <div class="dialog-container">
    <div class="dialog">
      <div class="card">
          <div class="title-modal">{{shoppingCart.itemShoppingModal.title}}</div>
          <div class="card-text">
                <h3 v-if="shoppingCart.itemShoppingModal.sale.sale"> ${{(shoppingCart.itemShoppingModal.price - (shoppingCart.itemShoppingModal.price * shoppingCart.itemShoppingModal.sale.percent/100) ).toFixed(2)}} <span>{{product.price}}</span></h3>
                <h3 v-if="!shoppingCart.itemShoppingModal.sale.sale"> ${{shoppingCart.itemShoppingModal.price}} </h3>
                        <!-- <p>{{product?.desc}}</p> -->
                        <div class="product__details__option">
                            <div class="product__details__option__size">
                                <span>Talla:</span>
                                <button  for="xs" id="size-xs" @click="setSize('xs')"   class="select-category">xs
                                    <!-- <input type="radio" id="xs"> -->
                                </button>
                                <button for="sm" id="size-s" @click="setSize('s')"  class="select-category">s
                                    <!-- <input type="radio" id="sm"> -->
                                </button>
                                <button for="md" id="size-m" @click="setSize('m')"  class="select-category">m
                                    <!-- <input type="radio" id="md"> -->
                                </button>
                                <button for="l" id="size-l" @click="setSize('l')"  class="select-category">l
                                    <!-- <input type="radio" id="xl"> -->
                                </button>
                                <button for="xl" id="size-xl" @click="setSize('xl')" class="select-category">xl
                                    <!-- <input type="radio" id="2xl"> -->
                                </button>
                                <button for="2xl" id="size-2xl" @click="setSize('2xl')" class="select-category">2xl
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
                            <button class="primary-btn" @click="addToCart(), clicked = true" v-if="!clicked && coincidencias && color && size">añadir al carrito</button>
                            <Transition>
                                <button  v-if="clicked" class="primary-btn mt-3"> <router-link to="/cart"> Proceder al pago </router-link></button>
                            </Transition>
                        </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useLoader } from '@/store'
export default {
  props:[],
  data(){
    return{
      shoppingCart: useLoader(),
      sizes : ['xs', 's', 'm', 'l', 'xl', '2xl'],
      category: [],
      colors: ['negro', 'verde', 'rosa', 'amarillo', 'gris', 'blanco', 'morado', 'rojo', 'azul'],
      color: null,
      size: null,
      cuantity: 1,
      coincidencias: null,
      sizeCoincidencias: null,
      clicked: null
    }
  },
  mounted(){
      this.sizes.forEach(size =>{
          this.shoppingCart.itemShoppingModal.items.find(item => item.size == size) ? '' : document.getElementById(`size-${size}`).disabled= true 
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
  },
  watch:{
        size(newval, oldval){
            this.color = null

            if(newval){
                let coincidencias = this.shoppingCart.itemShoppingModal.items.filter(item =>{

                    if(item.size == newval)
                    return item

                })
               this.coincidencias = coincidencias
               this.sizeCoincidencias = coincidencias
            }
        },
        color(newval, oldval){
            if(newval &&  this.size){
                let coincidencias = this.shoppingCart.itemShoppingModal.items.filter(item =>{

                    if(item.size == this.size && item.color == newval)
                    return item

                })
               this.coincidencias = coincidencias
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
  }

  
}
</script>