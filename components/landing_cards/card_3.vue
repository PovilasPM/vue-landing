<template>
  <div data-aos="fade-up" data-aos-duration="1500" class="card-cont card-cont--custom">
    <div class="content-inner content-inner--image-wrapper">
    </div>
    <div class="content-inner content-inner--text-wrapper">
      <div>
        <h2 class="header-2 m-b">WE ARE TEST</h2>
        <h1 class="header-1" >Test example made with Vue!</h1>
      </div>
      <div>
        <p class="text-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nam quasi earum doloremque commodi exercitationem culpa, similique debitis ex, facilis distinctio nisi vel. Tenetur dignissimos itaque harum possimus saepe? Dolorum!</p>
        <button class="button-2 m-t">EXPLORE RECIPES</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-cont {
  &--custom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.content-inner {
  display: flex;
  width: 40%;
  margin: 3%;
  height: 600px;
  &--text-wrapper {
    flex-direction: column;
    justify-content: space-between;
  }
  &--image-wrapper {
    background-image: url('~assets/images/tv.jpg');
    background-position: center;
    background-size: 40vw;
    background-repeat: no-repeat;
  }
}
</style>
