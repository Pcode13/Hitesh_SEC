import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import Icons from './Component/Icons';
import Snackbar from 'react-native-snackbar';
import {CustomTheme} from './Theme';
import Cards from './Component/Cards';

const itemArray = new Array(9).fill('empty');

const TicTacToe = () => {
  const [isCross, setISCross] = useState(false);
  const [winMsg, setWinMsg] = useState('');

  const changeItem = itemName => {
    if (winMsg) {
      return Snackbar.show({
        text: winMsg,
        backgroundColor: 'white',
        textColor: 'black',
        duration: Snackbar.LENGTH_INDEFINITE,
      });
    }
    if (itemArray[itemName] === 'empty') {
      itemArray[itemName] = isCross ? 'cross' : 'circle';
      setISCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }

    checkwinner();
  };
  const reloadGame = () => {
    setISCross(false);
    setWinMsg('');
    itemArray.fill('empty', 0);
  };

  const checkwinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMsg(`${itemArray[3]} won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMsg(`${itemArray[6]} won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMsg(`${itemArray[2]} won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMsg(`${itemArray[2]} won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMsg(`${itemArray[1]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[1] !== 'empty' &&
      itemArray[2] !== 'empty' &&
      itemArray[3] !== 'empty' &&
      itemArray[4] !== 'empty' &&
      itemArray[5] !== 'empty' &&
      itemArray[6] !== 'empty' &&
      itemArray[7] !== 'empty' &&
      itemArray[8] !== 'empty'
    ) {
      setWinMsg('No one Winner');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.conTxt}>
        <Text style={styles.Txt}>TIC TAC TOE</Text>
      </View>
      <View style={styles.grid}>
        {itemArray.map((item, index) => (
          <Cards
            Iconname={item}
            key={index}
            onPress={() => changeItem(index)}
          />
        ))}
      </View>
      {winMsg ? (
        <View>
          <Text style={styles.winmessage}>{winMsg}</Text>
          <Button onPress={reloadGame} title="Reset Game" color="#404040" />
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Icon name={isCross ? 'times' : 'circle-o'} size={30} color="#900" />
          <Text style={styles.message}>turns</Text>
        </View>
      )}
    </View>
  );
};

export default TicTacToe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe7b1',
  },
  conTxt: {
    width: '100%',
    backgroundColor: '#fce7f3',
    height: '8%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: 0.9,
    elevation: 5,
  },
  Txt: {
    fontSize: 30,
    fontWeight: '700',
    color: '#831843',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 5,
  },
  card: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#be185d',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingVertical: 10,
    fontSize: 18,
  },
  winmessage: {
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    backgroundColor: '#be185d',
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '800',
  },
});
