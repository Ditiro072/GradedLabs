import React from "react";

function SearchBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="TYpe your product..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
