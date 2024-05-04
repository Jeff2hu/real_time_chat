import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useJwt } from "../zustand/useJwt";

const AXIOS = axios.create({
  baseURL: "http://localhost:5000/api",
});

AXIOS.interceptors.request.use(
  (config) => {
    const { jwt } = useJwt.getState();
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (err) => {
    toast.error(err.response.data.message);
    Promise.reject(err);
  }
);

AXIOS.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    toast.error(err.response.data.message);
    Promise.reject(err as AxiosError);
  }
);

export default AXIOS;
