import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "media-card",
  components: {},
  props: ["mediaInfo"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("global", ["global", "watchList"]),
    isAlreadyInWatchlist() {
      return this.watchList.find(
        (item) => item.imdbID === this.mediaInfo.imdbID
      );
    },
  },
  mounted() {},
  methods: {
    ...mapMutations("global", ["removeFromWatchList", "addToWatchList"]),
    doWatchListOrRemove() {
      if (this.isAlreadyInWatchlist) {
        this.removeFromWatchList(this.mediaInfo);
      } else {
        this.addToWatchList(this.mediaInfo);
      }
    },
    getColor() {
      this.isAlreadyInWatchlist ? "pink" : "grey";
    },
  },
};
