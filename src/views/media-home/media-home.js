import SearchFilter from "@/components/search-filter";
import MediaList from "@/components/media-list";
import WatchlistDialog from "@/components/watchlist-dialog";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default {
  name: "media-home",
  components: {
    MediaList,
    SearchFilter,
    WatchlistDialog,
    AppHeader,
    AppFooter,
  },
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
