import { mapGetters, mapMutations, mapActions } from "vuex";
import MediaCard from "@/components/media-card";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default {
  name: "watch-media-list",
  components: { MediaCard, AppHeader, AppFooter },
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
