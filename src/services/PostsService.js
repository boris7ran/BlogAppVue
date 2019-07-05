import axios from 'axios'

export default class PostsService {

    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts')
    }

    get(id) {
        return axios.get('posts/' + id);
    }

    add(post) {
        return axios.put('posts', post)
    }
}

export const postsService = new PostsService();