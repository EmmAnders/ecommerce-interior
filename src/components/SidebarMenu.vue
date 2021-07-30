<template>
  <div class="sidebar-container">
    <!--     <Overlay /> -->
    <div v-bind:class="{ activeSidebar: activeSidebar }" class="sidebar">
      <button
        class="menu-btn"
        v-show="windowWidth < 1000"
        @click="toggleSidebar"
      >
        MENU
      </button>
      <NavLinks :toggleSidebar="toggleSidebar" />
    </div>
  </div>
</template>

<script>
import NavLinks from "./NavLinks";
/* import Overlay from "./Overlay"; */

export default {
  components: { NavLinks /* Overlay  */ },
  data() {
    return { windowWidth: window.innerWidth, activeSidebar: false };
  },

  methods: {
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar;
    },
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.sidebar-container {
  background: $white;
  font-size: $paragraph-mobile-tablet;
  width: 60vw;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 1rem 0rem 1rem 1rem;
  transition: 0.5s;
  z-index: 102;

  button {
    background: none;
    border: none;
    padding: 0;
    outline: inherit;
  }

  @include desktop {
    font-size: $paragraph-desktop;
    width: 10vw;
  }

  .menu-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(-90deg);
    color: $black;
    cursor: pointer;
  }
}

.sidebar.activeSidebar {
  left: -50vw;
  transition: 0.5s;

  @include desktop {
    left: 0;
  }
}
</style>
