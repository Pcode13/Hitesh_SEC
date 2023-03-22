import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Sound from 'react-native-sound';
import {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  USER,
} from '../assests/SoundList';
const SpanishNum = () => {
  const SoundList = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN];

  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });
    setTimeout(() => {
      soundVar.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }, 1000);

    soundVar.release();
    
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={USER} />
      <View style={styles.gridConatinter}>
        {SoundList.map(Sound => (
          <TouchableOpacity
            key={Sound}
            style={styles.box}
            onPress={() => {
              playSound(Sound);
            }}>
            <Text style={styles.text}>{Sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SpanishNum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdd0',
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    color: '#2a075c',
    fontSize: 30,
  },
  gridConatinter: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 100,
    width: '45%',
    backgroundColor: '#e6d0ff',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: 'black',
    elevation: 5,
    shadowRadius: 5,
  },
});
