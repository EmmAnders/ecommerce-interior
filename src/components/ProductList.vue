<template>
  <div class="container">
    <!--     <CategoryList /> -->
    <div class="products" v-for="(product, i) in products" :key="i">
      <div
        v-if="
          product.category.name === $route.params.category ||
          $route.params.category === 'all'
        "
      >
        <div>{{ product.name }} {{ product.brand }}</div>
        <p><img :src="productImages + product.images" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

/* import CategoryList from "../components/CategoryList"; */

export default {
  components: {
    /* CategoryList  */
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

<style scoped>
img {
  width: 100%;
  height: 100%;
}

p {
  width: 200px;
  height: 200px;
}
</style>
