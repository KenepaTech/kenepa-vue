//import Vue from "vue"; // THIS WAS CAUSING THE PROBLEM WHAT
// import VueRouter from "vue-router";

//const { RouterLink } = require("vue-router")

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("./views/Home.vue"),
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("./views/About.vue"),
//   },
//   {
//     path: "/contacts",
//     name: "Contacts",
//     component: () => import("./views/Contacts.vue"),
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

// THIS IS THE RouterLink.JS FROM THE YOUTUBE VIDEO

// import { createRouter, createWebHistory} from 'vue-router'
// import Home from './views/Home.vue'
// import Contacts from './views/Contacts.vue'

// const routerHistory = createWebHistory()
// const router = createRouter({
//   history: routerHistory,
//   routes: [
//     {
//       path: '/',
//       component: Home
//     },
//     {
//       path: '/contact',
//       component: Contacts
//     }
//   ]
// })

// export default router;

import { createRouter, createWebHistory } from "vue-router";
// import Home from './views/Home.vue'
// import Contacts from './views/Contacts.vue'

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import(/* webpackChunkName "Home" */ "./views/Home.vue"),
    },
    {
      name: "Contacts",
      path: "/contacts",
      component: () =>
        import(/* webpackChunkName "Contacts" */ "./views/Contacts.vue"),
      // meta: {
      //   layout: "AppLayoutContacts",
      // },
    },
    {
      name: "Projects",
      path: "/projects",
      component: () =>
        import(/* webpackChunkName "Projects" */ "./views/Projects.vue"),
    },
    {
      name: "About",
      path: "/about",
      component: () =>
        import(/* webpackChunkName "About" */ "./views/About.vue"),
    },
    {
      name: "Blog",
      path: "/blog",
      component: () => import(/* webpackChunkName "Blog" */ "./views/Blog.vue"),
    },
  ],
});
export default router;
