export const addProduct = (product) => ({
    
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const removeProduct = (product) => ({
    type: 'REMOVE_PRODUCT',
    payload: product,
  });
  
  export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });