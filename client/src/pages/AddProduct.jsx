import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/product/ProductForm";
import { createProduct } from "../services/productService";
import { getErrorMessage } from "../utils/helpers";
import ErrorMessage from "../components/common/ErrorMessage";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (productData) => {
    setLoading(true);
    setError("");
    try {
      const product = await createProduct(productData);
      navigate(`/product/${product._id}`);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <h2>Add Product</h2>
      {error && <ErrorMessage message={error} />}
      <ProductForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default AddProduct;