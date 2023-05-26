import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import About from "./Component/About/About";
import Shop from "./Component/Shop/Shop";
import Contact from "./Component/Contact/Contact";
import Cart from "./Component/Cart/Cart";
import ShopSingle from "./Component/Shop/ShopSingle";
import { CartProvider } from "react-use-cart";
import Checkout from "./Component/Checkout/Chekcout";
import Thankyou from './Component/Thankyou/thankyou';

function App() {
  const MyContext = createContext();

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/ShopSingle/:id" element={<ShopSingle />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Checkout" element={<Checkout />} />
          <Route exact path="/Thankyou" element={<Thankyou />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
