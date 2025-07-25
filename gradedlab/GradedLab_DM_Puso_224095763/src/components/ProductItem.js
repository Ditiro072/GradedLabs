import React from "react";

function ProductItem({ product }) {
  return (
    <li>
      <div>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>R{product.price}</p>
      </div>
    </li>
  );
}

export default ProductItem;
