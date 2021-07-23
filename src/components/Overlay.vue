<template>
  <div
    @click="toggleSidebar"
    v-bind:class="{ activeSidebar: activeSidebar }"
    class="overlay"
  ></div>
</template>

<script>
export default {
  props: {
    toggleSidebar: {
      type: Function,
    },
    activeSidebar: {
      type: String,
    },
  },
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
  z-index: 101;

  @include desktop {
    display: none;
  }
}

.overlay.activeSidebar {
  display: none;
}
</style>
