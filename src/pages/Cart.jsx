// pages/Cart.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {cart.length == 0 && (
        <>
          <div className="bg-white p-4 text-center font-semibold text-xl md:text-3xl m-4">
            Cart is Empty...
          </div>
        </>
      )}
      {cart.length > 0 && (
        <div className="flex flex-col-reverse md:flex-row gap-4 mx-4 my-6 items-start justify-between">
          <div className="p-4 bg-white w-full md:w-[80%] relative rounded">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">
              Your Cart
            </h2>
            <span className="absolute right-[40px] md:right-[160px] top-[45px] text-slate-500 font-semibold text-lg">
              Price
            </span>
            <div className="divider"></div>
            <>
              <div>
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <div className="min-h-max">
                      <div className="flex flex-col items-start lg:flex-row md:mx-24 md:w-[100%]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="rounded w-[80px] md:w-[100px] h-[100px] md:h-[200px] object-contain"
                        />
                        <div className="mt-8 md:mt-0 md:ml-16 flex flex-row justify-between content-between md:w-[100%]">
                          <div>
                            <h1 className="md:text-xl font-semibold md:w-[500px]">
                              {product.title}
                            </h1>
                            <p className="mt-2 md:text-lg">
                              Quantity : {product.quantity}
                            </p>
                          </div>
                          <p className="text-xl md:text-2xl">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-semibold mt-4 text-xl">
                Total ({cart.length} item): ${total.toFixed(2)}
              </div>
            </>
          </div>
          <div className="bg-white p-4 w-full md:w-[20%] md:sticky top-4">
            <div className="font-semibold mt-4 text-xl">
              Total ({cart.length} item): ${total.toFixed(2)}
            </div>
            <button
              className="btn btn-warning w-full text-white p-2 mt-4 rounded"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
