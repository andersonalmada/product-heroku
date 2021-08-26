import {
  createWebHistory,
  createWebHashHistory,
  createRouter,
} from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import Register from "@/views/Register.vue";
import Home2 from "@/views/Home2.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/upload",
    name: "Home2",
    component: Home2,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
