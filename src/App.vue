<script>
import Header from './components/Header.vue'
import Section_form from './components/Section_form.vue'
import Section_course from './components/Section_course.vue'
import Section_istructors from './components/Section_istructors.vue'
import Section_testimonials from './components/Section_testimonials.vue'
import Section_news from './components/Section_news.vue'
import Section_cta from './components/Section_cta.vue'
import Footer from './components/Footer.vue'
import Shop from './components/partials/Shop.vue'


export default {
  name: 'App',
  components:{
    Header,
    Section_form,
    Section_course,
    Section_istructors,
    Section_testimonials,
    Section_news,
    Section_cta,
    Footer,
    Shop,
  },

}
</script>

<template>

  <Header/>

  <Section_form/>

  <Section_course/>

  <Section_istructors/>

  <Section_testimonials/>

  <Section_news/>

  <Section_cta/>

  <Footer/>

  <Shop/>
  
</template>

<style lang="scss">
@use './scss/main.scss';


</style>