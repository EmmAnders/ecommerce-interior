import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1";
const productsUrl = `${baseUrl}/products`; // Endpoint for all products
const productUrl = `${baseUrl}/products/single/`; //Endpoint for single product
const categoryUrl = `${baseUrl}/products/categories`;
const brandsUrl = `${baseUrl}/products/brands`;
const colorsUrl = `${baseUrl}/products/colors`;

// Get all products
export const getProducts = async ({ commit }) => {
  axios
    .get(productsUrl)
    .then((response) => {
      commit("SET_PRODUCTS", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleProduct = async ({ commit }, id) => {
  axios
    .get(productUrl + id)
    .then((response) => {
      commit("SET_PRODUCT", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = async ({ commit }) => {
  axios
    .get(categoryUrl)
    .then((response) => {
      commit("SET_CATEGORIES", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBrands = async ({ commit }) => {
  axios
    .get(brandsUrl)
    .then((response) => {
      commit("SET_BRANDS", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getColors = async ({ commit }) => {
  axios
    .get(colorsUrl)
    .then((response) => {
      commit("SET_COLORS", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const resetFilter = ({ commit }, payload) => {
  commit("SET_FILTER", payload);
};

export const removeFilterItem = ({ commit }, payload) => {
  commit("SET_FILTER_ITEM", payload);
};

export const addToCart = ({ commit }, payload) => {
  commit("SET_CART", payload);
};

export const removeCartItem = ({ commit }, payload) => {
  commit("SET_REMOVE_CART_ITEM", payload);
};

export const incrementQuantity = ({ commit }, payload) => {
  commit("SET_INCREMENTQTY", payload);
};

export const decrementQuantity = ({ commit }, payload) => {
  commit("SET_DECREMENTQTY", payload);
};
