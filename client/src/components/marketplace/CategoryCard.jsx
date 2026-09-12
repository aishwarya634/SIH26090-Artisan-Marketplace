const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="category-card" onClick={() => onClick(category)}>
      <h4>{category}</h4>
    </div>
  );
};

export default CategoryCard;