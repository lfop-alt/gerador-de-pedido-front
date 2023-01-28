import axios from "axios";
import { getToken } from "./auth";

const token = getToken();

const api = axios.create({
  baseURL: "https://gerador-pedido.onrender.com",
});

api.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

export default api;
