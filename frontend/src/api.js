import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.VITE_API_BASE_URL,
=======
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://employee-utx8.vercel.app/api",

>>>>>>> a5643278a58cf33d5f3f180e44f95086365d38e8
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
