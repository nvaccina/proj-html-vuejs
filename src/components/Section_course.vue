<script>
import Progress_loader from './partials/Progress_loader.vue'
export default {
  name: 'Section_course',
  components:{
    Progress_loader
  }

}
</script>

<template>
  <!--Call to action telefonica-->
  <section class="cta_call">
    <div class="nv_container h-100 d-flex align-items-center justify-content-between">
      <div>
        <span class="fs-35 fw-600">Start Learning to Drive Today</span>
        <h5>Give us a call to schedule your first driving lesson</h5>
      </div>
      <div>
          <span class="fs-30"><i class="fa-solid fa-phone pe-4"></i>1-800-555-555</span>
      </div>
    </div>
  </section>

  <!--Sction courses-->
  <section class="courses">

    <div>
      <div class="nv_container">
        <div class="row mt-5">
          <div class="col-4 text-center main_card_courses">
            <div class="triangle_container">
              <div class="triangle">New</div>
            </div>
            
            <h2 class="pt-5">Courses</h2>
            <p class="px-5 py-5 ln_heigth-200 font_section_c">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
            </p>
            <div class="pb-5">
              <a class="nv_button" href="#">COURSE INFORMATION</a>
            </div>
          </div>

          <div class=" col-2 text-center course_card pt-3 mx-2">
            <div class="image_course">
              <img src="/img/courses-passplus.jpg" alt="">
            </div>
            
            <h5 class="py-3">Pass Plus</h5>
            <div>
              <a class="nv_button_grey" href="#">Learn More</a>
            </div>
          </div>

          <div class="col-2 text-center course_card pt-3">
            <div class="image_course">
              <img src="/img/course-intensive.jpg" alt="">
            </div>
            <h5 class="py-3">Intensive Course</h5>
            <div>
              <a class="nv_button_grey" href="#">Learn More</a>
            </div>
          </div>

          <div class="col-2 text-center course_card pt-3 mx-4">
            <div class="image_course">
              <img src="/img/courses-instructor.jpg" alt="">
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
    <div class="percentuali">
      <img src="/img/latestnews-bottom.png" alt="">

      <div class="nv_container position-relative">

        <div class="nv_position w-100">
          <Progress_loader/> 

        </div>

            
            
      </div>

    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';

.cta_call{
  background-image: url(/img/horizontal-cta-background.jpg);
  background-size: cover;
  min-height: 240px;
  color: $secondary-color;
  h5{
    color: $secondary-color;
  }

}
.courses{
  background-image: url(/img/promise-background.jpg);
  background-size: cover;
  background-position: center center;
  min-height: 450px;
}
.row{
  min-height: 300px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  
}
  .main_card_courses{
    position: absolute;
    left: 0;
    bottom: -45px;
    
    border-radius: 15px;
    overflow: hidden;
    background-color: $secondary-color;
    box-shadow:  20px 20px 10px 5px rgba(0, 0, 0, 0.1);
    .triangle_container{
      position: relative;
      .triangle{
      position: absolute;
      left: -50px;
      top: -5px;
      transform: rotate(315deg);
      width:120px; 
      padding-top: 20px; 
      padding-bottom: 8px; 
      color: $secondary-color;
      background: $primary-color;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      }
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
.percentuali{
  background-size: cover;
  min-height: 400px;
  img{
    filter: invert(5%) grayscale(100%);
  }
  .nv_position{
    position: absolute;
    top: -150px;

  }
}



</style>