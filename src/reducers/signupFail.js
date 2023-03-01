export const FAIL = 'SIGNUPFAIL/FAIL';
export const SUCCESS = 'SIGNUPFAIL/SUCCESS';

export const setFail = text => ({ type: FAIL, text: text });
export const setPass = text => ({ type: SUCCESS, text: text });

const initalState = '';

const signupFail = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS:
      return (state = action.text);
    case FAIL:
      return (state = action.text);
    default:
      return state;
  }
};

export default signupFail;
