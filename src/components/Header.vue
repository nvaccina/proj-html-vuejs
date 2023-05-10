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
  <header>
    <div class="top_contact">
      <div class="nv_container d-flex justify-content-between align-items-center">
        <span>We have a 95% Successfull Pass Rate!</span>
        <span>Give us a call to book your tuition! 1-800-555-555</span>
      </div>
    </div>

    <Navbar class="mt-3"/>

  </header>

  <div class="nv_jumbotron">

    <img class="w-100 h-100" src="../../public/img/homepage-hero-background.jpg" alt="homepage-hero-background">
    
    <div class="jumbo">
      <span>Drive with Avada</span>
      <h4>We offer the finest driving tuition money can buy</h4>
      
    </div>


  </div>
  
</template>


<style lang="scss" scoped>
@use '../scss/general/variables' as *;

header{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 170px;
  background-color: rgba(0, 0, 0, 0.6);
  .top_contact{
    background-color: #333333;
    color: #7799AD;
    .nv_container{
      padding: 15px 0;
      font-size: 13px;
    }
  }
}
.nv_jumbotron{
  position: relative;
  height: 600px;
  
  img{
    object-fit: cover;
  }
  .jumbo{
    position: absolute;
    left: 10%;
    bottom: 200px;
    color: $secondary-color;
    span{
      font-size: 55px;
      font-weight: 600;
      
    }
    p{
      font-size: 40px;

    }
  }

}


</style>