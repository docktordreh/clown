import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/model",
      name: "model",
      component: () => import("./components/ModelList")
    },
    {
      path: "/model/:id",
      name: "model-details",
      component: () => import("./components/Model")
    },
    {
      path: "/model/add",
      name: "add",
      component: () => import("./components/AddModel")
    },
  ]

});
