<template>
  <v-app>
    <v-main>
      <router-view />
      <v-overlay :value="isLoader">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("global", ["global", "isLoader"]),
  },
};
</script>

<style>
#app{
  background-color: #141414;
  div,p{
    color: white;
  }

}
</style>
