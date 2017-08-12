
import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

//
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal animationType="slide" onRequestClose={() => { }}
      visible={visible} transparent>
      <View style={styles.cardSectionStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}
export { Confirm };