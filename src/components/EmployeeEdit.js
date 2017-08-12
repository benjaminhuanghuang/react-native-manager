import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
//
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave} from '../actions';
import EmployeeForm from './EmployeeForm'
//
class EmployeeEdit extends Component {
  componentWillMount(){
    _.each(this.props.employee, (value, prop)=>{
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift } = this.props;
    // props.employee.uid comes from Actions.employeeEdit({employee: this.props.employee})
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid});
  }
 
  render() {
    return (
      <Card> 
        <EmployeeForm {...this.props}/>  
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Save Changed </Button>
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
  employeeSave
})(EmployeeEdit);