export const ADD = 'CARTDATA/ADD';
export const SET = 'CARTDATA/SET';
export const DECREASE = 'CARTDATA/DECREASE';
export const INCREASE = 'CARTDATA/INCREASE';
export const DELETE = 'CARTDATA/DELETE';

export function addCartData(cartData) {
  return {
    type: ADD,
    carts: cartData,
  };
}

export function setCartData(cartData) {
  return {
    type: SET,
    cartData,
  };
}

export function decreaseCartData(cartId) {
  return {
    type: DECREASE,
    id: cartId,
  };
}

export function increaseCartData(cartId) {
  return {
    type: INCREASE,
    id: cartId,
  };
}

export function deleteCartData(cartId) {
  return {
    type: DELETE,
    id: cartId,
  };
}

const initalState = [];

function cart(state = initalState, action) {
  switch (action.type) {
    case ADD:
      return { carts: [...state.carts, action.cart] };
    case SET:
      return action.cartData;
    case DECREASE:
      return state.map(cart => (cart.cart_item_id === action.id ? { ...cart, quantity: cart.quantity - 1 } : cart));
    case INCREASE:
      return state.map(cart => (cart.cart_item_id === action.id ? { ...cart, quantity: cart.quantity + 1 } : cart));
    case DELETE:
      return state.filter(cart => cart.cart_item_id !== action.id);
    default:
      return state;
  }
}

export default cart;
