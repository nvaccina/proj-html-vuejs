<script>
export default {
  name:'Section_form',

}
</script>

<template>

  <section>

    <div class="nv_container">

      <div class="row my-5">

        <!--Colonna con testo-->
        <div class="col col-6 my-5">
          <h1>Get Behind The Wheel</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</span>
          <p class=" mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.
          </p>
        </div>

        <!--Colonna con Form-->
        <div class="col col-5 text-center py-3 form">

          <h3>First Lesson Free!</h3>
          <p class="py-3">When you make a block booking with us your first lesson is included free.</p>

          <div class="row px-4">
            <div class="col-12 py-2">
              <input type="text" class="form-control" placeholder="You Name*" aria-label="name" required>
            </div>
            <div class="col-12 py-3">
              <input type="text" class="form-control" placeholder="Email*" aria-label="email" required>
            </div>
            <div class="col-12 py-2">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Email">
            </div>
            <div class="col-12 py-3">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Location">
            </div>
            <div class="col-12 py-3 text-center">
              <button type="submit" class="nv_button ">request a callback</button>
            </div>

          </div>

        </div>
      </div>

    </div>

  </section>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

section{
  background-color: $secondary-color;
  .row{
    position: relative;
  }
  .col{
    margin: 0 20px;
    h3{
      color: $primary-color;
    }
    span{
      color: $font-section;
      font-size: 22px;
    }
    p{
      color: $font-section;
    }
    .form-control{
      background-color: $tertiary-color;
      &[placeholder]{
        color: $font-section;
        font-size: 12px;
        padding: 15px;
      }
    }
    
  }
  .form{
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: $secondary-color;
    border-radius: 15px;
    box-shadow:  5px 10px 18px rgba(0, 0, 0, 0.1);
  }
}

</style>