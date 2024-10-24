import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.86:5000/api', // Reemplaza con la IP de tu máquina de desarrollo
});

export default api;