import { ISDISABLED } from '../actions';

const INITIAL_STATE = {
  isDisabled: false,
};

const disabledReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ISDISABLED:
    return {
      isDisabled: action.isDisabled,
    };
  default:
    return state;
  }
};

export default disabledReducer;
