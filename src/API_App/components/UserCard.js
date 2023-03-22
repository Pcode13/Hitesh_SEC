import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import moment from 'moment';

const UserCard = ({details}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardItem}>
        <Image
          source={{
            uri: details.picture?.large,
            width: 150,
            height: 250,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>
          {details.name.title} {details.name.first} {details.name.last}
        </Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.text}>{details.cell}</Text>
      </View>
      <View style={styles.cardItem}>
        <Text style={styles.text}>{details.email}</Text>
      </View>
      <View style={styles.cardItem}>
        <Text style={styles.text}>
          {details.location.city} {details.location.state}{' '}
          {details.location.country}
        </Text>
      </View>

      <View style={[styles.cardItem, {flexDirection: 'row'}]}>
        <Text
          style={{
            color: '#fbd46d',
          }}>
          Registered on :{'  '}
        </Text>
        <Text style={styles.text}>
          {moment(details.registered.date).format('DD-MM-YYYY')}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});
