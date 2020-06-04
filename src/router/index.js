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
      path: "/dynamicshare",
      name: "dynamicshare",
      component: () => import("@/pages/dynamicshare.vue")
    },
    {
      path: "/studyingabroad",
      name: "studyingabroad",
      component: () => import("@/pages/studyingabroad.vue")
    },
    {
      path: "/aboutsuccess",
      name: "aboutsuccess",
      component: () => import("@/pages/aboutsuccess.vue")
    }
  ]
});
