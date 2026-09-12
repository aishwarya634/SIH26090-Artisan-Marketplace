import api from "./api";

export const getProducts = async (params = {}) => {
  const res = await api.get("/api/products", { params });
  return res.data; // { products, total, page, pages }
};

export const getProductById = async (id) => {
  const res = await api.get(`/api/products/${id}`);
  return res.data;
};

export const getMyProducts = async () => {
  const res = await api.get("/api/products/mine");
  return res.data;
};

export const createProduct = async (productData) => {
  const res = await api.post("/api/products", productData);
  return res.data;
};

export const updateProduct = async (id, productData) => {
  const res = await api.put(`/api/products/${id}`, productData);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/api/products/${id}`);
  return res.data;
};