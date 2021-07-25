<template>
  <div class="product-container">
    <div class="product" v-for="(product, i) in products" :key="i">
      <router-link
        v-bind:to="
          '/products/' +
            product.category.name +
            '/' +
            product.name.replace(/\s+/g, '-').toLowerCase() +
            '/' +
            product._id
        "
      >
        <Card
          v-if="
            product.category.name === $route.params.category ||
              $route.params.category === 'all'
          "
          :product_img="productImages + product.images"
          :product_name="product.name"
          :product_price="product.price"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "./Card";

/* import CategoryList from "../components/CategoryList"; */

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState(["products", "productImages"]),
  },

  methods: {
    ...mapActions(["loadProductsByCategory"]),
  },

  created() {
    const category = this.$route.params.category;
    this.loadProductsByCategory(category);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.product-container {
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
