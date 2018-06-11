import { combineReducers } from 'redux';
import login from './login';
import route from './route';

export default combineReducers({
  login,
  routing: route,
});
