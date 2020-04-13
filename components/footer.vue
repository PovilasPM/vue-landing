<template>
  <div class="footer-cont">
    <div class="footer-cont__inner">
      <div class="footer-col footer-col--wide">
        <h1 class="header-3 m-b">Stay posted</h1>
        <p
          class="text-1 m-b"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, doloremque?</p>
        <form action method="post" class="footer-form m-b">
          <input class="input input--field" tyepe="email" placeholder="YOUR EMAIL" />
          <input class="input input--submit" type="submit" value="SIGN UP" />
        </form>
        <hr />
      </div>
      <div class="footer-col footer-col--narrow">
        <h3 class="header-4 m-b">EXPLORE</h3>
        <a class="link-3 footer-link m-b" href="#">HOME</a>
        <a class="link-3 footer-link m-b" href="#">SHOP</a>
        <a class="link-3 footer-link m-b" href="#">MEMBERSHIP</a>
        <a class="link-3 footer-link m-b" href="#">OUR STORY</a>
        <a class="link-3 footer-link m-b" href="#">FAQ</a>
        <a class="link-3 footer-link m-b" href="#">REFER A FRIEND</a>
      </div>
      <div class="footer-col footer-col--narrow">
        <h3 class="header-4 m-b">FOLLOW</h3>
        <a class="link-3 footer-link m-b" href="#">FACEBOOK</a>
        <a class="link-3 footer-link m-b" href="#">TWITTER</a>
        <a class="link-3 footer-link m-b" href="#">INSTAGRAM</a>
      </div>
      <div class="footer-col footer-col--small">
        <h3 class="header-4 m-b">DROP US A LINE</h3>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
        <a class="link-3 footer-link m-b" href="#">TEST@DRINK.HAUS</a>
      </div>
    </div>
    <div class="footer-copyright">
      <p class="d-inline m-regular f-sm">&copy; TEST 2020</p>
      <a class="link-1 m-regular f-sm" href="#">Privacy Policy</a>
      <a class="link-1 m-regular f-sm" href="#">Terms and Conditions</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-cont {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 550px;
  color: #ffffff;
  background-color: #000000;
  padding: 5%;
  &__inner {
    display: flex;
  }
}
.footer-col {
  &--wide {
    flex-basis: 50%;
    padding-right: 10%;
  }
  &--narrow {
    flex-basis: 15%;
  }
  &--small {
    flex-basis: 15%;
  }
}
.footer-link {
  display: block;
}
.footer-form {
  display: flex;
  justify-content: space-between;
}
</style>
