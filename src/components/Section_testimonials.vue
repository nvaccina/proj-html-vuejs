<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {listTestimonial} from '../data/menu'
import Testimonial_card from './partials/Testimonial_card.vue'

export default {
  name:'Section_testimonials',
  components:{
    Swiper,
    SwiperSlide,
    Testimonial_card,
  },
  data(){
    return{
      listTestimonial,
    }
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },

}
</script>

<template>
  <section>
    <div class="nv_container text-center">
      <h2 class="fs-40">Testimonials</h2>
      <p class="fc_light_blu fs-23">Here’s what our happy drivers had to say about our services:</p>
      <!--Swiper-->
      <swiper
        :slidesPerView="1"
        :pagination="{ clickable: true,}"
        :mousewheel="true"
        :modules="modules"
        :loop= "true"
        :speed="4000"
        class="pb-4"
      >
        <swiper-slide v-for="(person, index) in listTestimonial" :key="index">
          <Testimonial_card
            :image="person.image"
            :name="person.name"
            :text="person.text"
            data-swiper-autoplay="4000" 
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';
@import '../scss/general/typography';
@import '../scss/general/utils';

section{
  min-height: 900px;
  background-image: url(/img/testimonial-background.jpg);
  background-size: cover;
  background-position: center center;
  .nv_container{
    padding-top: 200px;
    h2{
      color: $quaternary-color;
    }
  }
}

</style>