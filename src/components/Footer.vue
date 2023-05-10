<script>
import List_footer_element from './partials/List_footer_element.vue'
import {contactDetails} from '../data/menu'
import {listCourses} from '../data/menu'

export default {
  name:'Footer',
  components:{
    List_footer_element,
  },
  data(){
    return{
      contactDetails,
      listCourses
    }
  }

}
</script>

<template>

<i class="fa-solid fa-house"></i>

  <footer>
    <div class="footer_top">

      <div class="nv_container">
        <div class="row">

          <div class="col-3">
            <img src="../../public/img/avada-drivers-logo-1x.png" alt="Logo">
            <p>
              Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.
            </p>
          </div>

          <div class="col-3">
            <h6>contact details</h6>
            <ul>
              <List_footer_element
                v-for="(element, index) in contactDetails"
                :key="index"
                :icon="element.icon"
                :href="element.href"
                :text="element.text"
              />

            </ul>
          </div>
          <div class="col-3">
            <h6>courses</h6>
            <ul>
              <List_footer_element
                v-for="(element, index) in listCourses"
                :key="index"
                :icon="element.icon"
                :href="element.href"
                :text="element.text"
              />
            </ul>
          </div>

          <div class="col-3 text-center">
            <img src="../../public/img/footer-ad-grid.png" alt="">
            <div class="mt-3">
              <a class="nv_button" href="#">Learn More</a>
            </div>
          </div>
        </div>
        
      </div>

    </div>



    <div class="nv_container">
      <h2>Footer Boottom</h2>
      
    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
.footer_top{
  min-height: 350px;
  background-image: url(../../public/img/testimonial-background.jpg);
  background-size: cover;
}

</style>