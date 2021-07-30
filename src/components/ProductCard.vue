<template>
  <div class="card">
    <router-link
      :to="
        '/products/' +
          product.category.name +
          '/' +
          product.name.replace(/\s+/g, '-').toLowerCase() +
          '/' +
          product._id
      "
    >
      <img :src="image + product.images" />
      <div class="card-body">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}$</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product", "image"],
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.card {
  img {
    max-width: 100%;
    display: block;
    margin: auto;
  }

  .card-body {
    :last-child {
      color: $grey;
    }

    p {
      text-transform: uppercase;
      font-weight: italic;
    }
  }
}
</style>
