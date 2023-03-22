import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';

const BGChange = () => {
  const [changrBG, setChangeBg] = useState('#00BCD4');

  var ColorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  const CBG = () => {
    setChangeBg(ColorCode);
  };

  const reset = () => {
    var color = 'black';
    setChangeBg(color);
  };
  return (
    <>
      <StatusBar backgroundColor={changrBG} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: changrBG,
        }}>
        <TouchableOpacity onPress={CBG} style={{margin: 20}}>
          <Text style={{color: 'white'}}>Tap Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={reset}>
          <Text style={{color: 'white'}}>Reset Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BGChange;
