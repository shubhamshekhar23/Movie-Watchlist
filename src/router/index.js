import Vue from "vue";
import VueRouter from "vue-router";
import MediaHome from "@/views/media-home";
import MediaList from "@/components/media-list";
import WatchMediaList from "@/components/watch-media-list";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home", // Redirect root to /home
  },
  {
    path: "/home",
    name: "media-home",
    component: MediaHome,
    children: [
      {
        path: "/",
        component: MediaList,
      },
      {
        path: "my-list",
        component: WatchMediaList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
