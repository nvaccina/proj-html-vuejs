<script>

export default {
  name: 'Card_instructors',
  props:{
    image: String,
    name: String,
    icons: Array,
    href: String,
    text: String,
  },
  data(){
    return{
      instructor_image: `/img/${this.image}.jpg`,
    }
  }


}
</script>

<template>

  <div class="card text-center">
    <div class="image">
      <img :src="instructor_image" :alt="name" :title="name">
    </div>
    <h4 class="pt-4">{{ name }}</h4>
    <div class="social">
      <ul class="d-flex align-items-center justify-content-center px-0 mb-0 py-1">
        <li 
          v-for="(icon, index) in icons" 
          :key="index"
          class="mx-3"
        >
          <a :href="href" class="fc_light_blu">
            <i :class="icon"></i>
          </a>
        </li>
      </ul>
    </div>
    <p class="ln_heigth-200 fc_light_blu">{{ text }}</p>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
.card:nth-child(2){
  margin: 0 10px;
}

.image{
  transition: all 0.4s;
  &:hover{
    transform: scale(1.05);
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>