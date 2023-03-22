import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';


import {
  isValidEmailId,
  isValidMobileNumber,
  isValidPassword,
} from '../Helper/Validation';
// import {connect} from 'react-redux';

import Shortid from 'shortid';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../Redux/actions/auth';

const SignUP = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [number, setNumber] = useState('');
  const [numberErr, setNumberErr] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const dispatch = useDispatch();
  const demo = useSelector(state => state.auth);
  console.log('Demohjh', demo);
  function validateFields() {
    const validEmailId = isValidEmailId(email);
    const validMobileNo = isValidMobileNumber(number);
    const validPassword = isValidPassword(password);
    let isError = false;
    if (name === '') {
      setNameErr('Please Enter User Name');
      isError = true;
    } else {
      setNameErr('');
    }
    if (email === '') {
      setEmailErr('Please Enter Email');
      isError = true;
    } else if (!validEmailId.isEmailValid) {
      setEmailErr(validEmailId.errorMessage);
      isError = true;
    } else {
      setEmailErr('');
    }
    if (number === '') {
      setNumberErr('Please Enter Phone');
      isError = true;
    } else if (!validMobileNo.isMobileNoValid) {
      setNumberErr(validMobileNo.errorMessage);
    } else {
      setNumberErr('');
    }

    if (password === '') {
      setPasswordErr('Please Enter Password');
      isError = true;
    } else if (!validPassword.isPasswordValid) {
      setPasswordErr(validPassword.errorMessage);
    } else {
      setPasswordErr('');
    }

    return !isError;
  }

  const signup = async () => {
    if (validateFields()) {
      const UserData = {
        id: Shortid(),
        name: name,
        email: email,
        phone: number,
        address: address,
        password: password,
      };
   
      dispatch(register(UserData))
      navigation.goBack();
    } else {
      console.log('Not Working');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 20}}>
        <Text style={styles.titleTxt}> Create New Account</Text>
      </View>
      <View style={styles.inputData}>
        <CustomTextInput
          title={'Name'}
          placeholder={'Enter the name'}
          value={name}
          onChangeText={name => setName(name)}
          errorMsg={nameErr}
          error={nameErr !== ''}
        />

        <CustomTextInput
          title={'Email'}
          placeholder={'Enter the email'}
          value={email}
          onChangeText={email => setEmail(email)}
          errorMsg={emailErr}
          error={emailErr !== ''}
        />
        <CustomTextInput
          title={'Phone'}
          placeholder={'Enter the phone'}
          value={number}
          onChangeText={number => setNumber(number)}
          errorMsg={numberErr}
          error={numberErr !== ''}
        />
        <CustomTextInput
          title={'Address'}
          placeholder={'Enter the address'}
          value={address}
          onChangeText={address => setAddress(address)}
        />
        <CustomTextInput
          title={'Password'}
          placeholder={'Enter the password'}
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
          errorMsg={passwordErr}
          error={passwordErr !== ''}
        />
        <CustomButton title={'Sign Up'} onPress={signup} />
      </View>
    </View>
  );
};

export default SignUP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleTxt: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    color: '#99b333',
    margin: 5,
  },
  inputData: {
    padding: 5,
    marginTop: 10,
  },
});
