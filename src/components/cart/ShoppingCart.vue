<template>
  <div
    class="cart-container"
    v-bind:class="{ showCart: showCart }"
    v-show="showCart"
  >
    <div>
      <div class="cart-header">
        <h2>CART ({{ itemCount }})</h2>
        <span @click="toggleCart">x</span>
      </div>
      <CartItem />
    </div>

    <div class="cart-footer">
      <div class="cart-sum">
        <p>TOTAL</p>
        <p>${{ totalPrice }}</p>
      </div>
      <button class="cart-checkout-btn">checkout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem";

export default {
  name: "ShoppingCart",
  props: ["showCart", "toggleCart"],

  components: {
    CartItem,
  },

  computed: {
    ...mapGetters("product", [
      "cart",
      "totalPrice",
      "itemCount",
      "productImages",
    ]),
  },

  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.cart-container {
  background: $white;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 103;
  display: hidden;
  text-transform: uppercase;
  padding: 35px 36px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include tablet {
    width: 50vw;
  }

  @include desktop {
    width: 30vw;
  }

  p,
  h2,
  span,
  div {
    color: $black;
    font-size: 0.6rem;
  }

  img {
    width: 100%;
    height: 100%;

    @include tablet {
      width: 60%;
      height: 100%;
    }
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    margin-bottom: 1rem;

    h2 {
      font-family: $font-secondary;
      font-size: 1rem;
    }

    span {
      display: inline-block;
      height: 24px;
      width: 24px;
      border: 1px solid $black;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      cursor: pointer;
    }
  }

  .cart-footer {
    margin-bottom: 5vh;
    button {
      width: 100%;
      outline: none;
      border: none;
      padding: 1rem;
      color: $white;
      background: $black;
      font-family: $font-secondary;
      text-transform: uppercase;
    }

    .cart-sum {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0rem;

      p {
        font-size: $paragraph-desktop;
      }
    }
  }
}
</style>
