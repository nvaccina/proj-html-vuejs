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

      <i :class="icon" class="i_color fs-14"></i>
      <a :href="href" class="ms-3 fs-13 fc_light_blu">{{ text }}</a>

    </li>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
@import '../../scss/general/typography';

.i_color{
  color: #BBCBD3;
}

</style>