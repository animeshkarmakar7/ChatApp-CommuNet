import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5000/api"  // or your local backend port
    : "https://chatapp-communet.onrender.com/api",
  withCredentials: true 
});

export default API;

