// components/FeaturedProducts.js
import React from "react";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const FeaturedProducts = ({ products }) => {
  const location = useLocation();

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">
          {location.state.category}
        </h2>
        <div className="flex md:flex-row justify-center md:justify-around flex-wrap gap-10">
          {products.map(
            (product) =>
              product["category"] === location.state.category && (
                <ProductCard key={product.id} product={product} />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
