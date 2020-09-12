import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://example.com/",
});

export default axiosInstance;

// TODO: api to call card and return image svg
// TODO: api to call language and return image svg
