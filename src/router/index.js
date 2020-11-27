import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: '/user',
        name: "User",
        component: () => import("../views/user")
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
