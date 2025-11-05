import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./components/CartPage";
import Foodcard from "./components/Foodcard";
import About from "./components/About";
import Contact from "./components/Contact";
import PaymentPage from "./components/PaymentPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/menu' element={<Foodcard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/*" element={<h1>404 Not Found</h1>}/>
      <Route path="/payment" element={<PaymentPage />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
