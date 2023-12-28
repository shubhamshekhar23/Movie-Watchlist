import { movieResponseMockData } from "@/data/movie.mockdata";
import axios from "axios";

const apiKey = "ecccb05b";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: { apiKey: apiKey },
});

async function allMediaSearchAction(
  { commit, getters, dispatch, rootState },
  payload
) {
  try {
    commit("global/updateLoading", true, { root: true });
    const { data } = await api.get("/", {
      params: { s: payload },
    });
    commit("global/updateMediaSearchResult", data.Search, { root: true });
    commit("global/updateLoading", false, { root: true });
  } catch (error) {
    /* use Mockdata if api not working */
    alert("API has reached limit. Now using Mockdata");
    const { data } = movieResponseMockData;
    commit("global/updateMediaSearchResult", data.Search, { root: true });
    commit("global/updateLoading", false, { root: true });
    console.warn(error);
  }
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
  sortByYearAction,
};
