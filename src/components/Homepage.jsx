import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable ProductSection Component
const ProductSection = ({ title, category, products }) => {
  const navigate = useNavigate();

  // Function to navigate to category page
  const navigateToCategory = () => {
    navigate("/featuredproducts", { state: { category } });
  };

  return (
    <div className="bg-white w-[23rem] rounded mb-6 px-3">
      <h1 className="text-black text-xl font-semibold pt-2">{title}</h1>
      <div className="flex flex-row md:justify-evenly gap-4 flex-wrap md:py-4 ">
        {products.length == 0 && (
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <div className="flex w-40 flex-col gap-4">
              <div className="skeleton h-32 w-full rounded"></div>
            </div>{" "}
            <div className="flex w-40 flex-col gap-4">
              <div className="skeleton h-32 w-full rounded"></div>
            </div>{" "}
            <div className="flex w-40 flex-col gap-4">
              <div className="skeleton h-32 w-full rounded"></div>
            </div>{" "}
            <div className="flex w-40 flex-col gap-4">
              <div className="skeleton h-32 w-full rounded"></div>
            </div>
          </div>
        )}
        {products.length > 0 &&
          products
            .filter((product) => product.category === category)
            .slice(0, 4)
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between items-center content-center border-2 border-gray-300 rounded p-1"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />
                <p className="text-sm font-semibold my-1 productTitle text-ellipsis overflow-hidden text-black">
                  {product.title}
                </p>
              </div>
            ))}
      </div>
      <button
        onClick={navigateToCategory}
        className="btn btn-info w-full rounded my-2 text-white text-base"
      >
        Explore more
      </button>
    </div>
  );
};

// Homepage Component
export default function Homepage({ products }) {
  return (
    <>
      <main className="flex flex-col items-center content-center md:flex-row gap-4 my-10">
        <ProductSection
          title="Fashion for Men's"
          category="men's clothing"
          products={products}
        />
        <ProductSection
          title="Accessories for you"
          category="jewelery"
          products={products}
        />
        <ProductSection
          title="Electronics essentials"
          category="electronics"
          products={products}
        />
        <ProductSection
          title="Style for Women"
          category="women's clothing"
          products={products}
        />
      </main>
    </>
  );
}
