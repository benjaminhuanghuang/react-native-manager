import { combineReducers } from 'redux';
//
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

/*
  Reducers in application:
    1. libraries
    2. selection
*/
export default combineReducers({
  auth: AuthReducer,     // state : reducer
  employeeForm: EmployeeFormReducer
});
