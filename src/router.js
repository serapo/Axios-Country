import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Bayrak from './pages/BayrakPage.vue'

//import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/bayrak",
    name: "Bayrak",
    component: Bayrak,
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router;