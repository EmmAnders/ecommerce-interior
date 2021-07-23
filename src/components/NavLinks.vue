<template>
  <nav>
    <ul>
      <div class="product-links">
        <li @click="toggleSidebar" v-for="(category, i) in categories" :key="i">
          <router-link :to="'/products/' + category.slug">{{
            category.name.toUpperCase()
          }}</router-link>
        </li>

        <li>
          <router-link to="/products/all">SHOP ALL</router-link>
        </li>
      </div>
      <div>
        <li>
          <router-link to="/info">INFO</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    toggleSidebar: {
      type: Function,
    },
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

nav {
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      color: $black;
    }

    .product-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      li:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>
