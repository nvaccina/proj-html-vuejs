<script>
export default {
  name:'List_footer_element',
  props:{
    icon: String,
    href: String,
    text: String
  }

}
</script>

<template>

    <li class="d-flex align-items-center ln_heigth-150 pb-3">

      <i :class="icon" class="fs-17"></i>
      <p :href="href" class="fs-16 ms-3 m-0">{{ text }}</p>

    </li>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
@import '../../scss/general/typography';

.i_color{
  color: #BBCBD3;
}
a{
  text-decoration: none;
}

</style>