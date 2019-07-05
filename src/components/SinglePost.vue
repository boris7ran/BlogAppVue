<template>
  <div>
    <div class="container-fluid">
      ID: {{ post.id }}
      Title: {{ post.title }}
      <div class="container-fluid"><p>{{ post.text }}</p></div>
      {{ post.createdAt }}
    </div>
  </div>
</template>

<script>
import { postsService } from "@/services/PostsService";

export default {
  data() {
    return {
      post: {}
    };
  },

  mounted() {
    if (this.$route.params.id) {
      postsService
        .get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
