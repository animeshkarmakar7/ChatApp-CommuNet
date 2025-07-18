import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api"  // or your local backend port
    : "https://communet-xljy.onrender.com/api",
  withCredentials: true 
});

export default API;

