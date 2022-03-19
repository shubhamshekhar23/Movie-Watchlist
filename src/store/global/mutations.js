import Vue from "vue";

function updateMediaSearchResult(state, data) {
  console.log(data);
  Vue.set(state, "mediaSearchResult", data ? data : []);
}

function addToWatchList(state, data) {
  state.watchList.push(data);
}

function removeFromWatchList(state, data) {
  let index = state.watchList.findIndex((c) => c.id == data.id);
  state.watchList.splice(index, 1);
}

export default {
  updateMediaSearchResult,
  addToWatchList,
  removeFromWatchList,
};
