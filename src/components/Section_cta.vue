<script>
export default {
  name:'Section_cta',

}
</script>

<template>
    <section>
      <div class="nv_container text-center py-5">
        <h2 class="pb-3">Sign up to our Newsletter</h2>
        <div class="mb-5">
          <input type="email" class="form-control" placeholder="name@example.com">
        </div>
        <div>
          <a class="nv_button" href="#">subscribe</a>
        </div>
        <p class="fc_light_blu fs-14 pt-5">
          (We do not share your data with anybody, and only use it for its intended purpose)
        </p>

      </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/general';
@import '../scss/general/typography';
@import '../scss/general/utils';

section{
  //debugg
  min-height: 300px;
  background-image: url(/img/newsletter_background.jpg);
  background-size: cover;
  background-position: center center;
  h2{
    color: $quaternary-color;
  }
  input{
    width: 53%;
    height: 50px;
    margin: 0 auto;
  }
  .nv_button{
    padding: 10px 270px;
  }
}

</style>