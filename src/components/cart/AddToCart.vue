<template>
  <div class="container">
    <div class="counter">
      <span @click="decrement()">&mdash;</span>
      <input
        class="quantity"
        type="text"
        value="0"
        v-model="cart_quantity"
        readonly
      />
      <span @click="increment()">&#xff0b;</span>
    </div>

    <button @click="handleAddProduct(product, cart_quantity)">
      ADD TO CART
    </button>
  </div>
</template>

<script>
import { /* mapActions */ mapMutations, mapGetters } from "vuex";
export default {
  props: ["product"],

  data() {
    return {
      cart_quantity: 0,
    };
  },

  computed: {
    ...mapGetters("product", ["cart"]),
  },

  methods: {
    ...mapMutations("product", ["setCart"]),

    handleAddProduct(product, qty) {
      this.setCart({ product, qty });
    },

    increment() {
      this.cart_quantity++;
    },

    decrement() {
      if (this.cart_quantity >= 1) {
        this.cart_quantity--;
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.container {
  display: flex;

  .counter {
    border: 0.5px solid $white;
    margin-right: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1rem;

    .quantity {
      text-align: center;
      background: none;
      border: none;
      color: $white;
    }
  }
  button {
    background: $white;
    border: none;
    width: 100%;
  }
}
</style>
