// pages/PaymentStatus.js
import React from "react";
import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const location = useLocation();
  const { status } = location.state || { status: "failed" };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div
              className={`text-center shadow-lg rounded-lg p-10 mb-8 ${
                status == "success"
                  ? "border-b-4 border-green-500"
                  : "border-b-4 border-red-500"
              }`}
            >
              <div className={`text-6xl mb-4 `} aria-hidden="true">
                {status == "success" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-10 h-10 fill-green-500 mx-auto"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-10 h-10 fill-red-500 mx-auto"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
                )}
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                {status == "success"
                  ? "Your payment was successful"
                  : "Your payment failed"}
              </h2>
              <p className="text-lg text-gray-700">
                {status == "success"
                  ? "Thank you for your payment. We will be in contact with more details shortly."
                  : "Try again later."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatus;
