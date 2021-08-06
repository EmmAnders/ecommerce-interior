<template>
  <header>
    <button @click="toggleMenu" class="menu">MENU</button>
    <div v-show="menuOpen" @click="toggleMenu" class="overlay"></div>
    <Logo />
    <Navigation :toggleMenu="toggleMenu" v-show="menuOpen" />
    <div class="account"><button>LOGIN</button> <CartIcon /></div>
  </header>
</template>

<script>
import Logo from "./Logo";
import CartIcon from "../components/cart/CartIcon";
import Navigation from "./Navigation";

export default {
  components: {
    Logo,
    CartIcon,
    Navigation,
  },

  data() {
    return { menuOpen: false };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      console.log(this.menuOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

header {
  display: flex;
  width: 100%;
  height: 5vh;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    color: white;
  }

  .account {
    display: flex;
  }

  .overlay {
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626db;
    transition: opacity 0.3s ease;
  }
}
</style>
