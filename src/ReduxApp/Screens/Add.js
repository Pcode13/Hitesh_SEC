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
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import {addSeason} from '../redux/actions/list';
import {connect} from 'react-redux';

const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [totalNoSeason, setTotalNoSeason] = useState('');

  const hadleSumbit = async () => {
    try {
      if (!name || !totalNoSeason) {
        return alert('Please add both fields');
      }

      const seasonToAdd = {
        id: shortid.generate(),
        name,
        totalNoSeason,
        isWatched: false,
      };
      addSeason(seasonToAdd);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);

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
        <TouchableOpacity style={styles.inputbtn} onPress={hadleSumbit}>
          <Text style={{color: 'black'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  addSeason: data => addSeason(data),
};

Add.propTypes = {
  addSeason: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Add);

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
