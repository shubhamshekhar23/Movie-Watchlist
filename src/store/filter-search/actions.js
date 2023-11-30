import axios from "axios";

const api = axios.create({
  baseURL: "https://imdb188.p.rapidapi.com/api/v1",
  headers: {
    "X-RapidAPI-Key": "b7e4922534msh7e0f3fda35ed8d2p117c96jsne62abd3ebb0c",
    "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
  },
});

async function allMediaSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    commit("global/updateLoading", true, { root: true });
    const { data } = await api.get("/searchIMDB", {
      params: { query: payload },
    });
    commit("global/updateMediaSearchResult", data.data, { root: true });
    commit("global/updateLoading", false, { root: true });
  } catch (error) {}
}

async function movieSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    commit("global/updateLoading", true, { root: true });
    const { data } = await axios.get(
      `${BASE_URL}/SearchMovie/${API_KEY}/${payload}`
    );
    commit("global/updateMediaSearchResult", data.results, { root: true });
    commit("global/updateLoading", false, { root: true });
  } catch (error) {}
}

async function tvSeriesSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    commit("global/updateLoading", true, { root: true });
    const { data } = await axios.get(
      `${BASE_URL}/SearchSeries/${API_KEY}/${payload}`
    );
    commit("global/updateMediaSearchResult", data.results, { root: true });
    commit("global/updateLoading", false, { root: true });
  } catch (error) {}
}

async function sortByYearAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    commit("global/updateLoading", true, { root: true });
    commit("global/updateMediaListByYear", {}, { root: true });
    commit("global/updateLoading", false, { root: true });
  } catch (error) {}
}

export default {
  allMediaSearchAction,
  movieSearchAction,
  tvSeriesSearchAction,
  sortByYearAction,
};
