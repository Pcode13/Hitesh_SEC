import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';

const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [totalNoSeason, setTotalNoSeason] = useState('');

  useEffect(() => {
    const saveSeason = AsyncStorage.getItem('@seaon_list');

    console.log('demo', saveSeason);
  });

  const addToList = async () => {
    try {
      if (!name || !totalNoSeason) {
        return alert('Please Filled the Data');
      }

      const SeasonData = {
        id: Shortid.generate(),
        name,
        totalNoSeason,
        isCheck: false,
      };

      const SeasonList = await AsyncStorage.getItem('@season_list');
      const perviousList = await JSON.parse(SeasonList);
      if (!perviousList) {
        let newSeasonList = [SeasonData];
        AsyncStorage.setItem('@season_list', JSON.stringify(newSeasonList));
      } else {
        perviousList.push(SeasonData);
        AsyncStorage.setItem('@season_list', JSON.stringify(perviousList));
      }
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.Txt}>Add to watch List</Text>
        <TextInput
          placeholder="Enter The Name"
          style={styles.inputText}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Season numbers"
          style={styles.inputText}
          value={totalNoSeason}
          onChangeText={text => setTotalNoSeason(text)}
        />
        <TouchableOpacity style={styles.inputbtn} onPress={addToList}>
          <Text style={{color: 'black'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
  Txt: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 20,
  },
  inputText: {
    backgroundColor: '#BD6645',
    margin: 10,
    color: 'black',
  },
  inputbtn: {
    backgroundColor: '#29e',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: 'white',
  },
});
