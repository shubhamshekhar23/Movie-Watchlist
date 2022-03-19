import global from "./global";
import filterSearch from "./filter-search";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    modules: {
      global,
      filterSearch,
    },
  });
};
