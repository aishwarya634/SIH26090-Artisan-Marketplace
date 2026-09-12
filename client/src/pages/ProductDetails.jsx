import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { formatCurrency, getErrorMessage } from "../utils/helpers";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  const imageUrl = product.images?.[0] || "https://via.placeholder.com/500x400?text=No+Image";

  return (
    <div className="product-details-page">
      <div className="product-details-image">
        <img src={imageUrl} alt={product.title} />
      </div>
      <div className="product-details-info">
        <span className="product-card-category">{product.category}</span>
        <h1>{product.title}</h1>
        <p className="product-details-price">{formatCurrency(product.price)}</p>
        <p className="product-details-desc">{product.description}</p>
        {product.artisan?.user?.name && (
          <p className="product-details-artisan">By {product.artisan.user.name}</p>
        )}
        <button className="btn btn-primary">Contact Artisan</button>
      </div>
    </div>
  );
};

export default ProductDetails;