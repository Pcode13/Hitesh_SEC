import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

const CustomLoader = () => {
  return (
    <Modal style={{flex: 1, position: 'absolute', top: 0}}>
      <View />
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({});
