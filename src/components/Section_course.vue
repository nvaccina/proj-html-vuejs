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

  <section>

    <div>
      <div class="nv_container">
        <h1>Courses</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
      
    </div>

    <div>
      <div class="nv_container">
        <h1>% esami passati</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
      
    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

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
.col{
    //debugg
    background-color: $primary-color;
    min-height: 300px;
    margin: 0 20px;
    border: 1px solid black;
  }

</style>