import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Home from '../Screens/Home';
import Add from '../Screens/Add';


const Stack = createStackNavigator();
import store from '../redux/Store';

const ReduxNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ADAB19',
            },
            headerTitleStyle: {
              textAlign: 'center',
              color: 'white',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default ReduxNavigation;
