import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const vueRouter = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index/index.vue")
    },
    {
      path: "/m",
      component: () => import("@/pages/m/index/index.vue")
    },
    {
      path: "/course",
      component: () => import("@/pages/course/course.vue")
    },
    {
      path: "/m/course",
      component: () => import("@/pages/m/course/course.vue")
    },
    {
      path: "/dynamicsharing",
      component: () => import("@/pages/dynamicsharing/dynamicsharing.vue")
    },
    {
      path: "/m/dynamicsharing",
      component: () => import("@/pages/m/dynamicsharing/dynamicsharing.vue")
    },
    {
      path: "/studyabroad",
      component: () => import("@/pages/studyabroad/studyabroad.vue")
    },
    {
      path: "/m/studyabroad",
      component: () => import("@/pages/m/studyabroad/studyabroad.vue")
    },
    {
      path: "/aboutus",
      component: () => import("@/pages/aboutus/aboutus.vue")
    },
    {
      path: "/m/aboutus",
      component: () => import("@/pages/m/aboutus/aboutus.vue")
    }
  ]
});

vueRouter.beforeEach((to, from, next) => {
  let path = to.path;
  let bol = path.indexOf("/m") === -1;
  if (window.isMobel && bol) {
    path = "/m" + path;
    next({
      path
    });
  } else if (!window.isMobel && !bol) {
    path = path.replace("/m", "");
    next({
      path
    });
  } else {
    next();
  }
});

export default vueRouter;
