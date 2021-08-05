import { GET_LOADING } from '../actions';

const INITIAL_STATE = {
  loading: true,
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOADING:
    return { loading: action.loading };
  default:
    return state;
  }
};

export default emailReducer;
