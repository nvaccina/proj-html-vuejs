<script>
export default {
  name: 'Section_course',

}
</script>

<template>
  <!--Call to action telefonica-->
  <section class="cta_call">
    <div class="nv_container h-100 d-flex align-items-center justify-content-between">
      <div>
        <span>Start Learning to Drive Today</span>
        <h5>Give us a call to schedule your first driving lesson</h5>
      </div>
      <div>
          <span>1-800-555-555</span>
      </div>
    </div>
  </section>

  <!--Sction courses-->
  <section class="courses">

    <div>
      <div class="nv_container">
        <div class="row my-5">
          <div class="col-4 text-center main_card_courses">
            <div class="triangle">New</div>
            <h2 class="pt-5">Courses</h2>
            <p class="px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
            </p>
            <div>
              <a class="nv_button" href="#">COURSE INFORMATION</a>
            </div>
          </div>

          <div class=" col-2 text-center course_card pt-3 mx-2">
            <div class="image_course">
              <img src="../../public/img/courses-passplus.jpg" alt="">
            </div>
            
            <h5 class="py-3">Pass Plus</h5>
            <div>
              <a class="nv_button_grey" href="#">Learn More</a>
            </div>
          </div>

          <div class="col-2 text-center course_card pt-3">
            <div class="image_course">
              <img src="../../public/img/course-intensive.jpg" alt="">
            </div>
            <h5 class="py-3">Intensive Course</h5>
            <div>
              <a class="nv_button_grey" href="#">Learn More</a>
            </div>
          </div>

          <div class="col-2 text-center course_card pt-3 mx-4">
            <div class="image_course">
              <img src="../../public/img/courses-instructor.jpg" alt="">
            </div>
            <h5 class="py-3">Instructors</h5>
            <div>
              <a class="nv_button_grey" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>


  </section>
  <section class="pb-5">
    <div>
      <div class="nv_container">
        <h1>% esami passati</h1>
        <div class="row">
          <div class="col-4 debug">
            
            <div class="circle_container">
              <div class="circle_big">
                <div class="circle_small">

                </div>
              </div>

            </div>
            <div class="text_circle">
              <p>PASS RATE</p>
            </div>
          </div>
          <div class="col-4"></div>
          <div class="col-4"></div>
        </div>
      </div>
      
    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

@import '../scss/general/general';

.cta_call{
  background-image: url(../../public/img/horizontal-cta-background.jpg);
  background-size: cover;
  height: 240px;
  span{
    font-size: 35px;
    font-weight: 600;
    color: $secondary-color;
  }
  h5{
    color: $secondary-color;
  }

}
.courses{
  background-image: url(../../public/img/promise-background.jpg);
  background-size: cover;
  min-height: 400px;
}
  .main_card_courses{
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow:  10px 15px 25px 10px rgba(0, 0, 0, 0.1);
    .triangle{
      position: absolute;
      left: -35px;
      top: -10px;
      transform: rotate(315deg);
      width:100px; 
      padding-top: 20px; 
      padding-bottom: 8px; 
      color: $secondary-color;
      background: $primary-color;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;

    }
  }
  .course_card{
    .image_course{
      overflow: hidden;
      cursor: pointer;
      img{
        transition: all 0.8s;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    h5{
      color:$font-section;
    }
  }

  .debug{
    border: 1px solid black;
  }
  .circle_container{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    margin: 20px auto;
    .circle_big{
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 8px solid green;
    }
    /*
    @keyframes bording {
      0% { border-left: 10px solid #2ecc71; }
      25% { border-left: 10px solid white; border-top: 10px solid #2ecc71; }
      50% { border-top: 10px solid white; border-right: 10px solid #2ecc71; }
      75% { border-right: 10px solid white; border-bottom: 10px solid #2ecc71; }
      100% { border-bottom: 10px solid white; border-left: 10px solid #2ecc71; }
      }
      
      #animazione4 li{
      width: 150px;
      height: 150px;
      line-height: 150px;
      border: 10px solid white !important;
      border-radius: 100px;
      transition: all 0.5s ease-out;
      }
      //ANIMAZIONE 4 HOVER 
      #animazione4 li:hover{
      animation: bording 3s infinite 0s;
      animation-timing-function: linear;
      }*/
  }


</style>