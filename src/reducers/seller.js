export const GET = 'SALEPRODUCT/GET';
export const SET = 'SALEPRODUCT/SET';

export const getSaleState = saleItem => ({ type: GET, saleItem });
export const setSaleState = saleItem => ({ type: SET, saleItem });

const initalState = null;

const sellerProduct = (state = initalState, action) => {
  switch (action.type) {
    case GET:
      return state;
    case SET:
      return action.saleItem;
    default:
      return state;
  }
};

export default sellerProduct;
