import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import propTypes from 'prop-types';
import CheckBox from '@react-native-community/checkbox';
import {useIsFocused} from '@react-navigation/native';
import {removeSeason} from '../redux/actions/list';
import {connect} from 'react-redux';

const LOGO = require('../Assets/Logo.png');

const Home = ({navigation, removeSeason, watchList}) => {
  // const [watchList, setWatchList] = useState(['hjhj']);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const isFocused = useIsFocused();
  const newbounce = new Animated.Value(20);
  let toValue = 100;

  const MyButton = ({onPress, Iconname}) => {
    return (
      <Pressable onPress={onPress} style={styles.button}>
        <Icon name={Iconname} size={30} color="white" />
      </Pressable>
    );
  };

  const renderItem = ({item, index}) => {
    console.log(item.id);
    return (
      <View
        key={item.id}
        style={{
          flex: 1,
          backgroundColor: '#AF87A0',
          margin: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '90%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'space-around',
          }}>
          <Pressable
            style={{margin: 5}}
            onPress={() => {
              console.log(season.id);
              removeSeason(season.id);
            }}>
            <Icon name="trash" size={30} color="red" />
          </Pressable>

          <Pressable
            style={{margin: 5}}
            onPress={() => {
              navigation.navigate('Edit', {item});
            }}>
            <Icon name="pencil-square" size={30} color="blue" />
          </Pressable>
        </View>
        <View style={{margin: 5}}>
          <Text style={styles.Txt}>{item.name}</Text>
          <Text style={styles.Txt}>{item.totalNoSeason}</Text>
        </View>
        <View style={{margin: 5}}>
          {/* <CheckBox
            disabled={false}
            value={item.id}
            // onValueChange={() => makeCompelte(item.id)}
          /> */}
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Txt}>List of Netflix seasons</Text>
      {watchList == null ? (
        <View>
          <Image
            source={LOGO}
            style={{
              width: 200,
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 30,
            }}
          />
          <Text style={styles.Txt}>EMPTY LIST</Text>
        </View>
      ) : (
        <>
          {watchList.map(item => (
            <View
              style={{
                backgroundColor: '#AF87A0',
                margin: 5,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                  justifyContent: 'space-around',
                }}>
                <Pressable
                  style={{margin: 5}}
                  onPress={() => {
                    console.log(item.id);
                    removeSeason(item.id);
                  }}>
                  <Icon name="trash" size={30} color="red" />
                </Pressable>

                <Pressable
                  style={{margin: 5}}
                  onPress={() => {
                    navigation.navigate('Edit', {item});
                  }}>
                  <Icon name="pencil-square" size={30} color="blue" />
                </Pressable>
              </View>
              <View style={{margin: 5}}>
                <Text style={styles.Txt}>{item.name}</Text>
                <Text style={styles.Txt}>{item.totalNoSeason}</Text>
              </View>
              <View style={{margin: 5}}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
            </View>
          ))}

          {/* <FlatList
            data={watchList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          /> */}
        </>
      )}
      <View style={styles.buttonContainer}>
        <MyButton Iconname="plus" onPress={() => navigation.navigate('Add')} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  watchList: state.list,
});

const mapDispatchToProps = {

  removeSeason: id => removeSeason(id),
};

Home.propTypes = {
  removeSeason: propTypes.func.isRequired,
  watchList: propTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#ADAB19',
    padding: 10,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Txt: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '800',
    textAlign: 'center',
  },
});
