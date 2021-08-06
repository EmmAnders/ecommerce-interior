import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import product from "./product";
/* import account from "./account" */

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      /*       account, */
      product,
    },
    plugins: [createPersistedState()],
    strict: process.env.DEV,
  });
  return Store;
}
