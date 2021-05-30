import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const CustomInputRound = () => {
  const [isFocus, setIsFocus] = useState(false);

  const focus = () => {
    setIsFocus(true);
  };
  const blur = () => {
    setIsFocus(false);
  };
  return (
    <View
      style={{
        ...styles.container,
        borderColor: isFocus ? '#FFB951' : '#D0DBEA',
        borderWidth: isFocus ? 2 : 1,
      }}>
      <TextInput
        onFocus={focus}
        onBlur={blur}
        style={styles.input}
        textAlign="center"
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default CustomInputRound;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  input: {
    fontSize: 34,
    color: '#3E5481',
  },
});
