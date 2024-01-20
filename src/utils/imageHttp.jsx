import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

const imageHttp = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

imageHttp.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});

export default imageHttp;
