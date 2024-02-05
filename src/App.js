// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Bucket from './Bucket';
import Footer from './Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [bucketItems, setBucketItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const addToBucket = (product) => {
    setBucketItems([...bucketItems, { ...product }]);
    removeFromCart(product.id);
  };

  const removeFromBucket = (productId) => {
    const updatedBucket = bucketItems.filter((item) => item.id !== productId);
    setBucketItems(updatedBucket);
  };
  
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <ProductList addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} addToBucket={addToBucket} removeFromCart={removeFromCart} />
        <Bucket bucketItems={bucketItems} removeFromBucket={removeFromBucket} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
