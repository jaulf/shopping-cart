export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";
export const SUB_SHIPPING = "SUB_SHIPPING";

export const AddToCart = (id) => {
    return {type : ADD_TO_CART, id}
}

export const RemoveFromCart = (id) => {
    return {type: REMOVE_FROM_CART, id}
}

export const AddQuantity = (id) => {
    return {type: ADD_QUANTITY, id}
}

export const SubQuantity = (id) => {
    return {type: SUB_QUANTITY, id}
}

export const addShipping = () => {
    return {type : ADD_SHIPPING}
}

export const subShipping = () => {
    return {type : SUB_SHIPPING}
}