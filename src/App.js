
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [products, setproducts] = useState([""]);
  const [productfilterd, setproductfilterd] = useState([""]);
  const categories = ["All", ...products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)]

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data)
        setproductfilterd(data)
      })
  }, []);


  const selectVal = (val) => {
    setproductfilterd(val === "All" ? products : products.filter(product => product.category === val));
  };


  const sortAfterSelect = (val) => {
    setproductfilterd(productfilterd.sort((a, b) => a[val] - b[val]))
  }
  return (
    <div className="App">

      <Header categories={categories} selectVal={selectVal} sortAfterSelect={sortAfterSelect} />
      <Products products={productfilterd} />
    </div>
  );
}


export default App;
