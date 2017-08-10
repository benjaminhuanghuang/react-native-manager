import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//
import firebase from 'firebase';
//
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers'
//
export default class App extends Component {
  
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBEWculCMaccsyX_B24vJQ_7QLCZlvpqeU",
      authDomain: "manager-b1c7a.firebaseapp.com",
      databaseURL: "https://manager-b1c7a.firebaseio.com",
      projectId: "manager-b1c7a",
      storageBucket: "manager-b1c7a.appspot.com",
      messagingSenderId: "1086665679347"
    };
    firebase.initializeApp(config);
  } 

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store}>
        <LoginForm></LoginForm>
      </Provider>
    );
  }
}
 