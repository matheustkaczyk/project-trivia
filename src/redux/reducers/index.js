import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import nameReducer from './nameReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({ emailReducer, nameReducer, tokenReducer });

export default rootReducer;
