import React, { useState } from 'react';
import './scss/style.scss';
import data from "./components/data.js";
import Products from './components/Products.js';
import Cart from './components/Cart.js';

function App() {

  const {products} = data;
  const [cartItems, setcartItems] = useState([]);

  return (
    <div className='pg-cart'>
      <main>
        <h1>Cart page</h1>
        <Products 
          products = {products}
        />
        <Cart 
          cartItems = {cartItems}
        />
      </main>
    </div>
  )
}

export default App
