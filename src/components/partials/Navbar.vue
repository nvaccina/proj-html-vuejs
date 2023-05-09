
<script>
import {mainMenu} from '../../data/menu.js';

export default {
  name:'Navbar',
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
      <div class="container-fluid">

        <div class="logo">
          <a class="h-100 w-100" href="">
            <img src="../../../public/img/avada-drivers-logo-2x-300x58.png" alt="Logo Avada Drivers">
          </a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">

          <ul class="navbar-nav">

            <li 
              class="nav-item" 
              v-for="(link, index) in mainMenu" 
              :key="index"
              :class="{'dropdown': link.isdrop}"
            >
              <a 
                class="nav-link" 
                aria-current="page" 
                :href="link.href" 
                :class="{'dropdown-toggle': link.isdrop}"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ link.text }}
                <span v-if="link.text == 'COURSES'" class="new">NEW</span>
              </a>
              <ul class="dropdown-menu" v-if="link.dropdownMenu">
                <li 
                  v-for="(i, index) in link.dropdownMenu" 
                  :key="index"
                ><a class="dropdown-item py-0" href="#">{{link.dropdownMenu[0]}}</a></li>
              </ul>
            </li>

            <li class="py-0">
              <div class="nv_button">
                <span>BOOK NOW</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

.logo{
  width: 270px;
}

li{
  padding: 0;
  margin: 0 10px;

  &:hover{
    .dropdown-menu{
      display: block;
      a{
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
    padding-bottom: 20px !important;
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
  .nv_button{
    padding: 10px 25px;
    background-color: $primary-color;
    border-radius: 25px;
    cursor: pointer;
    span{
      color: $secondary-color;
      font-weight: 700;
    }
  }

}


</style>