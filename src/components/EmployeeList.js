import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
//
import _ from 'lodash';
//
import { Button, Card, CardSection, Input, Spinner } from './common';
import ListItem from './ListItem';
import { employeeFetch } from '../actions'
//
class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  // employees === this.props.employees
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (re1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee)
  {
    return <ListItem employee={employee}/>
  }
  render() {
    return (
      <ListView enableEmptySections dataSource={this.dataSource}
        renderRow={this.renderRow}>
      </ListView>
    );
  }
}

const mapStateToProps = state => {
  // transform object to array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };  // {shift:'Monday', name:'s', id:'xxxx' }
  });
  return { employees };
}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);