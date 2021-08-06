<template>
  <div class="container">
    <div class="product" v-for="(product, i) in products" :key="i">
      <ProductCard
        v-if="
          product.category.name === $route.params.category ||
          $route.params.category === 'all'
        "
        :product="product"
        :image="productImages"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProductCard from "../components/ProductCard";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters("product", ["products", "productImages"]),
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.container {
  margin-top: 10vh;
  display: grid;
  grid-gap: 1.5vw;
  grid-template-columns: 1fr 1fr;

  @include tablet {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @include desktop {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .product {
    height: 100%;
    width: 100%;
  }
}
</style>
