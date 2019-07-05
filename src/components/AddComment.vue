<template>
  <div>
    <div class="container-fluid">
      <form @submit.prevent="addComment">
        <div>
          <label for="text">Text</label>
          <textarea rows="4" cols="50" maxlength="300" v-model="comment.text" id="text" required />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
import { postsService }  from '@/services/PostsService'

export default {
  data() {
    return {
      comment: {
        text: "",
        postId: this.$route.params.id
      }
    }
  },

  methods: { 
    addComment() { // eslint-disable-next-line
      postsService.addComment(this.comment, this.comment.postId) 
        .then(response => {
          this.$router.go()
        })
    }
  }
};
</script>
