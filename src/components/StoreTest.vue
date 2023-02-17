<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
// import { mapActions, mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
  computed: mapState(["posts"]),
};
</script>
<style></style>
