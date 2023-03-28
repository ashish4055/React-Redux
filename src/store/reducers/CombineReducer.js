
import { combineReducers } from "redux";
import { addProducts, slectedProducts } from "./ProductReducer";

export const rootReducer = combineReducers({
    allProducts: addProducts,
    selectedProduct: slectedProducts
})