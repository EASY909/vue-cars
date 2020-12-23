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
      },
      {
        path: "/safe",
        name: "Safe",
        meta: {
          title: "安全",
          icon: ""
        },
        component: () => import("../views/safe/index")
      },
      {
        path: "/password",
        name: "Password",
        meta: {
          title: "重置密码"
        },
        component: () => import("../views/safe/password")
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
