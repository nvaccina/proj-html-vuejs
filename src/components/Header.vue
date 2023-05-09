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

    <Navbar/>

  </header>

  <div class="nv_jumbotron">
    <img class="w-100 h-100" src="../../public/img/homepage-hero-background.jpg" alt="homepage-hero-background">
  </div>
  
</template>


<style lang="scss" scoped>
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
}


</style>