<template>
    <section class="hero" >
        <hooper :infiniteScroll="true" :autoPlay="!true" :playSpeed="7000" :wheelControl="false"  class="hero-height">
            <slide v-for="(item , index) in carousel" :key="index">
                <img :src="require(`@/assets/img/hero/${item.img_url}`)" :alt="item.product_url">
                <div class="container-carousel">
                    <button class="button-carousel">
                        <router-link :to="item.product_url" class="white">
                            Lo quiero!
                        </router-link>
                    </button>
                </div>
            </slide>
            <!-- <slide>
                <img src="../assets/img/hero/hero-2.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-3.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-4.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-5.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide> -->

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </section>
</template>

<script>
import { Hooper, Slide,  Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    data(){
        return{
            carousel:[
                {
                    img_url:'hero-1.jpg',
                    product_url: '/product/camisa-de-austero-crew'
                },
                {
                    img_url:'hero-2.jpg',
                    product_url: '/product/camisa-de-austero-crew-society'
                },
                {
                    img_url:'hero-3.jpg',
                    product_url: '/product/camisa-de-austero-crew-tradi-rosa-y-gallo'
                },
                {
                    img_url:'hero-4.jpg',
                    product_url: '/product/camisa-de-austero-crew-kanji'
                },
                {
                    img_url:'hero-5.jpg',
                    product_url: '/product/camisa-de-austero-crew-kanji-mujer-espalda'
                }
            ]
        }
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    }
}
</script>

<style>

</style>