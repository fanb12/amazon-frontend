import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/e-project-555fd/us-central1/api",
  baseURL: "https://easy-jade-badger-veil.cyclic.app",
});
export { axiosInstance };
