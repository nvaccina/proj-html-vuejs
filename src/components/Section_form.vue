<script>
export default {
  name:'Section_form',

}
</script>

<template>

  <section>

    <div class="nv_container special_margin">

      <div class="row mt-5 position-relative">

        <!--Colonna con testo-->
        <div class="col col-6 my-5 px-0 mx-0 ms-2">
          <h1 class="quater_c mb-5">Get Behind The Wheel</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</span>
          <p class=" mt-4 lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.
          </p>
        </div>

        <!--Colonna con Form-->
        <div class="col col-6 text-center py-3">
          <div class="nv_form">
            <h3>First Lesson Free!</h3>
            <p class="py-3 px-3">When you make a block booking with us your first lesson is included free.</p>

            <div class="row px-4">
              <div class="col-12 pb-2">
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
                <a href="#" type="submit" class="nv_button ">request a callback</a>
              </div>

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
  .special_margin{
    margin-bottom: 90px;
  }
  .col{
    h3{
      color: $primary-color;
    }
    span{
      color: $font_color_ligth_blu;
      font-size: 22px;
    }
    p{
      color: $font_color_ligth_blu;
    }
    
  }
  .col:nth-child(2){
      position: absolute;
      right: 0;
      bottom: -20px;
      padding: 0 20px;
      .nv_form{
        background-color: $secondary-color;
        border-radius: 15px;
        box-shadow:  5px 15px 18px rgba(0, 0, 0, 0.1);
        padding: 40px 20px;
        .form-control{
          background-color: $tertiary-color;
          color: $font_color_ligth_blu;
          &[placeholder]{
            font-size: 12px;
            padding: 15px;
          }
        }
      }
    }

}

</style>