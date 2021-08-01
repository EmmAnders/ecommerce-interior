<template>
  <div
    class="cart-container"
    v-bind:class="{ showCart: showCart }"
    v-show="showCart"
  >
    <div class="cart-header">
      <h2>CART ({{ itemCount }})</h2>
      <span @click="toggleCart">x</span>
    </div>

    <div v-if="itemCount >= 1" class="cart-items">
      <div class="item-wrapper" v-for="(item, i) in cart" :key="i">
        <div class="item-details">
          <div class="column one">
            <img :src="productImages + item.product.images" />
          </div>

          <div class="column two">
            <div>
              <p>{{ item.product.brand }} - {{ item.product.name }}</p>
              <p>{{ item.product.color }}</p>
            </div>

            <div class="item-counter">
              <div @click="handleRemoveQuantity(item)">&mdash;</div>
              <div class="quantity">{{ item.qty }}</div>
              <div @click="handleAddQuantity(item)">&#xff0b;</div>
            </div>
          </div>

          <div class="column three ">
            <p @click="handleRemoveItem(item)">remove</p>
            <p>{{ item.qty }} x {{ item.product.price }}</p>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="cart-sum">
          <p>TOTAL</p>
          <p>${{ totalPrice }}</p>
        </div>
        <button class="cart-checkout-btn">checkout</button>
      </div>
    </div>

    <div v-else class="cart-empty">Empty</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations /* , mapActions  */ } from "vuex";
export default {
  name: "ShoppingCart",
  props: ["showCart", "toggleCart"],

  computed: {
    ...mapGetters("product", [
      "cart",
      "totalPrice",
      "itemCount",
      "productImages",
    ]),
  },

  methods: {
    ...mapMutations("product", [
      "setCart",
      "incrementQuantity",
      "decrementQuantity",
      "removeItem",
    ]),

    handleAddQuantity(product) {
      this.incrementQuantity(product);
    },

    handleRemoveQuantity(product) {
      this.decrementQuantity(product);
    },

    handleRemoveItem(product) {
      this.removeItem(product);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.cart-container {
  background: $white;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  width: 30vw;
  height: 100%;
  display: hidden;
  text-transform: uppercase;
  padding: 35px 36px 0;

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

  .cart-items {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-wrapper {
      padding: 1rem 0rem;
      width: 100%;
      height: 100%;

      .item-details {
        padding: 1rem 0rem;
        display: flex;
        border-bottom: 1px solid $divider-dark;
        height: 100px;

        .column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }

        .column.two {
          padding-left: 0.8rem;
          width: 100%;

          p {
            padding-bottom: 0.5rem;
          }
        }

        .column.three {
          align-items: flex-end;
        }

        .item-counter {
          cursor: pointer;
          display: flex;
          align-items: center;
          text-align: center;
          width: 4rem;
          justify-content: space-between;
        }
      }
    }

    .cart-footer {
      margin-bottom: 10vh;
      .cart-sum {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        p {
          font-size: $paragraph-desktop;
        }
      }

      .cart-checkout-btn {
        width: 100%;
        outline: none;
        border: none;
        padding: 1rem;
        color: $white;
        background: $black;
        font-family: $font-secondary;
        text-transform: uppercase;
      }
    }
  }

  .cart-empty {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    top: 10vh;

    font-size: $paragraph-desktop;
  }
}
</style>
