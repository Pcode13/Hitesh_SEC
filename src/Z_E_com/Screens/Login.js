import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  isValidEmailId,
  isValidMobileNumber,
  isValidPassword,
} from '../Helper/Validation';

import {useDispatch, useSelector} from 'react-redux';
import {login} from '../Redux/actions/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.users);
  console.log('Users Login', user);
  const count = useSelector(store => store.auth);
  console.log('Users Login==>', count);

  function validateFields() {
    const validEmailId = isValidEmailId(email);
    const validPassword = isValidPassword(password);

    let isError = false;

    if (email === '') {
      setEmailErr('Please Enter Email');
      isError = true;
    } else if (!validEmailId.isEmailValid) {
      setEmailErr(validEmailId.errorMessage);
      isError = true;
    } else {
      setEmailErr('');
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

  const loginBtn = () => {
    if (validateFields()) {
      const c = user.map(item => {
        if (item.email == email && item.password == password) {
          console.log('yess');
          dispatch(login(item));
          navigation.navigate('Home');
        } else {
          console.log('NOOOO');
        }
      });

      // const payload = count?.users?.find(
      //   user => user.email === email && user.password === password,
      // );
      // console.log('check', count?.users.email);
      // if (payload) {
      //   dispatch(login(payload));
      //   console.log('Yess');
      //   alert('Success !!!');
      // } else {
      //   console.log('NO');
      // }
    } else {
      console.log('Not Working');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 20}}>
        <Text style={styles.titleTxt}>Login </Text>
      </View>
      <View style={styles.inputData}>
        <CustomTextInput
          title={'Email'}
          placeholder={'Enter the email'}
          value={email}
          onChangeText={email => setEmail(email)}
          errorMsg={emailErr}
          error={emailErr !== ''}
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
        <CustomButton title={'Login'} onPress={loginBtn} />

        <CustomButton
          title={'SignUp'}
          onPress={() => navigation.navigate('SignUP')}
        />
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   users: state.auth,
// });

// const mapDispatchToProps = {
//   login: data => login(data),
// };

// login.prototype = {
//   login: PropTypes.func.isRequired,
//   users: PropTypes.array.isRequired,
// };

//TODO: Redux export
export default Login;

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
