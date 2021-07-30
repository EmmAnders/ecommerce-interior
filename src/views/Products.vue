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
  margin-top: 15vh;
  padding: 2vw;

  @include tablet {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1.5vw;
  }
  @include desktop {
  }

  .product {
    height: 100%;
    width: 100%;
  }
}
</style>
