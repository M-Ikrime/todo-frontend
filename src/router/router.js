import Vue from "vue";
import Router from "vue-router";
import home from "@/views/Home";
import create from "@/views/Create.vue";
import update from "@/views/Update.vue";
import signup from "@/views/Signup";
import login from "@/views/Login";
import { store } from "../store/index";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },

    {
      path: "/",
      name: "home",
      component: home,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/create",
      name: "create",
      component: create,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/update/:id",
      name: "update",
      component: update,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
});
