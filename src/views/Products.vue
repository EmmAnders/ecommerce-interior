<template>
  <div>
    <ProductFilter />
    <div class="products-container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product._id"
        :product="product"
        :image="productImages"
        class="product"
      />
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
            item.category.name === this.$route.params.category
          ) {
            return false;
          }
        }
        return (
          item.category.name === this.$route.params.category ||
          this.$route.params.category == "all"
        );
      });
    },
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: calc(2em + 2vh) calc(1.5em + 1vmin);
  grid-auto-flow: row dense;

  @include tablet {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @include desktop {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  .product {
    height: 100%;
    width: 100%;
  }
}
</style>
