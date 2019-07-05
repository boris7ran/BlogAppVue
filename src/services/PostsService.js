import axios from 'axios'

export default class PostsService {

    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts?filter={"include":["comments"]}');
    }

    get(id) {
        return axios.get('posts/' + id + '?filter={"include":["comments"]}');
    }

    add(post) {
        delete post.id;
        return axios.put('posts', post);
    }

    edit(id, editedPost) {
        return axios.put('posts/' + id, editedPost);
    }

    delete(id) {
        return axios.delete('posts/' + id)
    }

    addComment(comment, postId) {
        return axios.post('posts/' + postId + '/comments', comment)
    }
} 

export const postsService = new PostsService();