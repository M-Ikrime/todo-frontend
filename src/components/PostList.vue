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
          <h4>Yazar : {{ post.creator }}</h4>
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
import { ref, onMounted } from "vue";
export default {
  name: "PostList",
  setup() {
    const posts = ref([]);
    const API_URL = "http://localhost:5000/api/posts/";
    onMounted(() => {
      getPosts();
    });
    async function getPosts() {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: this.$store.getters.getToken,
        },
      });
      posts.value = response.data;
    }
    return {
      posts,
    };
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
</style>
