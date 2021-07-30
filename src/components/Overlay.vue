<template>
  <div class="overlay"></div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/Mixins.scss";
.overlay {
  background-color: #262626af;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 102;

  @include desktop {
    display: none;
  }
}

.overlay.activeSidebar,
.overlay.showCart {
  display: none;
}
</style>
