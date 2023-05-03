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
        let expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime();
        if (time >= +expirationDate) {
          console.log("token süresi geçmiş...");
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;
          console.log(timerSecond);
          dispatch("setTimeoutTimer", timerSecond);
          router.push("/");
        }
      } /**else {
        router.push("/home");
      }*/
    },
    login({ commit, dispatch }, authData) {
      const API_URL = "http://localhost:5000/register/";
      const body = {
        username: authData.username,
        password: authData.password,
        returnSecureToken: true,
      };
      axios
        .post(API_URL, body)
        .then((response) => {
          commit("setToken", response.data.token);
          router.push({ name: "home" }).catch(() => {});
          localStorage.setItem("token", response.data.token);
          localStorage.setItem(
            "expirationDate",
            new Date().getTime() + 1000000
          );
          dispatch("setTimeoutTimer", 1000000);
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
    getToken(state) {
      return state.token;
    },
  },
});
