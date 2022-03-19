import SearchFilter from "@/components/search-filter";
import MediaList from "@/components/media-list";
import WatchlistDialog from "@/components/watchlist-dialog";

export default {
  name: "media-home",
  components: { MediaList, SearchFilter, WatchlistDialog },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    showMyWatchList() {
      this.$refs.dialog_reference.open();
      console.log("shw my watchlist clicked");
    },
  },
};
