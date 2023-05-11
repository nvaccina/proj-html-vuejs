<script>
export default {
  name: 'Shop,'

}
</script>

<template>

  <div class="follow_button">

    <div class="folder my_follow text-center mb-2">
      <a href="#">
        <i class="fa-solid fa-folder-minus fs-25"></i>
        <p class="fs-12 fw-700 m-0">Prebuilts</p>
      </a>

    </div>

    <div class="shop my_follow text-center">
      <a href="#">
        <i class="fa-solid fa-cart-shopping fs-25"></i>
        <p class="fs-12 fw-700 m-0">Buy Now</p>
      </a>

    </div>

  </div>

  
</template>

<style lang="scss">
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
@import '../../scss/general/typography';
@import '../../scss/general/utils';

.follow_button{
  z-index: 998;
  position: fixed;
  right: 15px;
  top: 150px;
  cursor: pointer;

  .my_follow{
    padding: 10px 8px;
    border-radius: 5px;
    background-color: $secondary-color;
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    &:hover{
      a{
        color: $primary-color;
      }
    }
    a{
      color: #33475B;
    }
  }
}


</style>