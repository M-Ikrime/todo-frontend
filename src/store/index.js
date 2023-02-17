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
        })
        .catch((error) => {
          console.log(error);
        });
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
