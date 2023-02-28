import { combineReducers } from 'redux';
import mainProduct from './mainProduct';
import counter from './counter';
import loginType from './loginType';
import loginFail from './loginFail';

const rootReducer = combineReducers({
  mainProduct,
  counter,
  loginType,
  loginFail,
});

export default rootReducer;
