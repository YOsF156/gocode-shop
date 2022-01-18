
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart/Cart';
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage';

function App() {



  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;