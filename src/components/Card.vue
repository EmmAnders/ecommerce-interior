<template>
  <div class="card" @click="onClick">
    <img :src="product_img" />
    <div class="card-content">
      <p>{{ product_name }}</p>
      <p>{{ product_price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    onClick: Function,
    product_img: String,
    product_name: String,
    product_price: String,
  },
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

  .card-content {
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
