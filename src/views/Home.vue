<template>
  <div class="home">
    <div class="list">
      <PostList />
    </div>
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
/*eslint-disable */
export default {
  name: "home",
  components: {
    PostList,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  justify-content: center;
}
</style>
