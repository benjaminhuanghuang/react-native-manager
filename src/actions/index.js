/*
  Action creators
  Action creator are functions return an action
  Action is an object with a 'type' property

  Action creators with Thunk returns a function. The function will be called with dispatch
*/

//
import { EMAIL_CHANGED } from './types';

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


export const loginUser = ({email, password}) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then()
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}