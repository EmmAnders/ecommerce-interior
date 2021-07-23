<template>
  <header>
    <div class="flex">
      <Logo />
      <div class="flex">
        <p>LOGIN</p>
        <p>CART</p>
      </div>
    </div>
    <SidebarMenu />
  </header>
</template>

<script>
import { mapActions } from "vuex";
import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo";

export default {
  components: {
    SidebarMenu,
    Logo,
  },

  methods: {
    ...mapActions(["loadCategories"]),
  },

  created() {
    this.loadCategories();
  },
};
</script>

<style lang="scss" scoped>
header {
  .flex {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    z-index: 101;
  }
}
</style>
