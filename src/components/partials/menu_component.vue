<script>
import {mainMenu} from '../../data/menu.js';
export default {
  name: 'menu_component',
  props:{
    href: String,
    text: String,
    isActive: Boolean,
    isdrop: Boolean,
    dropdownMenu: Array,
  },
  data(){
    return{
      mainMenu,
    }
  }
}
</script>

<template>
  <li 
    class="nav-item px-2" 
    :class="{'dropdown': isdrop}"
  >
    <a 
      class="nav-link px-0" 
      aria-current="page" 
      :href="href" 
      :class="{'dropdown-toggle': isdrop, active : isActive}"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ text }}
      <span v-if="text == 'COURSES'" class="new">NEW</span>
    </a>
    <ul class="dropdown-menu p-0 m-0" v-if="isdrop">
      <li 
        v-for="(element, index) in mainMenu[3].dropdownMenu" 
        :key="index"
        class="p-0 m-0"
      >
        <a class="dropdown-item py-3 px-3" href="#">{{element}}</a>
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
      border-radius: 0;
      a:not(.nv_button){
        border: 0px !important;
        color: black !important;
      }
      .dropdown-item{
        transition: all .5s;
      }
      .dropdown-item:hover{
        background-color: $primary-color;
      }
    }
    a{
      border-bottom: 2px solid $primary-color !important;
      color: $primary-color !important;
    }
  }
  a{
    color: $secondary-color;
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