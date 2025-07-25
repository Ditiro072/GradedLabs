import React, { useState, useMemo } from "react";
import productsData from "./data";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesForDropdown = useMemo(() => {
    const uniqueCategories = new Set(
      productsData.map((product) => product.category)
    );
    return ["All", ...Array.from(uniqueCategories)];
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, productsData]);

  return (
    <div>
      <div>
        <h1>The UJsHOP</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categoriesForDropdown}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
