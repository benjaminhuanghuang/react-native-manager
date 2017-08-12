import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm'
//
class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>  
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Create </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
  }
}
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);