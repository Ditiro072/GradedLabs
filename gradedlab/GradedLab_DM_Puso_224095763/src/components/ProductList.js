import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products found, Searcg another one..</p>
      ) : (
        <ul>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
