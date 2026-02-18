import axios from "axios";

const Api = axios.create({
  baseURL: "https://sweet-delights-cake.onrender.com/api",
    // headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true, // Include cookies in requests
});

// Attach token from localStorage on each request
Api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch (e) {
    // ignore
  }
  return config;
});

export default Api;
