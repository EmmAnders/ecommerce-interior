<template>
  <div>
    <div @click="toggleCart" class="cart">
      <div v-show="showCart" class="overlay"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#dbdad4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-shopping-cart"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        ></path>
      </svg>
      <span class="cart-quantity">{{ itemCount }}</span>
    </div>
    <ShoppingCart :toggleCart="toggleCart" :showCart="showCart" />
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart";
import { /* mapActions */ mapGetters } from "vuex";
/* import Overlay from "../Overlay"; */

export default {
  components: { ShoppingCart /* Overlay  */ },

  data() {
    return { showCart: false };
  },

  computed: {
    ...mapGetters("product", ["itemCount"]),
  },

  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.cart {
  display: flex;
  align-items: center;

  .overlay {
    position: fixed;
    z-index: 103;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626db;
    transition: opacity 0.3s ease;
  }
  .cart-quantity {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: $white;
    margin-left: 0.5rem;
    color: $black;
  }
}
</style>
