<template>
  <div class="card-cont content-container">
    <div class="content-inner content-inner--text">
      <h2 class="header-2 m-b t-center">WHAT'S TEST</h2>
      <h1 class="header-1 m-b m-t t-center">aN easy to develop Vue application</h1>
      <p class="t-center text-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        ducimus quod dolores dignissimos nemo alias quam doloribus saepe eaque
        officiis earum commodi minus nihil, fugiat suscipit enim reprehenderit neque consectetur.
      </p>
      <button class="button-2 m-t button-2--custom">SEE WHAT'S INSIDE</button>
    </div>
    <div class="content-inner content-inner--image m-regular">
      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        class="content-inner__image"
        src="~assets/images/people.jpg"
        alt="people"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0 !important;
}
.content-inner {
  &--text {
    width: 600px;
  }
  &--image {
    width: 90vw;
  }
  &__image {
    width: 100%;
  }
  .button-2 {
    &--custom {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
