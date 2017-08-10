import { combineReducers } from 'redux';
//
import AuthReducer from './AuthReducer';
/*
  Reducers in application:
    1. libraries
    2. selection
*/
export default combineReducers({
  auth: AuthReducer     // state : reducer
});
