<template>
  <div>
    <transition name="slide-fade">
      <div
        class="shopping-cart"
        v-bind:class="{ showCart: showCart }"
        v-show="showCart"
      >
        <span @click="toggleCart">X</span>
        <ul>
          <li>ITEM</li>
          <li>ITEM</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["showCart", "toggleCart"],
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.shopping-cart {
  background: $white;
  right: 0;
  position: fixed;
  width: 200px;
  height: 100%;
  display: hidden;

  li {
    color: #262626;
    text-align: center;
  }

  span {
    display: inline-block;

    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background: #e1ff32;
    color: #262626;
    cursor: pointer;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.shopping-cart.showCart {
  display: block;
}
</style>
