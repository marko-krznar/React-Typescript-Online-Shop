// import React, { useState } from 'react';
import './scss/style.scss';
import data from "./components/data.js";
import Products from './components/Products.js';

function App() {

  const {products} = data;

  return (
    <div className='pg-cart'>
      <main>
        <h1>BatM's</h1>
        <p>This is a test site made for learning</p>
        <Products 
          products = {products}
        />
      </main>
    </div>
  )
}

export default App
