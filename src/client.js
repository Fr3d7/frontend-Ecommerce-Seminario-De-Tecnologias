// src/client.js
import { api } from "./client";
import axios from "axios";

// Vite: import.meta.env.VITE_API_URL
// CRA:  process.env.REACT_APP_API_URL
const API_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  process.env.REACT_APP_API_URL;

if (!API_URL) {
  console.warn("⚠️ API_URL no está definida. Configura VITE_API_URL o REACT_APP_API_URL.");
}

export const api = axios.create({
  baseURL: API_URL,
  // withCredentials: true, // descomenta si tu API usa cookies/sesiones
});
