import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://employee-3918.vercel.app",
});

// Attach token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
