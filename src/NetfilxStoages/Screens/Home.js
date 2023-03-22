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
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {useIsFocused} from '@react-navigation/native';


const LOGO = require('../Assets/Logo.png');

const Home = ({navigation, route}) => {
  const [watchList, setWatchList] = useState(['hjhj']);
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

  const getSeasonList = async () => {
    try {
      setIsLoading(true);

      const stoagesData = await AsyncStorage.getItem('@season_list');
      console.log(stoagesData);

      if (!watchList) {
        setWatchList([]);
      }
      const list = JSON.parse(stoagesData);
      setWatchList(list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async id => {
    const NewList = await watchList.filter(list => list.id !== id);
    AsyncStorage.setItem('@season_list', JSON.stringify(NewList));
    setWatchList(NewList);
  };

  // const makeCompelte = async (id) => {
  //   let newArr = watchList.map(list => {
  //     if (list.id == id) {
  //       list.isCheck = !list.isCheck
  //     }
  //     AsyncStorage.setItem('@season_list', JSON.stringify(newArr));
  //     setWatchList(newArr);
  //   })
  // };

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
          <Pressable style={{margin: 5}} onPress={() => deleteItem(item.id)}>
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
  useEffect(() => {
    getSeasonList();
  }, [isFocused]);
  if (isLoading) {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const togglebottomview = direction => {
    if (direction === 'up' && toValue != 0) {
      let toValue = 1;
      Animated.spring(newbounce, {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else if (direction === 'down' && toValue == 100) {
      let toValue = 100;
      Animated.spring(newbounce, {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      onScroll={event => {
        let currentOffset = event.nativeEvent.contentOffset.y;
        let direction = currentOffset ? 'down' : 'up';
        {
          togglebottomview(direction);
        }
      }}>
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
          {/* {watchList.map(item => (
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
                  onPress={() => deleteItem(item.id)}>
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
          ))} */}

          <FlatList
            data={watchList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
        </>
      )}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [{translateY: newbounce}],
            backgroundColor: '#fff',
          },
        ]}>
        <MyButton Iconname="plus" onPress={() => navigation.navigate('Add')} />
      </Animated.View>
    </ScrollView>
  );
};

export default Home;

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
    backgroundColor:'red'
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
