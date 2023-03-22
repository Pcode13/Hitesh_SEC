import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: '0.012',
  EURO: '0.011',
  POUND: '0.010',
  RUBEL: '0.926',
  AUSDOLLER: '0.018',
  CANDOLLER: '0.016',
  YEN: '1.645',
  DINAR: '0.004',
  BITCOIN: '5.98',
};

const CurrencyApp = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(1);
  const convertCurrency = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EF5354',
        textColor: 'white',
      });
    }

    let ResultCurrency = parseFloat(inputValue) * currencyPerRupee[currency];
    setResult(ResultCurrency.toFixed(2));
  };
  return (
    <>
      <ScrollView
        backgroundColor="#6FC366"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Currency Convert</Text>
          <View style={styles.resultConatiner}>
            <Text style={styles.resultTxt}>{result}</Text>
          </View>
          <View style={styles.inputConatiner}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor={'white'}
              value={inputValue.toString()}
              onChangeText={inputValue => setInputValue(inputValue)}
            />
          </View>
          <View style={styles.currenyView}>
            {/* {currencyPerRupee.map(currency => (
              <TouchableOpacity key={currency}>
                <Text>{currency}</Text>
              </TouchableOpacity>
            ))} */}
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                key={currency}
                style={styles.convertBtn}
                onPress={() => convertCurrency(currency)}>
                <Text style={styles.temp}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default CurrencyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FC366',
    padding: 10,
  },
  resultConatiner: {
    height: 70,
    marginTop: 60,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  resultTxt: {
    fontSize: 30,
    fontWeight: '600',
  },
  inputConatiner: {
    height: 60,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  input: {
    fontSize: 25,
    textAlign: 'center',
  },
  currenyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  temp: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  convertBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#ec5184',
    width: '33%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
