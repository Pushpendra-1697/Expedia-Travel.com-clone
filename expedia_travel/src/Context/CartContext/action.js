export const addToCart = (data) => ({
    type: "ADD_TO_CART",
    payload: data,
});
export const removeFromCart = (id) => ({
    type: "REMOVE_TO_CART",
    payload: id,
});
export const checkout = () => ({
    type: "CHECKOUT",
});

