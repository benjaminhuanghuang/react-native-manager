import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMAIL_CHANGED,
    payload: {prop, value}
  }
}
