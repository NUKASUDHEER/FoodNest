import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllFoodItems from './components/AllFoodItems';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  const [countCartItems, setcountCartItems] = useState(0);
  const onCountCartItemsHandler = (count) => {
      setcountCartItems(count)
  }
  console.log(countCartItems);
  return (
    <>
      <BrowserRouter>
        <Navbar count={countCartItems} />
        <Routes>
          <Route path="/" element={<AllFoodItems />} />
          <Route path="/cart" element={<Cart count={onCountCartItemsHandler} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
