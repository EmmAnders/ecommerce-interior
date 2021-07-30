import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

/* app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/pages", pageRoutes); */

const baseUrl = "http://localhost:3000/api/v1";
const categoryUrl = `${baseUrl}/products/categories`;
const productsUrl = `${baseUrl}/products`;
const productImagesUrl = `http://localhost:3000/media/products/`;

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    productImages: productImagesUrl,
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },

    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async loadCategories(context) {
      context.commit("setCategories", (await Axios.get(categoryUrl)).data);
    },

    async loadProductsByCategory(context) {
      context.commit("setProducts", (await Axios.get(productsUrl)).data);
    },
  },

  modules: {},
});
