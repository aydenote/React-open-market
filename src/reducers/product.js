export const ADD = 'PRODUCT/ADD';

export function setProductData(product) {
  return {
    type: ADD,
    product,
  };
}

const initalState = [];

function product(state = initalState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.product];
    default:
      return state;
  }
}

export default product;
