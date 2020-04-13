<template>
  <div class="c-slider-cont">
    <div class="j-slides">
      <div class="c-slide-cont c-slide-cont--1">
        <div class="c-slide-cont__inner m-l">
          <h2 class="header-2 m-b">Hello ladies</h2>
          <h1 class="header-3 m-b">"Lorem, ipsum dolor sit amet consectetur adipisicing elit."</h1>
          <p>
            Words by
            <span class="bold">FORBES</span>
          </p>
        </div>
      </div>
      <div class="c-slide-cont c-slide-cont--2">
        <div class="c-slide-cont__inner m-l">
          <h2 class="header-2 m-b">Hello ladies</h2>
          <h1
            class="header-3 m-b"
          >"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, autem."</h1>
          <p>
            Words by
            <span class="bold">FORBES</span>
          </p>
        </div>
      </div>
      <div class="c-slide-cont c-slide-cont--3">
        <div class="c-slide-cont__inner m-l">
          <h2 class="header-2 m-b">Hello ladies</h2>
          <h1
            class="header-3 m-b"
          >"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."</h1>
          <p>
            Words by
            <span class="bold">FORBES</span>
          </p>
        </div>
      </div>
      <div class="c-slide-cont c-slide-cont--4">
        <div class="c-slide-cont__inner m-l">
          <h2 class="header-2 m-b">Hello ladies</h2>
          <h1
            class="header-3 m-b"
          >"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing."</h1>
          <p>
            Words by
            <span class="bold">FORBES</span>
          </p>
        </div>
      </div>
    </div>
    <div class="slide-controls c-slide-controls j-slide-controls">
      <a role="button" class="slide-arrow j-arrow-prev c-slider-button c-slider-button--left"></a>
      <a role="button" class="slide-arrow j-arrow-next c-slider-button c-slider-button--right"></a>
      <div class="c-paging-container j-paging-container"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-slider-cont {
    position: relative;
  }
.c-slide-cont {
  height: 100vh;
  color: white;
  &--1 {
    background-color: #e46f4c;
  }
  &--2 {
    background-color: #1e2677;
  }
  &--3 {
    background-color: #004839;
  }
  &--4 {
    background-color: #8d1b24;
  }
  &__inner {
    width: 50%;
  }
}
.c-slide-controls {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}
.c-slider-button {
  height: 100% !important;
  width: 49.7% !important;
  margin: 0;
  &--left {
    cursor: url('~assets/images/arrow-left.svg'), auto;
  }
  &--right {
    cursor: url('~assets/images/arrow-right.svg'), auto;
  }
}
.c-paging-container {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 100px;
  padding-left: 5rem;
  padding-top: 2rem;
}
</style>

<script>
import $ from 'jquery'
import Slick from 'slick-carousel'

export default {
  mounted: () => {
    var slidesRow = $('.j-slides')
    var slideControls = $('.j-slide-controls')
    var pagingContainer = $('.c-paging-container')

    slidesRow.slick({
      autoplay: true,
      autoplaySpeed: 7000,
      appendArrows: slideControls,
      prevArrow: slideControls.find('.j-arrow-prev'),
      nextArrow: slideControls.find('.j-arrow-next'),
      appendDots: pagingContainer,
      dots: true,
      dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container
      customPaging: function() {
        return '<a class="dot" role="button"</a>'
      }
    })
  }
}
</script>
