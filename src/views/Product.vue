/*
<template>
  <section class="product-details">
    <section class="product-img">
      <img :src="productImages + product.images" alt="" />
    </section>
    <section>
      <div class="description">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.brand }}</h2>
        <p>{{ product.description }}</p>
      </div>
      <div class="specs">
        <p>{{ product.color }}</p>
        <p>{{ product.height }}</p>
      </div>
      <AddToCart :product="product" />
    </section>
  </section>
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

  created() {
    this.getSingleProduct(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.product-details {
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  gap: 5rem;
  width: 100%;

  .product-img {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .description {
    h1,
    h2 {
      text-transform: uppercase;
      font-size: 2rem;
    }
  }

  .specs > * {
    padding-bottom: 2rem;
  }

  .description > * {
    padding-bottom: 1rem;
  }
}
</style>
