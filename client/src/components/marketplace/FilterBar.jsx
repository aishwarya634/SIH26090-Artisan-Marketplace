import { PRODUCT_CATEGORIES } from "../../utils/constants";

const FilterBar = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-bar">
      <button
        className={!selectedCategory ? "filter-btn active" : "filter-btn"}
        onClick={() => onCategoryChange("")}
      >
        All
      </button>
      {PRODUCT_CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? "filter-btn active" : "filter-btn"}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;