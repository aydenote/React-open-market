// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const GET = 'MAINPRODUCT/GET';
export const SET = 'MAINPRODUCT/SET';

export const getProductState = product => ({ type: GET, product });
export const setProductState = product => ({ type: SET, product });

const initalState = {
  product: [],
};

const mainProduct = (state = initalState, action) => {
  switch (action.type) {
    case GET:
      return state;
    case SET:
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export default mainProduct;
