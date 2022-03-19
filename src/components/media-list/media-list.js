import MediaCard from "../media-card";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "media-list",
  components: { MediaCard },
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("global", ["global", "mediaList"]),
    isMediaListEmpty() {
      return this.mediaList && this.mediaList.length == 0;
    },
  },
  mounted() {},
  methods: {},
};
