export const FAIL = 'SIGNUPFAIL/FAIL';
export const SUCCESS = 'SIGNUPFAIL/SUCCESS';

export const setFail = text => ({ type: FAIL, text: text });
export const setPass = text => ({ type: SUCCESS, text: text });

const initalState = {
  text: '',
  valid: false,
};

const signupFail = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, text: action.text, valid: true };
    case FAIL:
      return { ...state, text: action.text, valid: false };
    default:
      return state;
  }
};

export default signupFail;
