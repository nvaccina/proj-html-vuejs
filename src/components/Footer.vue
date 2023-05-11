<script>
import List_footer_element from './partials/List_footer_element.vue'
import {contactDetails} from '../data/menu'
import {listCourses} from '../data/menu'
import {iconSocial} from '../data/menu'

export default {
  name:'Footer',
  components:{
    List_footer_element,
  },
  data(){
    return{
      contactDetails,
      listCourses,
      iconSocial
    }
  }

}
</script>

<template>

  <footer>
    <div class="footer_top">

      <div class="nv_container">
        <div class="row py-5">

          <div class="col-3 pe-4">
            <img src="/img/avada-drivers-logo-1x.png" alt="Logo">
            <p class="fc_light_blu fs-12 mt-2 ln_heigth-200">
              Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.
            </p>
          </div>

          <div class="col-3 ps-5">
            <p class="title_list"> <strong>contact details</strong> </p>
            <ul class="px-0 fc_light_blu">
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
            <p class="title_list"> <strong>courses</strong> </p>
            <ul class="px-0 primary_c">
              <List_footer_element
                v-for="(element, index) in listCourses"
                :key="index"
                :icon="element.icon"
                :href="element.href"
                :text="element.text"
                class="primary_c"
              />
            </ul>
          </div>

          <div class="col-3 text-center">
            <img class="mb-3" src="/img/footer-ad-grid.png" alt="Footer grid">
            <div class="mt-3">
              <a class="nv_button" href="#">book now</a>
            </div>
          </div>
        </div>
        
      </div>

    </div>


    <div class="footer_bottom">
      <div class="nv_container d-flex align-items-center justify-content-between">

        <div class="credits">
          <p class="fs-12 fc_light_blu mb-0">© Copyright 2012 - 2023 | Avada Theme by <span class="primary_c">ThemeFusion</span> | All Rights Reserved | Powered by <span class="primary_c">WordPress</span></p>
        </div>

        <div class="social">
          <ul class="d-flex align-items-center mb-0">
            <List_footer_element
              v-for="(element, index) in iconSocial"
              :key="index"
              :icon="element.icon"
              :href="element.href"
              :text="element.text"
              class="secondary_c"
            />
 
          </ul>
        </div>
      
      </div>

    </div>

  </footer>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';
@import '../scss/general/typography';

footer{
  background-color: #333333;
  .footer_top{
    min-height: 400px;
    background-image: url(/img/footer-background-color.jpg);
    backdrop-filter: grayscale(100%);
    background-size: cover;
    background-position: center center;
    .title_list{
      text-transform: uppercase;
      color: $secondary-color;
    }
  }
  .footer_bottom{
    padding: 47px 0;
  }
}

</style>