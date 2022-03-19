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
  },
  mounted() {},
  methods: {
    ...mapActions("filterSearch", ["allMediaSearchAction"]),
    searchMedia() {
      this.allMediaSearchAction(this.mediaSearchInput);
      console.log("search media initiated");
    },
  },
};
