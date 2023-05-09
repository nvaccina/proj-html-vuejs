

<script>
export default {
  name:'Navbar'

}
</script>

<template>
  <div class="nv_container">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <div class="logo">
          <a class="h-100 w-100" href="#">
            <img src="../../../public/img/avada-drivers-logo-2x-300x58.png" alt="Logo Avada Drivers">
          </a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">prices</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
                <span class="new">NEW</span>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Intensive</a></li>
                <li><a class="dropdown-item" href="#">Pass Plus</a></li>
                <li><a class="dropdown-item" href="#">Istructor</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">locations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">blog</a>
            </li>
            <li class="py-0">
              <div class="nv_button">
                <span>BOOK NOW</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

.logo{
  width: 270px;
}

li{
  padding: 0;
  margin: 0 20px;

  &:hover{
    a{
      border-bottom: 2px solid $primary-color !important;
      color: $primary-color !important;
    }
  }
  &:active{

    a{
      border-bottom: 2px solid $primary-color !important;
      color: $primary-color !important;
    }
  }
  a{
    color: $secondary-color !important;
    text-transform: uppercase;
    padding-bottom: 20px !important;
    border-bottom: 2px solid transparent;
    .new{
      background-color: $primary-color;
      color: $secondary-color;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 4px;
    }
  }
  .nv_button{
    padding: 10px 30px;
    background-color: $primary-color;
    border-radius: 25px;
    cursor: pointer;
    span{
      color: $secondary-color;
      font-weight: 700;
    }
  }

}


</style>