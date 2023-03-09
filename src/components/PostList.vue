<template>
  <div class="blog">
    <div class="time">
      <h2>Time: {{ nowTime }}</h2>
    </div>
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
          <h4>Creator: {{ post.creator }}</h4>
          <div>
            <h4>End Date : {{ endDate(post.endDate) }}</h4>
            <h4>Remaining Time : {{ remainingtime(post.endDate) }}</h4>
          </div>
        </div>
      </div>

      <button class="editBtn" @click="editPost(post._id)" role="link">
        Edit
      </button>

      <button @click="removePost(post._id)" class="deleteBtn">Delete</button>
      <h2 v-if="post.finishTime">asdfa</h2>
    </div>
  </div>
</template>
<script>
import router from "@/router/router";
import axios from "axios";
import moment from "moment";
export default {
  name: "PostList",
  data() {
    return {
      posts: {
        finishTime: false,
      },
      nowTime: moment(new Date()).format(" kk:mm:ss"),
      remTime: "",
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

    setInterval(() => {
      this.nowTime = moment(new Date()).format("kk:mm:ss ");
    }, 1000);
  },
  watch: {
    async nowTime() {},
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
    endDate: function (date) {
      return moment(date).format("MM-DD-YYYY hh:mm:ss ");
    },
    remainingtime: function (date) {
      const endDate = moment(date);
      const nowDate = moment(new Date());
      const t = endDate - nowDate;
      if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        const sonuc = `${days} day ${hours} hour ${minutes} minutes ${seconds} seconds`;
        return sonuc;
      } else {
        this.posts.finishTime = true;
        console.log(this.posts.finishTime);
        return `The Time is Over `;
      }
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
.time {
  margin-top: 15px;
  width: 100%;
  background-color: #757d82;
  text-align: center;
  font-size: 20px;
  color: azure;
  border-radius: 12px;
}
</style>
