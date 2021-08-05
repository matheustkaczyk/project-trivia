import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import nameReducer from './nameReducer';
import tokenReducer from './tokenReducer';
import loadingReducer from './loadingReducer';
import disabledReducer from './disabledReducer';

const rootReducer = combineReducers(
  {
    emailReducer, nameReducer, tokenReducer, loadingReducer, disabledReducer,
  },
);

export default rootReducer;
