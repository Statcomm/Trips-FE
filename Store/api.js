import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.150.79:8000/", //Bader's
  baseURL: "http://172.20.10.3:8000/", //Aziz's
  // baseURL: "http://localhost:8000/", //Aziz's
  // baseURL: "http://192.168.1.105:8000/", //Aziz's
});

export default api;
