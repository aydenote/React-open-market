export const FAIL = 'LOGINFAIL/FAIL';
export const SUCCESS = 'LOGINFAIL/SUCCESS';

export const setFail = failText => ({ type: FAIL, text: failText });
export const setPass = () => ({ type: SUCCESS });

const initalState = false;

const loginFail = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS:
      return (state = false);
    case FAIL:
      return (state = action.text);
    default:
      return state;
  }
};

export default loginFail;
