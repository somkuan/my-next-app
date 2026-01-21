import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend.codingthailand.com/v2",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
