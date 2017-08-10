import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
//
import firebase from 'firebase';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
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
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);