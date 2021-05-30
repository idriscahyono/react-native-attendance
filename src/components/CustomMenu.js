import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomMenu = props => {
  const {nama, icon} = props;

  return (
    <View style={styles.cotainer}>
      <View style={styles.containerIcon}>{icon}</View>
      <Text style={styles.text}>{nama}</Text>
    </View>
  );
};

export default CustomMenu;

const styles = StyleSheet.create({
  cotainer: {
    width: 100,
    height: 94,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#003F5A',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginTop: 8,
  },
});
