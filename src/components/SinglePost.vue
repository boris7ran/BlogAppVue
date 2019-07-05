<template>
  <div>
    <div class="container-fluid">
      ID: {{ post.id }}
      Title: {{ post.title }}
      <div class="container-fluid">
        <p>{{ post.text }}</p>
      </div>
      {{ formatDate(post.createdAt, 'DD.MM.YYYY HH:mm' ) }}
    </div>

    <div class="container-fluid">
      <br />Comments:
      <ul v-for="comment in post.comments" :key="comment.id">
        <li>
          ID: {{ comment.id }}
          <p>{{ comment.text }}</p>
          Created {{ diffForHumans(comment.createdAt) }}
          <button @click="handleDelete(comment.id)">Delete</button>
        </li>
      </ul>
    </div>

    <br />
    <addComment></addComment>
  </div>
</template>

<script>
import { postsService } from "@/services/PostsService";
import addComment from "./AddComment";
import { dateMixin } from "../mixins/DateMixins";

export default {
  mixins: [dateMixin],

  components: {
    addComment
  },

  data() {
    return {
      post: {}
    };
  },

  methods: {
    handleDelete(commentId){
      postsService.deleteComment(commentId, this.post.id)
        .then(response => {
          this.$router.go()
        }).catch(error => {
          alert(error)
        })
    }
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
