import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    /*   component: Login, */
  },

  {
    path: "/register",
    name: "Register",
    /*   component: Login, */
  },

  {
    path: "/checkout",
    name: "Checkout",
    /*   component: Checkout, */
  },

  {
    path: "/furniture",
    name: "Furniture",
    /*   component: Checkout, */
  },

  {
    path: "/ceramics",
    name: "Ceramics",
    /*   component: Checkout, */
  },

  {
    path: "/lightning",
    name: "Lightning",
    /*   component: Checkout, */
  },

  {
    path: "/all",
    name: "Shop all",
    /*   component: Checkout, */
  },

  {
    path: "/info",
    name: "Info",
    /*   component: Checkout, */
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
