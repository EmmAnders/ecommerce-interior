<template>
  <div class="logo">
    <router-link to="/">LOGO</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.logo {
  font-family: $font-secondary;

  a {
    color: $white;
  }

  @include desktop {
    font-size: 2rem;
  }
}
</style>
