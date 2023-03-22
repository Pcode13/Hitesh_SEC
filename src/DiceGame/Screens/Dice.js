import {StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  DICE_ONE,
  DICE_TWO,
  DICE_THREE,
  DICE_FOUR,
  DICE_FIVE,
  DICE_SIX,
} from '../assets/Images';

const Dice = () => {
  const [dices, setDices] = useState(DICE_THREE);
  const [dice, setDice] = useState(DICE_ONE);
  const playDice = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let random = Math.floor(Math.random() * 6 + 1);
    switch (randomNumber) {
      case 1:
        setDices(DICE_ONE);
        // setDice(DICE_ONE);
        break;
      case 2:
        setDices(DICE_TWO);
        // setDice(DICE_ONE);
        break;
      case 3:
        setDices(DICE_THREE);
        // setDice(DICE_THREE);
        break;
      case 4:
        setDices(DICE_FOUR);
        // setDice(DICE_FOUR);
        break;
      case 5:
        setDices(DICE_FIVE);
        // setDice(DICE_FIVE);
        break;
      case 6:
        setDices(DICE_SIX);
        // setDice(DICE_SIX);
        break;
      default:
        setDices(DICE_ONE);
      // setDice(DICE_ONE);
    }

    switch (random) {
      case 1:
        setDice(DICE_ONE);
        break;
      case 2:
        setDice(DICE_TWO);
        break;
      case 3:
        setDice(DICE_THREE);
        break;
      case 4:
        setDice(DICE_FOUR);
        break;
      case 5:
        setDice(DICE_FIVE);
        break;
      case 6:
        setDice(DICE_SIX);
        break;
      default:
        setDice(DICE_ONE);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.view}>
          <Pressable onPress={playDice}>
            <Image style={styles.img} source={dices} />
          </Pressable>
          <Pressable onPress={playDice}>
            <Image style={styles.img} source={dice} />
          </Pressable>
        </View>
        <TouchableOpacity onPress={playDice}>
          <Text style={styles.text}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Dice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    margin: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 3,
  },
  view: {
    flexDirection: 'row',
  },
});
