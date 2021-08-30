<template>
  <div>
    <ProductFilter />
    <div class="products-container">
      <div
        class="product"
        v-for="product in filteredProducts"
        :key="product._id"
      >
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
import { mapGetters, mapActions, mapMutations } from "vuex";

import ProductCard from "../components/ProductCard";

import ProductFilter from "../components/ProductFilter";

export default {
  components: {
    ProductCard,
    ProductFilter,
  },

  computed: {
    ...mapGetters("product", [
      "products",
      "productImages",
      "filter" /* "filteredProducts" */,
    ]),

    filteredProducts: function() {
      let filter = this.filter;
      return this.products.filter((item) => {
        for (let key in filter) {
          let options = [];
          for (let value of filter[key]) {
            options.push(value);
          }
          if (
            options.length !== 0 &&
            !options.includes(item[key]) &&
            item.category.name == this.$route.params.category
          ) {
            return false;
          }
        }
        return true;
      });
    },
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
    ...mapMutations("product", ["setFilter"]),
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
