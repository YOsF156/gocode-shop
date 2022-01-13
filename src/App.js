
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart/Cart';

function App() {
  const [products, setproducts] = useState([""]);
  const [productfilterd, setproductfilterd] = useState([""]);
  const [cartList, setCartList] = useState([""])
  const categories = ["All", ...products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)]
  const val = useRef(1)

  function updateCart(id) {
    if (products[0].counter === undefined) {
      setproducts(products.map(product => product.counter ? product : product.counter = 1))
      console.log(products);
    }
    setproducts(products.map(product => (product.id === id) ? { ...product, counter: (product.counter + 1) } : product));
    console.log(products);

  }

  useEffect(() => {
    setCartList(products.filter(product => product.counter > 0))
    console.log(cartList);
  }, [products])

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
      <Cart cartList={cartList} />
      <Products products={productfilterd} updateCart={updateCart} />
    </div>
  );
}


export default App;
