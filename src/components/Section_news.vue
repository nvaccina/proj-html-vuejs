<script>
export default {
  name:'Section_news',

}
</script>

<template>
  <section class="news" id="latestnews">

    <div class="nv_container position-relative">
      <div class="news_container text-center nv_border_top">
        
        <div class="news_top bg_second_col pb-5">
          <h1 class="pb-5 quater_c">Latest News</h1>

          <div class="row mb-50">
            <div class="col">
              <div class="car_image">
                <img src="/img/blog-choosecar-320x202.jpg" alt="Audi Red">
              </div>
              <div class="car_text">
                <a href="#">
                  <h4 class="primary_c pt-3">What Car to Start With?</h4>
                </a>
                <p class="fc_light_blu fs-13 pb-1">February 7th, 2019 |<span class="primary_c"> 0 Comments</span></p>
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
                <p class="fc_light_blu fs-13 pb-1">February 7th, 2019 |<span class="primary_c"> 0 Comments</span></p>
                <p class="fc_light_blu">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
            </div>

          </div>
          <div>
            <a class="nv_button" href="#">More from the blog</a>
          </div>
        </div>
        <div class="news_bottom">
          <img src="../../public/img/latestnews-bottom.png" alt="">
        </div>
      </div>
    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';
@import '../scss/general/typography';
@import '../scss/general/utils';

.news{
  min-height: 850px;
  background-image: url(/img/latestnews-background.jpg);
  background-size: cover;
  .news_container{
    position: absolute;
    top: -40px;
    width: 100%;

    .news_top{
      padding: 60px;
    }
    .col{
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


}


</style>