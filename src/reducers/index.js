import { combineReducers } from 'redux';
import mainProduct from './mainProduct';
import counter from './counter';

const rootReducer = combineReducers({
  mainProduct,
  counter,
});

export default rootReducer;
