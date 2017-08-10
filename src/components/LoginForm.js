import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
//
import firebase from 'firebase';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged } from '../actions';
//
class LoginForm extends Component {
  login() {
  
  }

  onLoginSuccess() {
  }

  onLoginFail() {
  }

  renderButton() {
    if (this.props.loading) {
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

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }z

  render() {
    return (
      <Card>
        <CardSection>
          <Input value={this.props.email} label="Email:" placeholder="user@email"
            onChangeText={this.onEmailChange.bind(this)} />
        </CardSection>
        <CardSection>
          <Input value={this.props.password} label="Password:" placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)} />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.props.error}</Text>
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

const mapStateToProps = state=> {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);