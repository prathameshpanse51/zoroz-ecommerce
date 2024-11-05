// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentStatus from "./pages/PaymentStatus"; // Import the PaymentStatus component
import Homepage from "./components/Homepage";

function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetching featured products from a mock API
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => setFeaturedProducts(response.data))
      .catch((error) =>
        console.error("Error fetching featured products:", error)
      );
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  console.log(cart);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage products={featuredProducts} addToCart={addToCart} />
            }
          />
          <Route
            path="/featuredproducts"
            element={
              <FeaturedProducts
                products={featuredProducts}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart} />}
          />
          <Route path="/payment-status" element={<PaymentStatus />} />{" "}
          {/* Add Payment Status route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
