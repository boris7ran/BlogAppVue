<template>
  <div>
    <div class="container-fluid">
      <form @submit.prevent="handleAdd">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" minlength="2" id="title" v-model="newPost.title" required />
        </div>
        <div>
          <label for="text">Text</label>
          <textarea rows="4" cols="50" maxlength="300" id="text" v-model="newPost.text" required />
        </div>
        <div class="btn-group">
          <button type="submit">Add Post</button>
          <button type="button" @click="resetForm">Reset</button>
          <button type="button" v-if="editable" @click="editPost">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { postsService } from "@/services/PostsService";

export default {
  data() {
    return {
      editable: false,
      newPost: this.getDefaults()
    };
  },

  methods: {
    getDefaults() {
      return {
        title: "",
        text: ""
      };
    },

    handleAdd() {
      postsService
        .add(this.newPost)
        .then(response => {
          this.newPost = this.getDefaults();
          this.$router.push("/posts");
        })
        .catch(error => {
          alert(error);
        });
    },

    resetForm() {
      this.newPost = this.getDefaults();
    },

    editPost() {
      postsService.edit(this.$route.params.id, this.newPost);
      this.$router.push("/post/" + this.$route.params.id);
    }
  },

  mounted() {
    if (this.$route.params.id) {
      this.editable = true;
      postsService
        .get(this.$route.params.id) // eslint-disable-next-line
        .then(response => { 
          this.newPost = response.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
