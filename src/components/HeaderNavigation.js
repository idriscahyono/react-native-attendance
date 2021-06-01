import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../assets/icons';

const HeaderNavigation = props => {
  const {onBack, name} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerIcon} onPress={onBack}>
        <BackIcon width={10} height={19} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%',
  },
  containerIcon: {
    position: 'absolute',
    left: 17,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
  },
});
