<template>
  <div class="blog">
    <div v-for="post in posts" :key="post._id" class="Listcontainer">
      <div class="contentList">
        <div class="title">
          <h2>{{ post.title }}</h2>
        </div>
        <div class="contentlist">
          <p>
            {{ post.content }}
          </p>
        </div>

        <div class="creator">
          <h4>Yazar: {{ post.creator }}</h4>
          <div>
            <h2>End Date: {{ toDate(post.endDate) }}</h2>
            <h2>Remaining Time:{{ remainingTime(post.endDate) }}</h2>
          </div>
        </div>
      </div>
      <!--
<router-link to="update" custom v-slot="{ navigate }">
      </router-link>
      

      -->

      <button class="editBtn" @click="editPost(post._id)" role="link">
        Edit
      </button>

      <button @click="removePost(post._id)" class="deleteBtn">Delete</button>
    </div>
    <!--
    <button @click="test()" class="deleteBtn">test</button>
  --></div>
</template>
<script>
import router from "@/router/router";
import axios from "axios";
import moment from "moment";
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    const API_URL = "http://localhost:5000/api/posts/";
    const response = axios
      .get(API_URL, {
        headers: {
          Authorization: this.$store.getters.getToken,
        },
      })
      .then((response) => {
        this.posts = response.data;
      });
    console.log(response);
  },
  methods: {
    removePost: async function (_id) {
      const response = await axios.delete(
        `http://localhost:5000/api/posts/${_id}`,
        {
          headers: {
            Authorization: this.$store.getters.getToken,
          },
        }
      );
      window.location.reload();
      return response;
    },
    editPost: async function (_id) {
      router.push({
        name: "update",
        params: {
          id: _id,
        },
      });
    },
    toDate: function (date) {
      return moment(date).format("MM-DD-YYYY hh:mm:ss");
    },

    remainingTime: function (date) {
      const endDate = moment(date).format("MM-DD-YYYY hh:mm:ss");

      return endDate;
    },
  },
};
</script>
<style>
.Listcontainer {
  margin-top: 20px;
  border-radius: 10px;
  background-color: #c5d1cb;
}
.contentList {
  padding: 15px;
}
.blog {
  width: 70%;
  margin-bottom: 50px;
}
.editBtn {
  background-color: #e0954f;
  border: none;
  padding: 8px 20px;
  border-radius: 2px;
  width: 50%;
  color: cornsilk;
  display: inline-block;
  cursor: pointer;
  font-size: 15px;
}
.deleteBtn {
  background-color: #ab0006;
  border: none;
  padding: 8px 20px;
  border-radius: 2px;
  width: 50%;
  color: cornsilk;
  display: inline-block;
  cursor: pointer;
  font-size: 15px;
}

.editBtn:hover {
  border-color: currentColor; /* Current Color = mevcut text rengi */
  background-color: #c5d1cb;
}
.deleteBtn:hover {
  border-color: currentColor; /* Current Color = mevcut text rengi */
  background-color: #c5d1cb;
}

.creator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 19px;
  font-weight: bold;
}
</style>
