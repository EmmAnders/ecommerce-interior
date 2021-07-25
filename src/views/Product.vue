<template>
  <div class="product-details">{{ product.data.name }}</div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    };
  },

  created() {
    Axios.get("http://localhost:3000/api/v1/products/single/" + this.id).then(
      (response) => (this.product = response)
    );
  },
};
</script>

<style scoped lang="scss">
div {
}
</style>
