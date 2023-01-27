import axios from "axios";
import { getToken } from "./auth";

const token = getToken();

const api = axios.create({
  baseURL: "http://127.0.0.1:3003",
});

api.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

export default api;
