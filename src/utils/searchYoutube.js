import axios from 'axios';
import token from '../../config/youtube.js'



  export default axios.create(
    {
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      params: {
        part:'snippet',
        maxResults: 1,
        order: 'rating',
        key: key,
      }
    }
  )
