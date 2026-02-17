import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

export const getMonthlyRevenue = () => API.get("/revenue/monthly").then((r) => r.data);
export const getSalesByCategory = () => API.get("/sales/category").then((r) => r.data);
export const getOrderStatus = () => API.get("/orders/status").then((r) => r.data);
export const getSalesByRegion = () => API.get("/sales/region").then((r) => r.data);
export const getTopProducts = () => API.get("/products/top").then((r) => r.data);
export const getOrders = (page = 1, limit = 20) =>
  API.get(`/orders?page=${page}&limit=${limit}`).then((r) => r.data);
