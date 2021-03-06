import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Product from "../views/Product.vue"; 
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },

  {
    path: "/",
    component: Home,
  },

  {
    path: "/products/:category",
    component: Products,
  },

  {
    path: "/products/:category/:name/:id",
    component: Product,
  }, 

  {
    path: "/info",
    component: Info,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
