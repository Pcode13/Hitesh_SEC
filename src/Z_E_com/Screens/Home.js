import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.bottomContainer} />
      <TouchableOpacity style={styles.bottom} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fffeed',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
