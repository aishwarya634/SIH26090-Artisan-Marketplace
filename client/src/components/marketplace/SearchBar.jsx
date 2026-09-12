import { useState } from "react";
import { debounce } from "../../utils/helpers";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const debouncedSearch = debounce((val) => onSearch(val), 400);

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search products..."
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBar;