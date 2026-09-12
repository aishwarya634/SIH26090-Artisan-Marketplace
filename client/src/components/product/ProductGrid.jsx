import ProductCard from "./ProductCard";
import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!products || products.length === 0) {
    return <p className="empty-state">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;