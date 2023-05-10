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

  <div class="card mx-2 p-5 text-center">
    <div class="image">
      <img :src="instructor_image" :alt="name">
    </div>
    <h4 class="pt-4">{{ name }}</h4>
    <div class="social">
      <ul class="d-flex align-items-center justify-content-center px-0 mb-0 py-1">
        <li 
          v-for="(icon, index) in icons" 
          :key="index"
          class="mx-3"
        >
          <a :href="href">
            <i :class="icon"></i>
          </a>
        </li>
      </ul>
    </div>
    <p class="ln_heigth-200">{{ text }}</p>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
.image{
  transition: all 0.4s;
  &:hover{
    transform: scale(1.05);
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
}

p, a{
  color: $font-section;
}


</style>