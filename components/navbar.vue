<template>
  <div class="nav-container">
    <div>
      <ul class="nav-container__internal">
        <li class="nav-container__list-item">
          <a class="link-1" href="#">SHOP</a>
        </li>
        <li class="nav-container__list-item">
          <a class="link-1" href="#">ABOUT</a>
        </li>
        <li class="nav-container__list-item">
          <a class="link-1" href="#">OUR STORY</a>
        </li>
        <li class="nav-container__list-item">
          <a class="link-1" href="#">BLOG</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="nav-container__internal">
        <li class="nav-container__list-item">
          <a class="link-1" href="#">NEWSLETTER</a>
        </li>
        <li class="nav-container__list-item">
          <a class="link-1" href="#">ACCOUNT</a>
        </li>
        <li class="nav-container__list-item">
          <a class="link-1" href="#">BAG (0)</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  justify-content: space-between;
  &__internal {
    display: flex;
    padding: 2rem;
  }
  &__list-item {
    padding: 1rem;
  }
}
</style>
