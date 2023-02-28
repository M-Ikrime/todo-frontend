<template>
  <div class="container" style="margin-top: 25px">
    <form>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="title"
            class="input"
            type="text"
            placeholder="Title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="content"
            class="textarea"
            placeholder="Content"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Creater</label>
        <div class="control">
          <input
            class="input"
            v-model="creator"
            type="text"
            placeholder="Creater" />
        </div>
        <div class="btncontainer">
          <button
            v-if="!this.$route.params.id"
            @click="submitBtnClick"
            style="background-color: #e0954f"
            class="button is-link">
            Submit
          </button>
          <button
            v-if="this.$route.params.id"
            @click="updatePost()"
            style="background-color: #e0954f"
            class="button is-link">
            güncelle
          </button>
          {{ errorMesage }}
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import router from "@/router/router";
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      creator: "",
      user_id: "",
      errorMesage: "",
    };
  },
  mounted() {
    if (this.type == "edit") {
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:5000/api/posts/${id}`, {
          headers: {
            Authorization: this.$store.getters.getToken,
          },
        })
        .then((response) => {
          this.title = response.data.title;
          this.content = response.data.content;
          this.creator = response.data.creator;
        });
    }
  },
  methods: {
    submitBtnClick: async function () {
      try {
        const API_URL = "http://localhost:5000/api/posts";
        const body = {
          title: this.title,
          content: this.content,
          creator: this.creator,
        };
        const response = await axios.post(API_URL, body, {
          headers: {
            Authorization: this.$store.getters.getToken,
          },
        });
        console.log(response);
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        this.errorMesage = "Lütfen Alanları eksiksiz Doldurun";
      }
    },
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    updatePost: async function () {
      const id = this.$route.params.id;

      if (id) {
        const putPost = {
          title: this.title,
          content: this.content,
          creator: this.creator,
        };
        try {
          const res = await axios.put(
            `http://localhost:5000/api/posts/${id}`,
            putPost,
            {
              headers: {
                Authorization: this.$store.getters.getToken,
              },
            }
          );
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };
          this.putResult = this.fortmatResponse(result);
          router.push({ name: "home" });
        } catch (error) {
          console.log(error);
          this.errorMesage = "Lütfen Alanları eksiksiz Doldurun";
        }
      }
    },
  },
  props: {
    type: String,
  },
  computed: {
    postJson() {
      return JSON.parse(this.post);
    },
  },
};
</script>
<style>
.btncontainer {
  margin-top: 25px;
}
</style>
