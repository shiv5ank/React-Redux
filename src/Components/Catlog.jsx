import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/act.jsx';

const Catlog = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
   
    
  };

  return (
    <div className="product-card">
     
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Catlog;