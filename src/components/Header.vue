<template>
  <header>
    <div class="header-bar">
      <Logo />
      <div class="flex">
        <p class="sign-in">LOGIN</p>
        <CartIcon />
        <span class="cart-quantity">1</span>
      </div>
    </div>
    <SidebarMenu />
  </header>
</template>

<script>
import { mapActions } from "vuex";
import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

export default {
  components: {
    SidebarMenu,
    Logo,
    CartIcon,
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
  z-index: 200;
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    padding: 1rem;

    .flex {
      display: flex;
      align-items: center;

      .sign-in {
        margin-right: 1.5rem;
      }

      .cart-quantity {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background: #d9bdad;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
