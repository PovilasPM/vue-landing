<template>
  <div class="overlay">
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100vh;
  background-color: #ebeae6;
  z-index: 10;
  position: absolute;
}
</style>

<script>
import $ from 'jquery'

export default {
  mounted: () => {
    $(window).on('load', function() {
      $('.overlay').fadeOut()
    })
  }
}
</script>
