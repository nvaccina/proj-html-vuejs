<script>
import Navbar from './partials/Navbar.vue'
export default {
  name: 'Header',
  components:{
    Navbar,
  }

}
</script>

<template>
  <div class="top_contact" id="menuheader">
    <div class="nv_container d-flex justify-content-between align-items-center">
      <span>We have a 95% Successfull Pass Rate!</span>
      <span><i class="fa-solid fa-phone pe-2"></i>Give us a call to book your tuition! 1-800-555-555</span>
    </div>
  </div>
  <header>


    <Navbar class="mt-4"/>

  </header>

  <div class="nv_jumbotron">
    <div class="jumbo fade-out-up">
      <span>Drive with Avada</span>
      <p>We offer the finest driving tuition money can buy</p>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../scss/general/variables' as *;
.top_contact{
    background-color: #333333;
    color: #7799AD;
  .nv_container{
    padding: 15px 0;
    font-size: 13px;
    height: 53px;
  }
}
header{
  position: absolute;
  top: 53px;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 130px;
  background-color: rgba(54, 52, 52, 0.5);
}
.nv_jumbotron{
  position: relative;
  height: 595px;
  background-image: url(/img/homepage-hero-background.jpg);
  background-size: cover;
  background-position: center center;

  .jumbo{
    position: absolute;
    left: 12%;
    bottom: 180px;
    color: $secondary-color;
    span{
      font-size: 65px;
      font-weight: 600;
    }
    p{
      font-size: 23px;
    }
  }

}


</style>