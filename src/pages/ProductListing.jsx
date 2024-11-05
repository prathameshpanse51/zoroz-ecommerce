// pages/ProductListing.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductListing = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products by category
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{category} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
