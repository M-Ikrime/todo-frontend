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
      path: "/",
      name: "home",
      component: home,
      beforeEnter(to, from, next) {
        try {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        } catch (error) {
          console.log(error);
        }
      },
    },

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
      path: "/create",
      name: "create",
      component: create,
      beforeEnter(to, from, next) {
        try {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      path: "/update/:id",
      name: "update",
      component: update,
      beforeEnter(to, from, next) {
        try {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  ],
});
