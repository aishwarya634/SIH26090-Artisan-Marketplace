import { Link } from "react-router-dom";
import { formatCurrency, truncateText } from "../../utils/helpers";

const ProductCard = ({ product }) => {
  const { _id, title, description, price, images, category } = product;
  const imageUrl = images?.[0] || "https://via.placeholder.com/300x220?text=No+Image";

  return (
    <Link to={`/product/${_id}`} className="product-card">
      <div className="product-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="product-card-body">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-desc">{truncateText(description, 80)}</p>
        <div className="product-card-price">{formatCurrency(price)}</div>
      </div>
    </Link>
  );
};

export default ProductCard;