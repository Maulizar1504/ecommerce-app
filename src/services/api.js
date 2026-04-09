import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  const res = await apiClient.get("/products");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await apiClient.get("/products/categories");
  return res.data;
};

export default apiClient;