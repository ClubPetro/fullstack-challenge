import axios from 'axios';

export const serverAPI = axios.create({
  baseURL: 'http://localhost:3333',
});
