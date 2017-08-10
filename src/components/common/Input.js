import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

//
const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput style={styles.textInputStyle} value={props.value}
        secureTextEntry = {props.secureTextEntry}
        autoCorrect={false} placeholder={props.placeholder}
        onChangeText={props.onChangeText} />
    </View>
  );
}

const styles = {
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderWidth: 1
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };