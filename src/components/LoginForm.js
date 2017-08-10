import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
//
import firebase from 'firebase';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged } from '../actions';
//
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  login() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ loading: false, error: 'Authentication Failed.' });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.login.bind(this)}>
        Log In
      </Button>
    );
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input value={this.state.email} label="Email:" placeholder="user@email"
            onChangeText={this.onEmailChange.bind(this)} />
        </CardSection>
        <CardSection>
          <Input value={this.state.password} label="Password:" placeholder="password"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })} />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(null, {emailChanged})(LoginForm);