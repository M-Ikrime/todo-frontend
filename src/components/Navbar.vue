<template>
  <div class="myNavbarContainer">
    <div class="myNavbar">
      <a href="../App.vue">
        <h2 class="logo">MyBlog</h2>
      </a>
      <div>
        <router-link to="/create" custom v-slot="{ navigate }">
          <button class="btn" @click="navigate" role="link">Create</button>
        </router-link>
        <button
          v-if="this.$store.getters.isAuthenticated"
          class="logoutBtn"
          @click="logout()">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/router";

export default {
  name: "NavBar",

  methods: {
    logout() {
      this.$store.dispatch("logout");
      router.push("/login");
    },
  },
};
</script>
<style>
.logo {
  color: black;
  font-weight: 700;
}
.myNavbarContainer {
  text-align: center;
  display: flex;
}
.myNavbar {
  width: 100%;
  height: 70px;
  background-color: #e0954f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.btn {
  background-color: aliceblue;
  border: none;
  padding: 5px 30px;
  border-radius: 4px;
  font-size: 15px;
  color: #e0954f;
  display: inline-block;
  cursor: pointer;
}
.btn:hover {
  color: #e0954f;
  border-color: currentColor; /* Current Color = mevcut text rengi */
  background-color: #c5d1cb;
}
.logoutBtn {
  background-color: #a80003;
  border: none;
  padding: 5px 30px;
  border-radius: 4px;
  font-size: 15px;
  color: white;
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
}

.logoutBtn:hover {
  color: #a80003;
  border-color: currentColor; /* Current Color = mevcut text rengi */
  background-color: #c5d1cb;
}
</style>
