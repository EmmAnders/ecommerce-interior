import Vue from "vue";
import Vuex from "vuex";

import product from "./product";
/* import account from "./account" */

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      /*       account, */
      product,
    },
    strict: process.env.DEV,
  });
  return Store;
}
