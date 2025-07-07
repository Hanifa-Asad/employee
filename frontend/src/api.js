import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
<<<<<<< HEAD
  baseURL: "https://employee-3918.vercel.app",
=======
  baseURL: "https://employee-teal.vercel.app",
>>>>>>> 2d1233aa39132459f872506025a70edf363720f6
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
