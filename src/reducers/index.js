import { combineReducers } from 'redux';
import mainProduct from './mainProduct';
import counter from './counter';
import loginType from './loginType';

const rootReducer = combineReducers({
  mainProduct,
  counter,
  loginType,
});

export default rootReducer;
