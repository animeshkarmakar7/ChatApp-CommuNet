import axios from 'axios';

const API = axios.create({
  baseURL:import.meta.env.MODE==="development"?' https://chatapp-communet.onrender.com/api' : "/api",
  withCredentials: true 
});

export default API;

