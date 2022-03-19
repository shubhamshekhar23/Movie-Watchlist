import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "search-filter",
  components: {},
  props: [],
  data() {
    return {
      items: ["All", "Movies", "Tv-Series"],
      mediaSearchInput: "",
      mediaType: "All",
    };
  },
  computed: {
    ...mapGetters("global", ["global", "mediaList"]),
    isMediaListEmpty() {
      return this.mediaList && this.mediaList.length == 0;
    },
  },
  mounted() {},
  methods: {
    ...mapActions("filterSearch", [
      "allMediaSearchAction",
      "movieSearchAction",
      "tvSeriesSearchAction",
      "sortByRatingAction",
    ]),
    searchMedia() {
      switch (this.mediaType) {
        case "All":
          this.allMediaSearchAction(this.mediaSearchInput);
          break;
        case "Movies":
          this.movieSearchAction(this.mediaSearchInput);
          break;
        case "Tv-Series":
          this.tvSeriesSearchAction(this.mediaSearchInput);
          break;
        default:
          break;
      }
    },
    sortByRating() {
      if (!this.isMediaListEmpty) {
        this.sortByRatingAction(this.mediaList);
      }
    },
  },
};
