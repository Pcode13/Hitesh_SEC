import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
{
  /* <Icon name="rocket" size={30} color="#900" />;
<Icon name="circle-o" size={30} color="#900" />
      <Icon name="times" size={30} color="#900" /> */
}
const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-o" size={30} color="black" />;
    case 'cross':
      return <Icon name="times" size={30} color="#900" />;

    default:
      return null
  }
};

export default Icons;

const styles = StyleSheet.create({});
