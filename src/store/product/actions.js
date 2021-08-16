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
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleProduct = async ({ commit }, id) => {
  axios
    .get(productUrl + id)
    .then((response) => {
      commit("setProduct", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = async ({ commit }) => {
  axios
    .get(categoryUrl)
    .then((response) => {
      commit("setCategories", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBrands = async ({ commit }) => {
  axios
    .get(brandsUrl)
    .then((response) => {
      commit("setBrands", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getColors = async ({ commit }) => {
  axios
    .get(colorsUrl)
    .then((response) => {
      commit("setColors", response.data);
    })
    .catch((error) => {
      console.log(errort)
    });
};

export const filterColor = async ({commit}, color) => {
  await commit('setColor', color);
};


//Get product by id
/* export const productDetails = async ({ commit }) => {
  let id = req.params.id;
  axios
    .get(productUrl)
    .then((response) => {
      commit("setProduct", response.data[0]);
    })
    .catch(function(error) {
      console.log(error);
    });
}; */

/* export function removeCartItem({ commit, getters }, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit("setCart", cart);
}
 */
