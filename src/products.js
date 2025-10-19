// src/products.js  (o src/services/products.js si lo moviste)
import { api } from "../client";   // <-- antes tenías "../api/client"
export const getProducts = () => api.get("/api/products");
export const getProduct  = (id) => api.get(`/api/products/${id}`);
