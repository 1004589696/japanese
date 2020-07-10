import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index/index.vue")
    },
    {
      path: "/course",
      component: () => import("@/pages/course/course.vue")
    },
    {
      path: "/dynamicsharing",
      component: () => import("@/pages/dynamicsharing/dynamicsharing.vue")
    },
    {
      path: "/studyabroad",
      component: () => import("@/pages/studyabroad/studyabroad.vue")
    },
    {
      path: "/aboutus",
      component: () => import("@/pages/aboutus/aboutus.vue")
    }
  ]
});
