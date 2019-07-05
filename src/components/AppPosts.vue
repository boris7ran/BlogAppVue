<template>
  <div>
    <table class="table table-striped title-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Text</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.text }}</td>
          <td>{{ post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { postsService } from '@/services/PostsService'

export default {
    data() {
        return {
            posts: []
        }
    },

    mounted() {
        postsService.getAll()
            .then(response => {
                this.posts = response.data
            }).catch(error => {
                alert(error);
            });
        
    }
}
</script>
