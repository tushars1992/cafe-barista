import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders.vue"),
  },
  {
    path: "/prices",
    name: "Prices",
    component: () =>
      import(/* webpackChunkName: "prices" */ "../views/Prices.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
