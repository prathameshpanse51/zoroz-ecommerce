// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentStatus from "./pages/PaymentStatus";
import Homepage from "./components/Homepage";

function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
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

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  console.log(cart);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} products={featuredProducts} />
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
            element={
              <ProductDetail
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart} />}
          />
          <Route path="/payment-status" element={<PaymentStatus />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
