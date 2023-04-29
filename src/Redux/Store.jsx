import {legacy_createStore} from "redux"
import productReducer from "./Reducer";
export const cartStore = legacy_createStore(productReducer);
console.log(cartStore);
// export default cartStore