const initialState = {
    products: [],
    cart: [],
  };
  
    
    const productReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          console.log(action.payload)
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        case 'REMOVE_PRODUCT':
          console.log(action.payload)
          const updatedCart = state.cart.filter(
            (product) => product.id !== action.payload,
          );
          
          return {
            ...state,
            cart: updatedCart,
          };
        case 'SET_PRODUCTS':
          return {
            ...state,
            products: action.payload,
          };
        default:
          return state;
      }
  }
  export default productReducer