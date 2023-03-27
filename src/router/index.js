import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Repositories from "../views/Repositories.vue";
import NotFound from "../views/NotFound.vue";
import Repository from "../views/Repository.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/repositories/:id",
    name: "Repository",
    component: Repository,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
