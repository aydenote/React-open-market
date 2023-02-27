export const BUYER = 'LOGINTYPE/BUYER';
export const SELLER = 'LOGINTYPE/SELLER';

export const setBuyerType = loginType => ({ type: BUYER, loginType });
export const setSellerType = loginType => ({ type: SELLER, loginType });

const initalState = '구매회원 로그인';

const loginType = (state = initalState, action) => {
  switch (action.type) {
    case BUYER:
      return (state = '구매회원 로그인');
    case SELLER:
      return (state = '판매회원 로그인');
    default:
      return state;
  }
};

export default loginType;
