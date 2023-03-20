export const SET = 'SALEPRODUCT/SET';
export const DELETE = 'SALEPRODUCT/DELETE';

export const setSaleState = saleItem => ({ type: SET, saleItem });
export const deleteSaleState = productId => ({ type: DELETE, productId });

const initalState = null;

const sellerProduct = (state = initalState, action) => {
  switch (action.type) {
    case SET:
      return action.saleItem;
    case DELETE:
      return state.filter(saleItem => saleItem.product_id !== action.productId);
    default:
      return state;
  }
};

export default sellerProduct;
