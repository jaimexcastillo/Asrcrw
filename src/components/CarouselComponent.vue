<template>
    <section class="hero" >
        <hooper :infiniteScroll="true" :autoPlay="true" :playSpeed="7000" :wheelControl="false"  class="hero-height">
            <slide >
                <img src="../assets/img/hero/hero-1.jpg" alt="">
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-2.jpg" alt="">
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-3.jpg" alt="">
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-4.jpg" alt="">
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-5.jpg" alt="">
            </slide>

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