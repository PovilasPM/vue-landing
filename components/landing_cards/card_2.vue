<template>
  <div class="card-cont card-cont--custom">
    <div data-aos="fade-up" data-aos-duration="1500" class="content-inner m-l">
      <h2 class="header-2 m-b t-center">WHAT'S TEST</h2>
      <h1 class="header-1 m-b m-t t-center">aN easy to develop Vue application</h1>
      <p class="text-1 t-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        ducimus quod dolores dignissimos nemo alias quam doloribus saepe eaque
        officiis earum commodi minus nihil, fugiat suscipit enim reprehenderit neque consectetur.
        <br />
        <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nam quasi earum doloremque commodi exercitationem culpa, similique debitis ex, facilis distinctio nisi vel. Tenetur dignissimos itaque harum possimus saepe? Dolorum!
      </p>
      <button class="button-2 m-t button-2--custom">SEE WHAT'S INSIDE</button>
    </div>
    <img class="visual-element visual-element--left" src="~assets/images/palms.jpg" alt="palms" />
    <img class="visual-element visual-element--right" src="~assets/images/record.jpg" alt="record" />
  </div>
</template>

<style lang="scss" scoped>
.card-cont {
  &--custom {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
.content-inner {
  width: 500px;
}
.button-2 {
  &--custom {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
.visual-element {
  position: absolute;
  &--left {
    width: 600px;
    left: -22rem;
    top: 5rem;
  }
  &--right {
    width: 450px;
    right: -12rem;
    bottom: 2rem;
  }
}
</style>
