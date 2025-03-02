import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_PAT}`,
  },
});

export default axiosInstance;
