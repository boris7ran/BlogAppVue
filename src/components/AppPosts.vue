<template>
  <div>
    <div class="container-fluid">
      <ul v-for="post in posts" :key="post.id">
        <li>
          {{ post.id }}
          {{ post.title }}
          {{ countComments(post) }}
          <div class="btn-group">
            <router-link :to="routeToSingle(post.id)">
              <button>View Post</button>
            </router-link>
            <router-link :to="routeToEdit(post.id)">
              <button>Edit Post</button>
            </router-link>
            <button @click="handleDelete(post.id)">Delete</button>
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
      return `/post/${id}`;
    },

    routeToEdit(id) {
      return `/edit/${id}`;
    },

    handleDelete(id) {
      postsService
        .delete(id)
        .then(response => {
          alert('Succesfully deleted post with id: ' + id);
          this.$router.go();
        })
        .catch(error => {
          alert(error);
        });
    },

    countComments(post){
      let counter = 0;
      post.comments.forEach(comment => {
        counter++;
      });
      return counter;
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
