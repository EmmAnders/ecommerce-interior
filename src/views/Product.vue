/*
<template>
  <div class="product-details">
    {{ product.name }}

    <img :src="productImages + product.images" alt="" />
    <AddToCart :product="product" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../components/cart/AddToCart";

export default {
  components: {
    AddToCart,
  },
  computed: {
    ...mapGetters("product", ["productImages", "product"]),
  },

  methods: {
    ...mapActions("product", ["getSingleProduct"]),
  },

  mounted() {
    this.getSingleProduct(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.product-details {
  width: 500px;
  img {
    height: 250px;
    width: 100%;
  }
}
</style>
