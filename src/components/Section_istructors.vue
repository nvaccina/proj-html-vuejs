<script>
export default {
  name:'Section_istructors',

}
</script>

<template>
  <section>
    <div class="nv_container">
        <h1>Your Istructors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem suscipit eveniet veritatis et temporibus quisquam cumque quibusdam possimus eos vitae expedita officia, ex obcaecati fugit inventore quis tempore dolor excepturi.
        </p>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
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