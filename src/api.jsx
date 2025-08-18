import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const secureApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

secureApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => console.log(error)
);

export { secureApi };
export default api;
