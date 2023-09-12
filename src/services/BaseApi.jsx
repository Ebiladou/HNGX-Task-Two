import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '8c912f14cfb95dd02b5b614a131073b4', 
    language: 'en-US',
  },
});

export default instance;