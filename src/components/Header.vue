<template>
  <header>
    <Logo />
    <div class="flex">
      <p class="account">LOGIN</p>
      <CartIcon />
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import CartIcon from "../components/cart/CartIcon";

export default {
  components: {
    Logo,
    CartIcon,
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;

  .flex {
    display: flex;
    align-items: center;

    .account {
      margin-right: 1.5rem;
    }
  }
}
</style>
