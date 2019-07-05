import axios from 'axios'

export default class CommentsService{

  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  
}

export const commentsService = new CommentsService();