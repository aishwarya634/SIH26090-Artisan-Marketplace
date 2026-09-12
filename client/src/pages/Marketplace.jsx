import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import ProductGrid from "../components/product/ProductGrid";
import SearchBar from "../components/marketplace/SearchBar";
import FilterBar from "../components/marketplace/FilterBar";
import { getErrorMessage } from "../utils/helpers";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getProducts({ search, category });
        setProducts(data.products);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [search, category]);

  return (
    <div className="marketplace-page">
      <h2>Marketplace</h2>
      <div className="marketplace-controls">
        <SearchBar onSearch={setSearch} />
      </div>
      <FilterBar selectedCategory={category} onCategoryChange={setCategory} />
      <ProductGrid products={products} loading={loading} error={error} />
    </div>
  );
};

export default Marketplace;