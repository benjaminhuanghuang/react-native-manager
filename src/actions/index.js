/*
  Action creators
  Action creator are functions return an action
  Action is an object with a 'type' property

  Action creators with Thunk returns a function. The function will be called with dispatch
*/

//
import firebase from 'firebase';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, 
        LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

// return a function
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( user=>{
          dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        })
        .catch(()=> loginUserFail(dispatch));
      });
  };
}

const loginUserFail = (dispatch) =>{
  dispatch({type: LOGIN_USER_FAIL});
}