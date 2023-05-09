<script>
export default {
  name: 'Header',

}
</script>

<template>
  <header>

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
  min-height: 150px;
  background-color: lightgray;
}
.nv_jumbotron{
  position: relative;
  height: 600px;
  
  img{
    object-fit: cover;
  }
}


</style>