// components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="navbar bg-[#131921]">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-white text-xl">
            ZOROZ
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search products"
          className="p-2 rounded w-1/4 mr-4"
        />
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{cart.length} Items</span>
                <span className="font-semibold">
                  Subtotal: ${total.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn btn-info rounded text-white btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ml-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
