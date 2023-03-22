import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add} from './redux/action';

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const countDemo = useSelector(state => state.add);
  console.log('fgg', countDemo);

  const Increment = () => {
    console.log('bdjjd');
  };

  const decrement = () => {
    console.log('bdjjd');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>{counter}</Text>
      <TouchableOpacity onPress={Increment}>
        <Text style={{fontSize: 50}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text style={{fontSize: 50}}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{fontSize: 50}}>reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
