<template>
  <div>
    <ProductFilter />

    <div class="products-container">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProductCard from "../components/ProductCard";

import ProductFilter from "../components/ProductFilter";

export default {
  components: {
    ProductCard,
    ProductFilter,
  },

  computed: {
    ...mapGetters("product", ["products", "productImages"]),
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
  },

  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.products-container {
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
