<template>
   <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="filter__controls">
                        <li @click="categorySelected = 'best'" v-bind:class="[categorySelected === 'best' ? 'active' : 0 ]" >Best Sellers</li>
                        <li @click="categorySelected = 'new'" v-bind:class="[categorySelected === 'new' ? 'active' : 0 ]" >New Arrivals</li>
                        <li @click="categorySelected = 'sale'" v-bind:class="[categorySelected === 'sale'? 'active' : 0 ]">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div class="row product__filter justify-content-center">
                <product-card-component 
                    clases="col-lg-3 col-md-6 col-sm-6"
                    :categorySelected="categorySelected"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            categorySelected: 'best'
        }
    }
}
</script>

<style>

</style>