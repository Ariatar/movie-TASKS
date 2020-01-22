import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import carousel from "../views/carousel.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "home",
      component: Home
   },

   {
      path: "/carousel",
      name: "carousel",
      component: carousel
   },
   {
      path: "/tickets",
      name: "tickets",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/tickets.vue")
   }
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes
});

export default router;
