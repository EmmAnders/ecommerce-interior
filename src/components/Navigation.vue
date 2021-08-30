<template>
  <nav>
    <ul>
      <div @click="toggleMenu" class="close-menu">X</div>
      <div class="product-links">
        <li @click="toggleMenu" v-for="(category, i) in categories" :key="i">
          <router-link :to="'/products/' + category.name">{{
            category.name.toUpperCase()
          }}</router-link>
        </li>

        <li @click="toggleMenu">
          <router-link to="/products/all">Shop alL</router-link>
        </li>
      </div>
      <div>
        <li @click="toggleMenu">
          <router-link to="/info">Info</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    toggleMenu: {
      type: Function,
    },
  },
  computed: {
    ...mapGetters("product", ["categories"]),
  },

  methods: {
    ...mapActions("product", ["getCategories"]),
  },

  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

nav {
  background: $white;
  color: $black;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 103;
  display: hidden;
  text-transform: uppercase;
  width: 50vw;
  padding: 2%;

  @include desktop {
    width: 20vw;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    li:not(:last-child) {
      margin-bottom: 1rem;
    }

    .close-menu,
    a {
      color: $black;
      font-size: 1.3rem;
    }

    .close-menu {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
