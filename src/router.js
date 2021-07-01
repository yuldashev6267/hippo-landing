import Vue from "vue";
import Router from "vue-router";
import Home from "./views/mainView.vue";
import Contact from "./views/contactView.vue";
import Support from "./views/supportView.vue";
import Services from "./views/servicesView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/support",
      name: "support",
      component: Support,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
  ],
});
