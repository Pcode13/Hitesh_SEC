import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import UserCard from '../components/UserCard';
import Axios from 'axios';
import {TouchableOpacity} from 'react-native';

const Home = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      console.log(details);

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  },[]);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <UserCard details={details} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => fetchDetails()}>
            <Text>New User</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
