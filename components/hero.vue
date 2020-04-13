<template>
  <div class="hero-cont">
    <h1 data-aos="fade-up" data-aos-duration="1500" class="hero-heading">Hello</h1>
  </div>
</template>

<style lang="scss" scoped>
.hero-cont {
  background-image: url('~assets/images/hero_background.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}
.hero-heading {
  position: absolute;
  left: 0;
  bottom: 0;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 35vw;
  line-height: 30rem;
}
</style>
