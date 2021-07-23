<template>
  <div class="logo">
    <router-link to="/">LO<br />GO</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.logo {
  font-family: $font-secondary;
  z-index: 101;

  a {
    color: $black;
  }

  @include desktop {
    font-size: 2rem;
  }
}
</style>
