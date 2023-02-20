import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/router";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");
      if (token) {
        let expirationDate = localStorage.getItem("exprationDate");
        let time = new Date().getTime();
        if (time >= expirationDate) {
          console.log("Tokenin süresi geçmişşşş.....");
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;
          dispatch("setTimeouTimer", timerSecond);
          router.push("/login");
        }
      } else {
        router.push("/");
      }
    },
    login({ commit, state, dispatch }, authData) {
      const API_URL = "http://localhost:5000/register/";
      const body = {
        username: authData.username,
        password: authData.password,
        returnSecureToken: true,
      };
      console.log(dispatch);
      console.log(state);
      axios
        .post(API_URL, body)
        .then((response) => {
          commit("setToken", response.data.token);
          router.push({ name: "home" });
          localStorage.setItem("token", response.data.token);

          localStorage.setItem("expirationDate", new Date().getTime() + 10000);
          dispatch("setTimeoutTimer", 10000);

          //      dispatch("setTimeoutTimer", +response.data.expressIn);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      router.push("/login");
    },

    setTimeoutTimer({ dispatch }, expressIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expressIn);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    },
  },
});
/*
 *     posts: [],
 *     getCompletedPosts(state) {
      return state.posts;
    },
        insertTodos(state, payload) {
      state.posts = payload;
    },
    fetchTodos({ commit }) {
      axios
        .get("http://localhost:5000/posts", {
          headers: {
            "Ocp-Apim-Subscription-Key": "your key",
          },
        })
        .then((response) => response.data)
        .then((posts) => {
          console.log(posts);
          commit("insertTodos", posts);
        });
    },


 * 
*/
