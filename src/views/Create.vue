<template>
  <div>
    <PostForm />
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";

export default {
  name: "CreateL",
  components: {
    PostForm,
  },
};
</script>
<style></style>

<!--
/** setup() { const API_URL = "http://localhost:5000/posts"; const router =
useRouter(); const post = reactive({ title: "", content: "", creator: "", });
async function createPost() { const response = await fetch(API_URL, { method:
"POST", headers: { "content-type": "aplication/json", }, body: JSON.stringify({
title: post.title, content: post.content, creator: post.creator, }), }); const
json = await response.json(); router.push({ name: "home", }); return json; }
return { post, createPost, }; }, */
-->
