import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default apiClient;