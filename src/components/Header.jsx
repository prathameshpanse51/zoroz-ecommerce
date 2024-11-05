// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cart, products }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (val) => {
    setSearch(val);
    const searchBox = document.getElementById("search-box");
    searchBox.innerHTML = "";

    const filtered = products.filter((e) => {
      return e.title.toLowerCase().includes(val.toLowerCase());
    });

    filtered.forEach((e) => {
      const link = document.createElement("a");
      link.href = `/product/${e.id}`;
      link.className = "search-res";

      const svgContainer = document.createElement("span");
      svgContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      `;

      link.appendChild(svgContainer);
      link.appendChild(document.createTextNode(` ${e.title}`));

      searchBox.style.maxHeight = "300px";
      searchBox.style.overflow = "scroll";
      searchBox.appendChild(link);
    });

    if (filtered.length === 0) {
      searchBox.innerHTML = "<p class='search-no'>No Product Found!</p>";
    }

    if (val === "") {
      searchBox.style.maxHeight = "0px";
    }
  };

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
          name="search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
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
      <div className="search-box" id="search-box"></div>
    </>
  );
};

export default Header;
