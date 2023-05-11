
<script>
import {mainMenu} from '../../data/menu.js';
import menu_component from '../partials/menu_component.vue'

export default {
  name:'Navbar',
  components:{
    menu_component
  },
  data(){
    return{
      mainMenu,
    }
  }

}
</script>

<template>
  <div class="nv_container">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    

        <div class="logo pe-5">
          <a class="h-100 w-100" href="">
            <img src="../../../public/img/avada-drivers-logo-2x-300x58.png" alt="Logo Avada Drivers">
          </a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ms-5" id="navbarNavDropdown">

          <ul class="navbar-nav">

            <menu_component
              v-for="(link, index) in mainMenu" 
              :key="index"
              :href="link.href"
              :text="link.text"
              :isActive="link.isActive"
              :isdrop="link.isdrop"
              :dropdownMenu:="link.dropdownMenu"
              
            />
          </ul>
          <div class="ms-4">
            <a class="nv_button" href="#">BOOK NOW</a>
          </div>

        </div>

    </nav>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

.logo{
  width: 300px;
}

</style>