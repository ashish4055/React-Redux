import { ActionTypes } from "./ActionTypes"
import axios from "axios"
import storeApi from "../../components/api/Url"

// middleware
export const fetch_products = (resource) => async (dispatch, state) => {
    try {
        const productList = await storeApi.get(`/${resource}`);
        dispatch({ type: ActionTypes.SET_PRODUCTS, payload: productList.data })
    } catch (err) {
        console.error("Axios error :", err)
    }
}

//middleware 
export const select_product = (resource) => async (dispatch, state) => {
    try {
        const product = await storeApi.get(`/products/${resource}`);
        dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: product.data })
    } catch (err) {
        console.error("Axios error :", err)
    }
}


export const set_products = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selected_products = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

export const remove_products = (products) => {
    return {
        type: ActionTypes.REMOVE_PRODUCTS,
        payload: products
    }
}