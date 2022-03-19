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
      return this.watchList.find((item) => item.id === this.mediaInfo.id);
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
