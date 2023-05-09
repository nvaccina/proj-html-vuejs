<script>
export default {
  name: 'Section_course',

}
</script>

<template>
  <section>
    <div class="nv_container">
      <h1>Start Learning</h1>
    </div>

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

.col{
    //debugg
    background-color: $primary-color;
    min-height: 300px;
    margin: 0 20px;
    border: 1px solid black;
  }

</style>