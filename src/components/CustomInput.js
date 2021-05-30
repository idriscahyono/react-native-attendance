import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomInput = props => {
  const {icon, secureTextEntry, inputStyle} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={{...styles.input, ...inputStyle}}
        secureTextEntry={secureTextEntry}
      />
      <Icon name={icon} size={20} color="black" style={styles.iconStyle} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 5,
  },
  input: {
    flex: 1,
    fontFamily: 'Nunito-Light',
    maxHeight: 41,
    fontSize: 18,
  },
});
