import Vue from "vue";
import VueRouter from "vue-router";
import MediaHome from "@/views/media-home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "media-home",
    component: MediaHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
