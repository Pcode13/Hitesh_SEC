import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from './Icons';
const Cards = ({Iconname, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Icons name={Iconname} />
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: 100,
    backgroundColor: '#c6f390',
    shadowColor: 'black',
    elevation: 5,
    shadowRadius: 5,
    borderRadius: 10,
    margin: 5,
  },
});
