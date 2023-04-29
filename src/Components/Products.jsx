import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/act.jsx';
import Catlog from './Catlog.jsx';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div className="products-container">
     
      {products.map((product) => (
        <Catlog key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;