import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//
import firebase from 'firebase';
//
import { Header, Button, Spinner, CardSection } from './components/common';
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
    return (
      <Provider store = {createStore(reducers)}>
        <View style={{ flex:1}}>
          <Header headerText="Manager"></Header>
        </View>
      </Provider>
    );
  }
}
 