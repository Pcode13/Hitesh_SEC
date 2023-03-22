import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txt}>WELCOME</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
    color: '#232F23',
  },
});
