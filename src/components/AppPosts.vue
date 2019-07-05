<template>
  <div>
    <div class="container-fluid">
      <ul v-for="post in posts" :key="post.id">
        <li>
          {{ post.id }}
          {{ post.title }}
          <div class="btn-group">
            <router-link :to="routeToSingle(post.id)">
              <button>View Post</button>
            </router-link>
            <router-link :to="routeToEdit(post.id)">
              <button>Edit Post</button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { postsService } from "@/services/PostsService";

export default {
  data() {
    return {
      posts: []
    };
  },

  methods: {
    routeToSingle(id) {
      return `/post/${id}`
    },

    routeToEdit(id) {
      return `/edit/${id}`
    }
  },

  mounted() {
    postsService
      .getAll()
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        alert(error);
      });
  }
};
</script>
