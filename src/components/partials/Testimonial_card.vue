
<script>
export default {
  name: 'Testimonial_card',
  props:{
    image: String,
    name: String,
    text: String
  },
  data(){
    return{
      urlImage:`/img/${this.image}.png`

    }
  }

}
</script>

<template>

  <div class="nv_small_container fc_light_blu fs-18">
    <div class="testimonial_image w-100 d-flex justify-content-center my-5">
      <img :src="urlImage" :alt="name">
    </div>
    <div class="testimonial_text">
      <p>{{ text }}</p>
    </div>
    <div class="testimonial_name">
      <span class="fw-600">{{ name }}</span>
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
@import '../../scss/general/typography';
@import '../../scss/general/utils';

.nv_small_container{
  min-height: 300px;
  .testimonial_image{
    img{
      width: 150px;
    }
  }.testimonial_name{
    margin: 30px 0;
  }
}

</style>