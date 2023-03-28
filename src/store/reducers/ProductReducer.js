import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
    productList: [],
}

export const addProducts = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, productList: payload };
        default:
            return state
    }
}
export const slectedProducts = (state = initialState, actions) => {
    const { type, payload } = actions;
    console.log("payload", payload)
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, productList: payload };
        default:
            return state
    }
}


