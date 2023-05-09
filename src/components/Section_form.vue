<script>
export default {
  name:'Section_form',

}
</script>

<template>

  <section>

    <div class="nv_container">
      <h1>Section Form</h1>

      <div class="row">
        <div class="col">

        </div>
        <div class="col">

        </div>
      </div>

    </div>

  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

section{
  //debugg
  min-height: 500px;
  background-color: rgb(246, 219, 219);
  border: 1px solid black;
  .col{
    //debugg
    background-color: $primary-color;
    min-height: 300px;
    margin: 0 20px;
    border: 1px solid black;
  }
}

</style>