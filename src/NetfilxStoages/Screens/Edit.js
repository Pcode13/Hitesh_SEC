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

const Edit = ({navigation, route}) => {
  // const data = route.params.item;
  // console.log('Item Data', data);
  const [name, setName] = useState('');
  const [totalNoSeason, setTotalNoSeason] = useState('');
  const [id, setId] = useState(null);

  const updateItem = async () => {
    try {
      if (!name || !totalNoSeason) {
        return alert('Please fill the both daya');
      }

      const updateData = {
        id,
        name,
        totalNoSeason,
        isCheck: false,
      };

      const UpdateList = await AsyncStorage.getItem('@season_list');

      let UpdateItemList = await JSON.parse(UpdateList);

      UpdateItemList.map(list => {
        if (list.id == id) {
          list.name = name;
          list.totalNoSeason = totalNoSeason;
        }
        return list;
      });
      await AsyncStorage.setItem(
        '@season_list',
        JSON.stringify(UpdateItemList),
      );

      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const {id, name, totalNoSeason} = route.params.item;
    setId(id);
    setName(name);
    setTotalNoSeason(totalNoSeason);
  },[]);

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
        <TouchableOpacity style={styles.inputbtn} onPress={updateItem}>
          <Text style={{color: 'black'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Edit;

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
