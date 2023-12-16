import Vue from "vue";
import VueRouter from "vue-router";
import MediaHome from "@/views/media-home";
import WatchMediaList from "@/views/watch-media-list";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "media-home",
    component: MediaHome,
  },
  {
    path: "/my-list",
    name: "my-list",
    component: WatchMediaList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
