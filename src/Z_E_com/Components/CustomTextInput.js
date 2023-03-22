import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  title,
  placeholder,
  multiline,
  numberOfLines,
  value,
  onChangeText,
  error,
  errorMsg,
  secureTextEntry,
  keyboardType,
  customStyle,
}) => {
  const borderColor = error ? 'red' : 'blue';
  return (
    <View>
      <Text style={styles.headerStyle}>{title}</Text>
      <View>
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={'grey'}
          style={[styles.inputStyle, customStyle, {borderColor}]}
        />
        {error && errorMsg ? (
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        ) : (
          <View style={styles.marginBottom} />
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  headerStyle: {
    color: '#ff3366',
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    height: 40,
    borderColor: '#CED4DA',
    paddingHorizontal: 10,
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  errorMsg: {
    color: 'red',
    marginBottom: 15,
    fontSize: 12,
    marginTop: 5,
  },
  marginBottom: {marginBottom: 15},
});
