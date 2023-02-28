export const BUYER = 'SIGNUPTYPE/BUYER';
export const SELLER = 'SIGNUPTYPE/SELLER';

export const setBuyerType = signupType => ({ type: BUYER, signupType });
export const setSellerType = signupType => ({ type: SELLER, signupType });

const initalState = '구매회원 가입';

const signupType = (state = initalState, action) => {
  switch (action.type) {
    case BUYER:
      return (state = '구매회원 가입');
    case SELLER:
      return (state = '판매회원 가입');
    default:
      return state;
  }
};

export default signupType;
