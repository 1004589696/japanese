import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/pages/index.vue")
    },
    {
      path: "/dynamic",
      name: "dynamic",
      component: () => import("@/pages/dynamic.vue")
    },
  ]
});
