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
import Signup from './Component/Signup/Signup';
import Signin from './Component/Signin/Signin';
import FindProductByCategory from './Component/Shop/productByCat';

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
          <Route exact path="/Shop/productbycat/:id" element={<FindProductByCategory />} />
          <Route exact path="/Shopsingle/:id" element={<ShopSingle />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Checkout" element={<Checkout />} />
          <Route exact path="/Thankyou" element={<Thankyou />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Signin" element={<Signin />} />


        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
