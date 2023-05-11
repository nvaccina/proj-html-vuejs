<script>
import Card_instructors from './partials/Card_instructors.vue'
import {instructors} from '../data/menu'

export default {
  name:'Section_istructors',
  components:{
    Card_instructors,
  },
  data(){
    return{
      instructors,
    }
  }

}
</script>

<template>
  <section>
    <div class="nv_container pt-80 position position-relative">
        <h1 class="fs-40 pb-4 quater_c">Your Instructors</h1>

        <div class="row mb-5">
          <div class="col-8">
            <p class="ln_heigth-200 fs-22 pe-4 fc_light_blu">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
            </p>
          </div>
          <div class="col-4 d-flex align-items-center">
            <div class="w-100">
              <a class="nv_button" href="#">More about us</a>
            </div>
          </div>
        </div>

        <div class="card_container d-flex">

            <Card_instructors
              v-for="(instructor, index) in instructors"
              :key="index"
              :image="instructor.image"
              :name="instructor.name"
              :icons="instructor.icons"
              :href="instructor.href"
              :text="instructor.text"
            />
          
        </div>
      </div>
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
.nv_container{
  min-height: 680px;
  .col-4 .nv_button{
    padding: 12px 120px;
  }
  .card_container{
    position: absolute;
    left: 0;
  }

}

</style>