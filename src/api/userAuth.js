  
import { API } from "./config";
import axios from 'axios';
const httpClient = axios.create();

export function generateAccessToken(userCreadentials) {
  const headers = { "Content-Type": "application/json" };
  return httpClient.post(`${API.URL}${API.AUTH}`, userCreadentials, {headers} );
}