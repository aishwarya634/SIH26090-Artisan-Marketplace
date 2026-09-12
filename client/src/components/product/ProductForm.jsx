import { useState } from "react";
import { PRODUCT_CATEGORIES } from "../../utils/constants";

const ProductForm = ({ onSubmit, initialData = {}, loading }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    category: initialData.category || PRODUCT_CATEGORIES[0],
    price: initialData.price || "",
    stock: initialData.stock || 1,
    images: initialData.images || [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, price: Number(formData.price), stock: Number(formData.stock) });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" value={formData.title} onChange={handleChange} required />
      </label>

      <label>
        Description
        <textarea name="description" value={formData.description} onChange={handleChange} rows={4} />
      </label>

      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {PRODUCT_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label>
        Price (₹)
        <input type="number" name="price" value={formData.price} onChange={handleChange} min="0" required />
      </label>

      <label>
        Stock
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} min="0" />
      </label>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
};

export default ProductForm;