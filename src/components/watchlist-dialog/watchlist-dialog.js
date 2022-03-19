import WatchMediaList from "../watch-media-list";

export default {
  name: "watchlist-dialog",
  components: { WatchMediaList },
  props: [],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    open() {
      this.dialog = true;
    },
  },
};
