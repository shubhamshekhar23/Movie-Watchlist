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

function updateMediaListByYear(state, data) {
  state.mediaSearchResult.sort(function (a, b) {
    return a.year > b.year ? -1 : 1;
  });
}

function updateLoading(state, data) {
  state.isLoader = data;
}

export default {
  updateMediaSearchResult,
  addToWatchList,
  removeFromWatchList,
  updateLoading,
  updateMediaListByYear,
};
