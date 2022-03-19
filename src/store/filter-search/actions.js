import axios from "axios";

const BASE_URL = "https://imdb-api.com/API";
const API_KEY = "k_04qkat7e";

async function allMediaSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/Search/${API_KEY}/${payload}`
    );
    commit("global/updateMediaSearchResult", data.results, { root: true });
  } catch (error) {}
}

async function movieSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/SearchMovie/${API_KEY}/${payload}`
    );
    commit("global/updateMediaSearchResult", data.results, { root: true });
  } catch (error) {}
}

async function tvSeriesSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/SearchSeries/${API_KEY}/${payload}`
    );
    commit("global/updateMediaSearchResult", data.results, { root: true });
  } catch (error) {}
}

export default {
  allMediaSearchAction,
  movieSearchAction,
  tvSeriesSearchAction,
};
