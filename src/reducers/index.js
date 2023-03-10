import { combineReducers } from 'redux';
import mainProduct from './mainProduct';
import counter from './counter';
import loginType from './loginType';
import loginFail from './loginFail';
import signupType from './signupType';
import signupFail from './signupFail';
import cart from './cart';
import product from './product';

const rootReducer = combineReducers({
  mainProduct,
  counter,
  loginType,
  loginFail,
  signupType,
  signupFail,
  cart,
  product,
});

export default rootReducer;
