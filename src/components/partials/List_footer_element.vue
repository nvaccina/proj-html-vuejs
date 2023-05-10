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

    <li>

      <i :class="icon"></i>
      <a :href="href">{{ text }}</a>

    </li>
  
</template>

<style lang="scss" scoped>

</style>