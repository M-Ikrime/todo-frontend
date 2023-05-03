<template>
  <div class="loginContainer">
    <div class="inputListContainer">
      <input
        v-model="user.username"
        class="inputContainer"
        placeholder="UserName" />
      <input v-model="user.email" class="inputContainer" placeholder="Email" />
      <input v-model="user.job" class="inputContainer" placeholder="job" />
      <input
        v-model="user.password"
        class="inputContainer"
        placeholder="Password" />
      <div class="btnContainer">
        <button @click="loginClick" class="lognbtnContainer">Login</button>
        <button @click="signup" class="signBtnContainer">Signup</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/router";
import axios from "axios";

export default {
  name: "SignupPage",

  data() {
    return {
      user: {
        username: "",
        email: "",
        job: "",
        password: "",
      },
      isUser: false,
    };
  },
  methods: {
    loginClick() {
      router.push({ name: "login" });
    },
    onSubmit() {
      console.log(this.user);
    },
    signup() {
      try {
        const API_URL = "http://localhost:5000/api/user/";
        const body = {
          username: this.user.username,
          email: this.user.email,
          job: this.user.job,
          password: this.user.password,
        };
        const response = axios.post(API_URL, body);
        console.log(response);
        router.push({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.loginContainer {
  height: 750px;
  background-color: #c5d1cb;
  display: flex;
}
.inputListContainer {
  background-color: #e0954f;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 80%;
  margin: auto;
  height: 300px;
}
.inputContainer {
  margin: 10px;
  background-color: white;
  width: 320px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
.btnContainer {
  display: flex;
  flex-direction: row;
}
.lognbtnContainer {
  margin: 10px;

  width: 150px;
  height: 30px;
  background-color: #c5d1cb;
  border: none;
  cursor: pointer;
}
.lognbtnContainer:hover {
  border-color: currentColor;
  background-color: #ffffff;
}
.signBtnContainer {
  margin: 10px;
  width: 150px;
  height: 30px;
  background-color: #3c403e;
  border: none;
  cursor: pointer;
}
.signBtnContainer:hover {
  border-color: currentColor;
  background-color: #ffffff;
}
@media screen and (max-width: 500px) {
  .inputListContainer {
    width: 95%;
  }
}
</style>
