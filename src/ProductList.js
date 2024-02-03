import React from 'react';

import protein from './protein.jpg';
import BCAA from './BCAA.jpg';
import preWork from './preWork.jpg';
import Trenbolone from './Trenbolone.jpg';
import './ProductList.css';

const productsData = [
  { id: 1, name: 'Protein Powder', price: 29.99, image: protein },
  { id: 2, name: 'BCAA Supplement', price: 19.99, image: BCAA },
  { id: 3, name: 'Pre-Workout Energy Drink', price: 24.99, image: preWork },
  { id: 4, name: 'Trenbolone', price: 50.00, image: Trenbolone }
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <div className="product-info">
              <img src={product.image} alt={product.name} className="product-image" />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;