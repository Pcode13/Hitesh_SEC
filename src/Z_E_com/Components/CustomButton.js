import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';


const CustomButton = ({title, onPress, cutomStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnView, cutomStyle]}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnView: {
    height: 40,
    marginTop: 8,

    backgroundColor: '#99b333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
});
