import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index.vue")
    },
    {
      path: "/course",
      component: () => import("@/pages/course.vue")
    },
    {
      path: "/studyabroad",
      component: () => import("@/pages/studyabroad.vue")
    },
    {
      path: "/dynamicsharing",
      component: () => import("@/pages/dynamicsharing.vue")
    },
    {
      path: "/aboutus",
      component: () => import("@/pages/aboutus.vue")
    }
  ]
});
