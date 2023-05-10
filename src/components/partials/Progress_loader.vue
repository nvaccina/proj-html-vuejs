<script>
export default {
  name: 'Progress_loader'
}
</script>

<template>

      <div class="row">

          <div class="col-4 px-0">
            <a href="#">
              <div class="card h-100 pt-5 text-center">
                <div class="progress blue">
                    <span class="progress-left">
                      <span class="progress-bar progress_90"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">95%</div>
                </div>
                <div class="text_out mt-5">
                  <p class="fw-600">PASS RATE</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-4 px-0">
            <a href="#">
              <div class="card  h-100 pt-5 text-center">
                <div class="progress blue">
                    <span class="progress-left">
                      <span class="progress-bar progress_100"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">100%</div>
                </div>
                <div class="text_out mt-5">
                  <p class="fw-600">REFERRAL RATE</p>
                </div>
              </div>
            </a>

          </div>

          <div class="col-4 px-0">
            <a href="#">
              <div class="card h-100 pt-5 text-center">
                <div class="progress blue">
                    <span class="progress-right">
                        <span class="progress-bar progress_0"></span>
                    </span>
                    <div class="progress-value">0%</div>
                </div>
                <div class="text_out mt-5">
                  <p class="fw-600">ACCIDENT RATE</p>
                </div>
              </div>
            </a>

          </div>

      </div>
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
@import '../../scss/general/general';
.card{
  margin: 0 5px;
  box-shadow:  5px 5px 5px rgba(0, 0, 0, 0.2);
  border-top: 6px solid $primary-color;
  border-radius: 10px;
}
.text_out{
  color: #8CA9BA;
  margin-bottom: 50px;
}

.progress{
    width: 220px;
    height: 220px;
    line-height: 220px;
    background: none;
    margin: 0 auto;
    box-shadow: none;
    position: relative;
}
.progress:after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 12px solid #F6F6F6;
    position: absolute;
    top: 0;
    left: 0;
}
.progress > span{
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
}
.progress .progress-left{
    left: 0;
}
.progress .progress-bar{
    width: 100%;
    height: 100%;
    background: none;
    border-width: 12px;
    border-style: solid;
    position: absolute;
    top: 0;
}
.progress .progress-left .progress-bar{
    left: 100%;
    border-top-right-radius: 140px;
    border-bottom-right-radius: 140px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
}
.progress .progress-right{
    right: 0;
}
.progress .progress-right .progress-bar{
    left: -100%;
    border-top-left-radius: 140px;
    border-bottom-left-radius: 140px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards;
}
.progress.blue .progress-right .progress-bar.progress_0{
  animation: loading-5 1.5s linear forwards 1.8s;
}
.progress .progress-value{
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: #ffffff;
    font-size: 50px;
    color: $font_color_ligth_blu;
    line-height: 205px;
    text-align: center;
    position: absolute;
    top: 5%;
    left: 5%;
}
.progress.blue .progress-bar{
    border-color: $primary-color;
}
//animazioni per %
.progress.blue .progress-left .progress-bar.progress_90{
  animation: loading-2 1.5s linear forwards 1.8s;
}
.progress.blue .progress-left .progress-bar.progress_100{
  animation: loading-1 1.5s linear forwards 1.8s;
}


@keyframes loading-1{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
}
@keyframes loading-2{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(164deg);
        transform: rotate(164deg);
    }
}
@keyframes loading-5{
    0%{
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
    100%{
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
}
@media only screen and (max-width: 990px){
    .progress{ margin-bottom: 20px; }
}

</style>