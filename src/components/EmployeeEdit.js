import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import Communications from 'react-native-communications'
//
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm'
//
class EmployeeEdit extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    // props.employee.uid comes from Actions.employeeEdit({employee: this.props.employee})
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your coming shift is on ${shift}`);
  }

  onAccept() {
    this.setState({ showModal: false });
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Save Changed </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextButtonPress.bind(this)}> Text Schedule </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}> Fire Employee </Button>
        </CardSection>
        <Confirm visible={this.state.showModal} onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are your sure your want to delete this?
        </Confirm>
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
  employeeSave,
  employeeDelete
})(EmployeeEdit);