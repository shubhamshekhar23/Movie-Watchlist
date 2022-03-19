import { mapGetters, mapMutations, mapActions } from "vuex";
import MediaCard from "../media-card";

export default {
  name: "watch-media-list",
  components: { MediaCard },
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("global", ["global", "watchList"]),
    isWatchListEmpty() {
      return this.watchList && this.watchList.length === 0;
    },
  },
  mounted() {},
  methods: {},
};
