import React, { Component } from 'react';
import { Text } from 'react-native';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
//
class ListItem extends Component {
  render() {
    const { name } = this.props.employee;
    return (
      <CardSection>
        <Text style={styles.title}>
          {name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;