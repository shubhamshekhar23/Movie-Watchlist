import MediaCard from "../media-card";

const mockMediaList = [
  {
    id: "tt0133093",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
    title: "The Matrix",
    description: "(1999)",
  },
  {
    id: "tt11749868",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BNjQyNWZiM2UtOWYyYS00MmVmLWFhZGUtY2ExMDQxNDc5YTE0XkEyXkFqcGdeQXVyMTEzMjQzMDM1._V1_Ratio0.7273_AL_.jpg",
    title: "Matrix",
    description: "(2020)",
  },
  {
    id: "tt10838180",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
    title: "The Matrix Resurrections",
    description: "(2021)",
  },
  {
    id: "tt0234215",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
    title: "The Matrix Reloaded",
    description: "(2003)",
  },
  {
    id: "tt0242653",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg",
    title: "The Matrix Revolutions",
    description: "(2003)",
  },
  {
    id: "tt9847360",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
    title: "A Glitch in the Matrix",
    description: "(2021)",
  },
  {
    id: "tt0295432",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_Ratio0.7273_AL_.jpg",
    title: "The Matrix Revisited",
    description: "(2001) (Video)",
  },
  {
    id: "tt0328832",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BZWRiODljNzUtZDkwOC00N2EwLTllMDAtOGQ4MmQ2YWY2MTBiXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_Ratio0.7273_AL_.jpg",
    title: "The Animatrix",
    description: "(2003) (Video)",
  },
  {
    id: "tt0365467",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BZjJjMTg5MTEtMDkwMy00ZjUyLTg5ODYtMmNmY2ZiNGVlZTdjXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_Ratio0.7273_AL_.jpg",
    title: "Making 'The Matrix'",
    description: "(1999) (TV Movie)",
  },
];

export default {
  name: "watch-media-list",
  components: { MediaCard },
  props: [],
  data() {
    return {};
  },
  computed: {
    watchList() {
      return [...mockMediaList];
    },
  },
  mounted() {},
  methods: {},
};
