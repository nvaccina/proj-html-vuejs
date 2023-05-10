<script>
export default {
  name: 'menu_component',
  props:{
    href: String,
    text: String,
    isActive: Boolean,
    isdrop: Boolean,
    dropdownMenu: Array,
  }
}
</script>

<template>
  <li 
    class="nav-item" 
    :class="{'dropdown': isdrop}"
  >
    <a 
      class="nav-link" 
      aria-current="page" 
      :href="href" 
      :class="{'dropdown-toggle': isdrop}"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ text }}
      <span v-if="text == 'COURSES'" class="new">NEW</span>
    </a>
    <ul class="dropdown-menu" v-if="dropdownMenu">
      <li 
        v-for="(i, index) in dropdownMenu" 
        :key="index"
      >
        <a class="dropdown-item py-0" href="#">{{dropdownMenu[0]}}</a>
      </li>
    </ul>
  </li>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

li{
  padding: 0;
  margin: 0 10px;

  &:hover{
    .dropdown-menu{
      display: block;
      a:not(.nv_button){
        border: 0px !important;
        color: black !important;
      }
    }
    a{
      border-bottom: 2px solid $primary-color !important;
      color: $primary-color !important;
    }
  }
  &:active{

    a{
      border-bottom: 2px solid $primary-color !important;
      color: $primary-color !important;
      
    }
  }
  a{
    color: $secondary-color !important;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    .new{
      background-color: $primary-color;
      color: $secondary-color;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 4px;
    }
  }


}

</style>