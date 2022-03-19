import Vue from "vue";

function updateMediaSearchResult(state, data) {
  console.log(data);
  Vue.set(state, "mediaSearchResult", data ? data : []);
}

export default {
  updateMediaSearchResult,
};
