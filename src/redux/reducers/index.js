import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import nameReducer from './nameReducer';
import tokenReducer from './tokenReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers(
  {
    emailReducer, nameReducer, tokenReducer, loadingReducer,
  },
);

export default rootReducer;
