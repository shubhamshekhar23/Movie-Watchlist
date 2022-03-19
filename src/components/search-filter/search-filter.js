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
  computed: {},
  mounted() {},
  methods: {
    searchMedia() {
      console.log("search media initiated");
    },
  },
};
