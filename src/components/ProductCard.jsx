// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card card-compact bg-white w-80 shadow-xl rounded-lg">
        <figure>
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain my-4"
          />
        </figure>
        <div className="card-body bg-[#131921] text-white rounded-b-lg">
          <h2 className="card-title">{product.title}</h2>
          <p className="text-2xl font-bold">${product.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${product.id}`}>
              <button className="btn btn-warning p-2 px-4 mt-2 rounded">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
