<script>
export default {
  name:'Section_news',

}
</script>

<template>
  <section class="news">
    <div class="nv_container text-center p-5 bg_second_col">
      <h1 class="pb-5">Latest News</h1>

      <div class="row pb-5">

        <div class="col">
          <div class="car_image">
            <img src="/img/blog-choosecar-320x202.jpg" alt="Audi Red">
          </div>
          <div class="car_text">
            <a href="#">
              <h4 class="primary_c pt-3">What Car to Start With?</h4>
            </a>
            <p class="fc_light_blu fs-13 pb-1">February 7th, 2019|<span class="primary_c"> 0 Comments</span></p>
            <p class="fc_light_blu">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>

        <div class="col">
          <div class="car_image">
            <img src="/img/blogpost-10and2-320x202.jpg" alt="Audi interior">
          </div>
          <div class="car_text">
            <a href="#">
              <h4 class="primary_c pt-3">Avada Driving School Expanding</h4>
            </a>            
            <p class="fc_light_blu fs-13 pb-1">February 7th, 2019|<span class="primary_c"> 0 Comments</span></p>
            <p class="fc_light_blu">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
      </div>
      <div>
        <a class="nv_button" href="#">More from the blog</a>
      </div>
    </div>
    <div class="nv_container pb-80">
      <img src="../../public/img/latestnews-bottom.png" alt="">
    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';
@import '../scss/general/typography';
@import '../scss/general/utils';

.news{
  background-image: url(/img/latestnews-background.jpg);
  background-size: cover;
  h1{
    color:$quaternary-color;
  }
  .col{
    //debugg
    padding: 0;
    min-height: 300px;
    margin: 0 20px;
    .car_image{
      overflow: hidden;
      &:hover{
        img{
          transform: scale(1.1);
          filter: invert(10%);
        }
      }
      img{
        transition: all 1s;
      }
    }
  }

}


</style>