// import React, { useState } from 'react';
import './scss/style.scss';
import data from "./components/data.js";
import Products from './components/Products.js';

function App() {

  const {products} = data;

  return (
    <div className='pg-cart'>
      <main className='p-4'>
        <h1 className='text-center display-1 font-weight-bold'>BatM's</h1>
        <p className='text-center text--hd-desc'>This is a test site made for learning. For using coupon write in field PROMO30. It will reduce total for 30%.</p>
        <Products 
          products = {products}
        />
      </main>
    </div>
  )
}

export default App
