import SearchFilter from "@/components/search-filter";
import MediaList from "@/components/media-list";

export default {
  name: "media-home",
  components: { MediaList, SearchFilter },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    showMyWatchList() {
      console.log("shw my watchlist clicked");
    },
  },
};
