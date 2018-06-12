import { LOG_IN, LOG_OUT } from '../action';

const initialState = { isLogged: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLogged: true };
    case LOG_OUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};
