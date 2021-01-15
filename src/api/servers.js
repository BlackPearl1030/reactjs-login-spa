import { API } from "./config";
import axios from 'axios';
const httpClient = axios.create();

export function retrieveServersData() {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
  return httpClient.get(`${API.URL}${API.SERVERS}`, {headers});
}