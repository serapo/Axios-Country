import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
//import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;