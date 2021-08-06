<template>
  <div>
    <div v-if="itemCount >= 1" class="cart-items">
      <div class="item-wrapper" v-for="item in cart" :key="item.product._id">
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

        <div class="column three">
          <p @click="handleRemoveItem(item.product._id)">remove</p>
          <p>{{ item.qty }} x {{ item.product.price }}</p>
        </div>
      </div>
    </div>
    <div v-else class="cart-empty">Empty</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartItem",
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

    handleRemoveItem(id) {
      this.removeItem(id);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.cart-items {
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

  .item-wrapper {
    padding: 2rem 0rem;
    display: flex;
    border-bottom: 1px solid $divider-dark;
    height: 75px;

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
</style>
