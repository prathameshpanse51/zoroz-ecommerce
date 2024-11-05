import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (loading) {
    return <div className="p-4">Loading product details...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 flex flex-row">
      {product && (
        <div className="min-h-max">
          <div className="flex flex-col items-center md:items-start lg:flex-row md:mx-24">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-sm rounded shadow-2xl md:w-[1000px] h-[500px]"
            />
            <div className="mt-8 md:mt-0 md:ml-16">
              <h1 className="text-3xl md:text-5xl font-semibold">
                {product.title}
              </h1>
              <p className="mb-4 text-3xl md:text-4xl mt-4">${product.price}</p>
              <div className="divider"></div>
              <p className="pb-6">{product.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <label className="text-lg font-semibold">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                  className="w-16 text-center border rounded"
                  min="1"
                />
              </div>
              <button
                onClick={handleAddToCart}
                className="btn btn-warning p-2 px-8 mt-2 rounded font-bold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
