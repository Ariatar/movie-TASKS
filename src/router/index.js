import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import movies from "../views/movies.vue";
import movieShows from "../views/movieShows";


Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "home",
      component: Home
   },   

   {
      path: "/movieShows",
      name: "movieShows",
      component: movieShows
   },

   {
      path: "/movies",
      name: "movies",
      component: movies
   },
   {
      path: "/signinup",
      name: "signInUp",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/signInUp.vue")
   }
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes
});

export default router;
