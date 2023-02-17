<template>
  <div class="loginContainer">
    <div class="inputListContainer">
      <input
        v-model="user.username"
        class="inputContainer"
        placeholder="UserName" />
      <input
        v-model="user.password"
        class="inputContainer"
        placeholder="Password" />
      <div class="btnContainer">
        <button @click="login" class="lognbtnContainer">Login</button>
        <button @click="signupClick" class="signBtnContainer">Signup</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/router";
// import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signupClick() {
      router.push({ name: "signup" });
    },
    login() {
      this.$store.dispatch("login", { ...this.user });
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
